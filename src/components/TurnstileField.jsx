import React from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { TURNSTILE_SITE_KEY } from "../config/turnstile";

const TurnstileField = ({ onTokenChange }) => {
  if (!TURNSTILE_SITE_KEY) {
    return (
      <p className="text-sm text-red-600">
        Captcha is unavailable right now. Please try again later.
      </p>
    );
  }

  return (
    <Turnstile
      siteKey={TURNSTILE_SITE_KEY}
      onSuccess={(token) => onTokenChange(token)}
      onExpire={() => onTokenChange("")}
      onError={() => onTokenChange("")}
      options={{ theme: "light", size: "flexible" }}
    />
  );
};

export default TurnstileField;
