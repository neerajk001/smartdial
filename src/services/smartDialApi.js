const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "/sdpanel/api/index.php/Auth").replace(/\/$/, "");
const API_KEY = "Surplus_apikey@";

const DEFAULT_PLANS = [
  {
    name: "Quarterly",
    originalPrice: "₹600",
    price: "₹450",
    cycle: "per user / 3 months",
    discount: "Save 25%",
    eff: "₹150",
    featured: false,
  },
  {
    name: "Half Yearly",
    originalPrice: "₹1200",
    price: "₹780",
    cycle: "per user / 6 months",
    discount: "Save 35%",
    eff: "₹130",
    featured: true,
  },
  {
    name: "Yearly",
    originalPrice: "₹2400",
    price: "₹1200",
    cycle: "per user / 12 months",
    discount: "Save 50%",
    eff: "₹100",
    featured: false,
  },
];

const toCurrency = (value) => {
  if (value === null || value === undefined || value === "") return "";
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return String(value).startsWith("₹") ? String(value) : `₹${value}`;
  }
  return `₹${numeric}`;
};

const toNumber = (value) => {
  if (value === null || value === undefined || value === "") return NaN;
  if (typeof value === "number") return value;
  const cleaned = String(value).replace(/[^0-9.]/g, "");
  return Number(cleaned);
};

const getValue = (obj, keys, fallback = "") => {
  for (const key of keys) {
    const value = obj?.[key];
    if (value !== undefined && value !== null && value !== "") {
      return value;
    }
  }
  return fallback;
};

const normalizePlans = (payload) => {
  const source = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.data)
      ? payload.data
      : Array.isArray(payload?.result)
        ? payload.result
        : [];

  if (!source.length) {
    return DEFAULT_PLANS;
  }

  const normalized = source.map((item, index) => {
    const months = toNumber(getValue(item, ["months", "duration", "tenure", "month"]));
    const priceValue = getValue(item, ["final_price", "offer_price", "discounted_price", "amount", "price"]);
    const originalValue = getValue(item, ["price", "original_price", "mrp", "base_price", "actual_price"]);

    const priceNumber = toNumber(priceValue);
    const originalNumber = toNumber(originalValue);
    const hasBothNumbers = Number.isFinite(priceNumber) && Number.isFinite(originalNumber);
    // Some payloads return offer and original values swapped; force discounted <= original.
    const shouldSwapPrices = hasBothNumbers && priceNumber > originalNumber;
    const normalizedPriceNumber = shouldSwapPrices ? originalNumber : priceNumber;
    const normalizedOriginalNumber = shouldSwapPrices ? priceNumber : originalNumber;

    const name =
      getValue(item, ["name", "plan_name", "title"], "") ||
      (Number.isFinite(months)
        ? months === 3
          ? "Quarterly"
          : months === 6
            ? "Half Yearly"
            : months === 12
              ? "Yearly"
              : `${months} Months`
        : DEFAULT_PLANS[index]?.name || `Plan ${index + 1}`);

    const finalMonths = Number.isFinite(months)
      ? months
      : name.toLowerCase().includes("quarter")
        ? 3
        : name.toLowerCase().includes("half")
          ? 6
          : name.toLowerCase().includes("year")
            ? 12
            : 1;

    const discountRaw = getValue(item, ["discount_text", "discount"], "");
    const discountNumber = toNumber(discountRaw);
    const discountText =
      (Number.isFinite(discountNumber) ? `Save ${discountNumber}%` : discountRaw) ||
      (Number.isFinite(normalizedPriceNumber) &&
      Number.isFinite(normalizedOriginalNumber) &&
      normalizedOriginalNumber > normalizedPriceNumber
        ? `Save ${Math.round(((normalizedOriginalNumber - normalizedPriceNumber) / normalizedOriginalNumber) * 100)}%`
        : "");

    const effectiveMonthly =
      Number.isFinite(normalizedPriceNumber) && finalMonths > 0
        ? Math.round((normalizedPriceNumber / finalMonths) * 100) / 100
        : NaN;

    return {
      name,
      originalPrice: Number.isFinite(normalizedOriginalNumber)
        ? toCurrency(normalizedOriginalNumber)
        : toCurrency(originalValue) || DEFAULT_PLANS[index]?.originalPrice || "",
      price: Number.isFinite(normalizedPriceNumber)
        ? toCurrency(normalizedPriceNumber)
        : toCurrency(priceValue) || DEFAULT_PLANS[index]?.price || "",
      cycle: getValue(item, ["description", "cycle"], "") || `per user / ${finalMonths} month${finalMonths > 1 ? "s" : ""}`,
      discount: discountText || DEFAULT_PLANS[index]?.discount || "",
      eff: Number.isFinite(effectiveMonthly)
        ? toCurrency(effectiveMonthly)
        : DEFAULT_PLANS[index]?.eff || "",
      featured:
        String(getValue(item, ["popular", "is_popular", "featured"], "")).toLowerCase() === "1" ||
        String(getValue(item, ["popular", "is_popular", "featured"], "")).toLowerCase() === "true" ||
        name.toLowerCase().includes("half"),
      months: finalMonths,
    };
  });

  return normalized
    .sort((a, b) => a.months - b.months)
    .map((plan) => {
      const cleanedPlan = { ...plan };
      delete cleanedPlan.months;
      return cleanedPlan;
    });
};

export const fetchPlanData = async () => {
  const response = await fetch(`${API_BASE_URL}/getplandata`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "X-API-KEY": API_KEY,
    },
  });

  if (!response.ok) {
    let details = "";
    try {
      details = await response.text();
    } catch {
      details = "";
    }
    const suffix = details ? ` - ${details.slice(0, 180)}` : "";
    throw new Error(`Failed to fetch plan data: ${response.status}${suffix}`);
  }

  const payload = await response.json();
  return normalizePlans(payload);
};

export const saveClientLead = async ({
  name,
  phone,
  companyName,
  email,
  noOfEmp,
  address,
  turnstileToken,
}) => {
  const formData = new FormData();
  formData.append("name", name || "");
  formData.append("phone", phone || "");
  formData.append("company_name", companyName || "Website Lead");
  formData.append("email", email || "");
  formData.append("no_of_emp", noOfEmp || "1");
  formData.append("address", address || "");
  formData.append("cf-turnstile-response", turnstileToken || "");

  const response = await fetch(`${API_BASE_URL}/saveclient`, {
    method: "POST",
    headers: {
      "X-API-KEY": API_KEY,
    },
    body: formData,
  });

  if (!response.ok) {
    const contentType = response.headers.get("content-type") || "";
    let backendMessage = "";

    try {
      if (contentType.includes("application/json")) {
        const errorPayload = await response.json();
        backendMessage = errorPayload?.message || errorPayload?.error || "";
      } else {
        backendMessage = await response.text();
      }
    } catch {
      backendMessage = "";
    }

    const message = backendMessage
      ? `Failed to submit form: ${backendMessage}`
      : `Failed to submit form: ${response.status}`;
    throw new Error(message);
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
};

export { DEFAULT_PLANS };