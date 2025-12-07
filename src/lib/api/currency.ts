import { CurrencyData } from "@/types";
import { CURRENCY_API_URL } from "./config";

export async function fetchCurrency(
  base: string = "USD",
  target: string = "JPY"
): Promise<CurrencyData> {
  try {
    const response = await fetch(`${CURRENCY_API_URL}/${base}`);

    if (!response.ok) {
      throw new Error("Currency API error");
    }

    const data = await response.json();
    const rate = data.rates[target] || 1;

    return {
      base,
      target,
      rate: Number(rate.toFixed(2)),
      lastUpdated: new Date().toLocaleString("en-US"),
    };
  } catch (error) {
    console.error("Currency fetch error:", error);
    return {
      base,
      target,
      rate: 150.0,
      lastUpdated: new Date().toLocaleString("en-US"),
    };
  }
}
