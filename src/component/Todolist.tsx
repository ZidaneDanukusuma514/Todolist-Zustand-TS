import * as React from "react";
import { useStore } from "../Store/Zustand";
import Todoitem from "./Todoitem";

export interface ITodolistProps {}

export default function Todolist(props: ITodolistProps) {
  const Data = useStore((state) => state.Data);
  return (
    <div className="flex flex-col w-[50%] space-y-4 mx-auto bg-slate-400 p-4">
      <h2 className="font-thin text-lg px-6">Todo List:</h2>
      {Data.map((data, index) => (
        <Todoitem
          key={index}
          id={data.id}
          text={data.text}
          priority={data.priority}
          complete={data.complete}
        />
      ))}
    </div>
  );
}
