// export type Subtask = {
//   taskId: string,
//   id: string,
//   description: string,
// };

export type Task = {
  id: string,
  title: string,
  description: string,
  list: string,
  date: Date,
  timestamp: string,
  done: boolean,
};

export type WeeklyTask = {
  title: string,
  list: string,
  due_date: Date,
};

export type MonthlyTask = {
  list: string,
  due_date: Date,
};

export type StickyWall = {
  // id: string,
  title: string,
  description: string,
};

export type List = {
  // id: string,
  title: string,
  color: string,
  href: string,
  isVisible: boolean,
};