"use client";

import { useEffect } from "react";
import { useWidgetStore } from "@/store";
import { WidgetContainer, WidgetManager } from "@/components";

export default function Home() {
  const { widgets, initializeWidgets, removeWidget, moveWidget } =
    useWidgetStore();

  useEffect(() => {
    if (widgets.length === 0) {
      initializeWidgets();
    }
  }, [widgets.length, initializeWidgets]);

  const handleRemove = (id: string) => {
    removeWidget(id);
  };

  const handleMoveUp = (id: string) => {
    moveWidget(id, "up");
  };

  const handleMoveDown = (id: string) => {
    moveWidget(id, "down");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 dark:bg-gray-900 md:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Add, remove, and rearrange widgets to customize your dashboard
          </p>
        </header>

        <div className="mb-6">
          <WidgetManager />
        </div>

        {widgets.length === 0 ? (
          <div className="rounded-lg bg-white p-12 text-center shadow-md dark:bg-gray-800">
            <p className="text-gray-600 dark:text-gray-400">
              No widgets yet. Add widgets using the buttons above.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {widgets.map((widget, index) => (
              <WidgetContainer
                key={widget.id}
                widget={widget}
                onRemove={() => handleRemove(widget.id)}
                onMoveUp={() => handleMoveUp(widget.id)}
                onMoveDown={() => handleMoveDown(widget.id)}
                canMoveUp={index > 0}
                canMoveDown={index < widgets.length - 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
