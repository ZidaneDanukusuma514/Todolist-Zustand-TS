import * as React from "react";
import Todoform from "../component/Todoform";
import Todolist from "../component/Todolist";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-mono my-4">
        Todolist + Zustand + Typescript
      </h1>
      <Todoform />
      <Todolist />
    </div>
  );
}
