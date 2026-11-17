const configuredApiBaseUrl =
  import.meta.env.VITE_API_BASE_URL || "https://samicapitalx.vercel.app";

export const API_BASE_URL = configuredApiBaseUrl.replace(/\/+$/, "");
export const API_URL = `${API_BASE_URL}/api/lps`;
export const COMPANY_API_URL = `${API_BASE_URL}/api/companies`;
