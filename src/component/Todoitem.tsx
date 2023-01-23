import * as React from "react";
import { DataProps } from "../Store/Interface";
import { useStore } from "../Store/Zustand";

export default function Todoitem({ id, text, priority, complete }: DataProps) {
  const handleDelete = useStore((state) => state.handleDelete);
  const handleDel = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleDelete(id);
  };
  return (
    <div className="flex bg-slate-600 hover:bg-slate-800 p-6">
      <p className="grow text-white">{text}</p>
      <div className="space-x-2">
        <p className="float-left font-bold text-white">Priority: {priority}</p>
        <button className="px-2 bg-green-500">✓</button>
        <button onClick={handleDel} className="px-2 bg-red-500">
          Del
        </button>
      </div>
    </div>
  );
}
