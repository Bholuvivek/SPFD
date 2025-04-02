
export type Status = 'NEW' | 'INPROGRESS' | 'COMPLETED';

export interface DragAndDropComponentProps {
  id: number;
  title: string;
  description: string;
  status: Status
}

export const todos: DragAndDropComponentProps[] = [
  {
    id: 1,
    title: "Complete Homework",
    description: "Finish math and science homework before the weekend.",
    status: 'NEW'
  },
  {
    id: 2,
    title: "Buy Groceries",
    description: "Get vegetables, fruits, and milk for the week.",
    status: 'INPROGRESS'
  },
  {
    id: 3,
    title: "Clean the House",
    description: "Vacuum the floors and clean the kitchen.",
    status: 'NEW'
  },
  {
    id: 5,
    title: "Exercise",
    description: "Go for a 30-minute jog in the park.",
    status: 'INPROGRESS'
  },
  {
    id: 6,
    title: "Read Book",
    description: "Finish reading the first chapter of 'The Great Gatsby'.",
    status: 'NEW'
  }
];
