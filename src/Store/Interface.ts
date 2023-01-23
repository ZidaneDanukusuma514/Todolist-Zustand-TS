export interface DataProps {
  id: string;
  text: string;
  priority: number;
  complete: boolean;
}

export interface TodoProps {
  Data: DataProps[];
  handleAdd: ({ text, priority }: { text: string; priority: number }) => void;
  handleDelete: (id: string) => void;
}
