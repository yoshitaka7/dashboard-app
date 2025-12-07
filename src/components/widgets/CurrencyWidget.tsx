"use client";

import { useEffect, useState } from "react";
import { fetchCurrency } from "@/lib";
import { CurrencyData } from "@/types";
import { CurrencyWidgetUI } from "./CurrencyWidgetUI";

interface CurrencyWidgetProps {
  className?: string;
  base?: string;
  target?: string;
}

export function CurrencyWidget({
  className = "",
  base = "USD",
  target = "JPY",
}: CurrencyWidgetProps) {
  const [currency, setCurrency] = useState<CurrencyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCurrency = async () => {
      setLoading(true);
      const data = await fetchCurrency(base, target);
      setCurrency(data);
      setLoading(false);
    };

    loadCurrency();
    const interval = setInterval(loadCurrency, 3600000); // Update every hour

    return () => clearInterval(interval);
  }, [base, target]);

  return (
    <CurrencyWidgetUI
      currency={currency}
      loading={loading}
      className={className}
    />
  );
}
