import uuid from "react-uuid";
import { create } from "zustand";
import { DataProps, TodoProps } from "./Interface";

export const useStore = create<TodoProps>((set) => ({
  Data: [
    { id: "1101", text: "Zustand is simple", priority: 10, complete: false },
  ],
  handleAdd: ({ text, priority }: { text: string; priority: number }) => {
    set((state) => ({
      Data: [
        ...state.Data,
        {
          id: uuid(),
          text: text,
          priority: priority,
          complete: false,
        } as DataProps,
      ],
    }));
  },
  handleDelete: (id: string) => {
    set((state) => ({
      Data: state.Data.filter((todo) => todo.id !== id),
    }));
  },
}));
