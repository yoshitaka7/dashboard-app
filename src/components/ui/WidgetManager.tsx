'use client';

import { useWidgetStore } from "@/store";
import { WidgetType } from "@/types";

interface WidgetManagerProps {
  className?: string;
}

const widgetTypes: { type: WidgetType; label: string }[] = [
  { type: 'clock', label: 'Clock' },
  { type: 'weather', label: 'Weather' },
  { type: 'currency', label: 'Currency' },
  { type: 'news', label: 'News' },
];

export function WidgetManager({ className = '' }: WidgetManagerProps) {
  const addWidget = useWidgetStore((state) => state.addWidget);

  return (
    <div className={`rounded-lg bg-white p-4 shadow-md dark:bg-gray-800 ${className}`}>
      <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
        Add Widget
      </h3>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {widgetTypes.map(({ type, label }) => (
          <button
            key={type}
            onClick={() => addWidget(type)}
            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            + {label}
          </button>
        ))}
      </div>
    </div>
  );
}

