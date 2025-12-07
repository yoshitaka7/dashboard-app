interface ClockWidgetUIProps {
  time: Date;
  className?: string;
}

export function ClockWidgetUI({ time, className = "" }: ClockWidgetUIProps) {
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const dateStr = time.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <div
      className={`rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 ${className}`}
    >
      <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
        Clock
      </h3>
      <div className="text-center">
        <div className="mb-2 text-4xl font-bold text-gray-900 dark:text-gray-100">
          {hours}:{minutes}:{seconds}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {dateStr}
        </div>
      </div>
    </div>
  );
}
