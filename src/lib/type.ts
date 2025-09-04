export interface Task {
  id: string;
  item: string;
  price: number;
}

export type AddTask = Omit<Task, "id">;
