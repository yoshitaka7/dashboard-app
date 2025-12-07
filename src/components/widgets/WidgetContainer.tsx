'use client';

import { Widget } from "@/types";
import { ClockWidget } from './ClockWidget';
import { WeatherWidget } from './WeatherWidget';
import { CurrencyWidget } from './CurrencyWidget';
import { NewsWidget } from './NewsWidget';

interface WidgetContainerProps {
  widget: Widget;
  onRemove?: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  canMoveUp?: boolean;
  canMoveDown?: boolean;
}

export function WidgetContainer({
  widget,
  onRemove,
  onMoveUp,
  onMoveDown,
  canMoveUp = false,
  canMoveDown = false,
}: WidgetContainerProps) {
  const renderWidget = () => {
    switch (widget.type) {
      case 'clock':
        return <ClockWidget />;
      case 'weather':
        return <WeatherWidget />;
      case 'currency':
        return <CurrencyWidget />;
      case 'news':
        return <NewsWidget />;
      default:
        return null;
    }
  };

  return (
    <div className="relative group">
      <div className="absolute right-2 top-2 z-10 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        {onMoveUp && (
          <button
            onClick={onMoveUp}
            disabled={!canMoveUp}
            className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
            title="Move up"
          >
            ↑
          </button>
        )}
        {onMoveDown && (
          <button
            onClick={onMoveDown}
            disabled={!canMoveDown}
            className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
            title="Move down"
          >
            ↓
          </button>
        )}
        {onRemove && (
          <button
            onClick={onRemove}
            className="rounded bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600"
            title="Remove"
          >
            ×
          </button>
        )}
      </div>
      {renderWidget()}
    </div>
  );
}

