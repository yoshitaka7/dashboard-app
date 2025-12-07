import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Widget, WidgetType } from "@/types";

interface WidgetStore {
  widgets: Widget[];
  addWidget: (type: WidgetType) => void;
  removeWidget: (id: string) => void;
  moveWidget: (id: string, direction: 'up' | 'down') => void;
  initializeWidgets: () => void;
}

const defaultWidgets: Widget[] = [
  { id: '1', type: 'clock', order: 0 },
  { id: '2', type: 'weather', order: 1 },
  { id: '3', type: 'currency', order: 2 },
  { id: '4', type: 'news', order: 3 },
];

export const useWidgetStore = create<WidgetStore>()(
  persist(
    (set) => ({
      widgets: [],
      initializeWidgets: () => {
        set({ widgets: defaultWidgets });
      },
      addWidget: (type: WidgetType) => {
        set((state) => {
          const maxOrder = state.widgets.length > 0
            ? Math.max(...state.widgets.map((w) => w.order))
            : -1;
          const newWidget: Widget = {
            id: Date.now().toString(),
            type,
            order: maxOrder + 1,
          };
          return {
            widgets: [...state.widgets, newWidget].sort((a, b) => a.order - b.order),
          };
        });
      },
      removeWidget: (id: string) => {
        set((state) => ({
          widgets: state.widgets
            .filter((w) => w.id !== id)
            .map((w, index) => ({ ...w, order: index })),
        }));
      },
      moveWidget: (id: string, direction: 'up' | 'down') => {
        set((state) => {
          const widgets = [...state.widgets];
          const index = widgets.findIndex((w) => w.id === id);
          if (index === -1) return state;

          const newIndex = direction === 'up' ? index - 1 : index + 1;
          if (newIndex < 0 || newIndex >= widgets.length) return state;

          [widgets[index], widgets[newIndex]] = [widgets[newIndex], widgets[index]];
          widgets[index].order = index;
          widgets[newIndex].order = newIndex;

          return { widgets };
        });
      },
    }),
    {
      name: 'widget-storage',
    }
  )
);

