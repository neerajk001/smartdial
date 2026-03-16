const API_BASE_URL = "https://smartdial.co.in/sdpanel/api/index.php/Auth";
const API_KEY = "Surplus_apikey@";

const DEFAULT_PLANS = [
  {
    name: "Quarterly",
    originalPrice: "₹450",
    price: "₹360",
    cycle: "per user / 3 months",
    discount: "Save 20%",
    eff: "₹120",
    featured: false,
  },
  {
    name: "Half Yearly",
    originalPrice: "₹900",
    price: "₹630",
    cycle: "per user / 6 months",
    discount: "Save 30%",
    eff: "₹105",
    featured: true,
  },
  {
    name: "Yearly",
    originalPrice: "₹1800",
    price: "₹900",
    cycle: "per user / 12 months",
    discount: "Save 50%",
    eff: "₹75",
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
    const priceValue = getValue(item, ["offer_price", "price", "amount", "final_price"]);
    const originalValue = getValue(item, ["original_price", "mrp", "base_price", "actual_price"]);

    const priceNumber = toNumber(priceValue);
    const originalNumber = toNumber(originalValue);

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

    const discountText =
      getValue(item, ["discount_text", "discount"], "") ||
      (Number.isFinite(priceNumber) && Number.isFinite(originalNumber) && originalNumber > priceNumber
        ? `Save ${Math.round(((originalNumber - priceNumber) / originalNumber) * 100)}%`
        : "");

    const effectiveMonthly =
      Number.isFinite(priceNumber) && finalMonths > 0
        ? Math.round((priceNumber / finalMonths) * 100) / 100
        : NaN;

    return {
      name,
      originalPrice: toCurrency(originalValue) || DEFAULT_PLANS[index]?.originalPrice || "",
      price: toCurrency(priceValue) || DEFAULT_PLANS[index]?.price || "",
      cycle: `per user / ${finalMonths} month${finalMonths > 1 ? "s" : ""}`,
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
    headers: {
      "X-API-KEY": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch plan data: ${response.status}`);
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
}) => {
  const formData = new FormData();
  formData.append("name", name || "");
  formData.append("phone", phone || "");
  formData.append("company_name", companyName || "Website Lead");
  formData.append("email", email || "");
  formData.append("no_of_emp", noOfEmp || "1");
  formData.append("address", address || "");

  const response = await fetch(`${API_BASE_URL}/saveclient`, {
    method: "POST",
    headers: {
      "X-API-KEY": API_KEY,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Failed to submit form: ${response.status}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
};

export { DEFAULT_PLANS };