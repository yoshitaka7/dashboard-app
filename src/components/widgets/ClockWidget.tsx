"use client";

import { useEffect, useState } from "react";
import { ClockWidgetUI } from "./ClockWidgetUI";

interface ClockWidgetProps {
  className?: string;
}

export function ClockWidget({ className = "" }: ClockWidgetProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <ClockWidgetUI time={time} className={className} />;
}
