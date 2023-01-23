import * as React from "react";
import { useStore } from "../Store/Zustand";

export interface ITodoformProps {}

export default function Todoform(props: ITodoformProps) {
  const handleAdd = useStore((state) => state.handleAdd);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleAdd({ text: Text, priority: Priority });
    setText("");
    setPriority(0);
  };
  const [Text, setText] = React.useState<string>("");
  const [Priority, setPriority] = React.useState<number>(0);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex mx-auto rounded-sm p-4 w-[50%] bg-slate-800"
    >
      <input
        onChange={(e) => setText(e.target.value)}
        className="grow text-lg"
        type="text"
        placeholder="Write here"
      />
      <input
        onChange={(e) => setPriority(Number(e.target.value))}
        className="text-lg"
        type="number"
        placeholder="Priority here"
      />
      <button
        type="submit"
        className="bg-green-500 font-bold text-white px-2 uppercase"
      >
        add
      </button>
    </form>
  );
}
