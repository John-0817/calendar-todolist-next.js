import { lists } from '@/app/lib/list-asset';
import Link from 'next/link';

interface Task {
  id: string;
  title: string;
  description: string;
  list: string;
  date: Date;
  timestamp: string;
  done: boolean;
}

type TaskList = Task[];

export default function RenderTaskDetail( { taskList, day }: { taskList: TaskList, day: number } ) {
  const notNull = taskList !== null && taskList !== undefined;
  return(
    <>
      {notNull && taskList.map((task) => {
        const task_id = task.id;
        const task_title = task.title;
        const task_description = task.description;
        const task_list = task.list;
        const task_timestamp = task.timestamp;
        const task_done = task.done;
        const task_day = new Date(task.date).getDay()
        const list = lists.find(item => item.title === task_list);
        const list_color = list?.color;
        return(
          <Link 
            key={task_id}
            href={{
              pathname: `/todo/calendar/week/task/${task_id}`,
              query: {
                title: task_title,
                description: task_description,
                list: task_list,
                date: task.date.toString(),
                timestamp: task_timestamp,
                done: task_done,
              }
            }}
          >
            {(task_day === day) && (
              <div className={`${list_color} bg-opacity-80 p-2 mr-2 mt-2 rounded`}>
                <p className='text-xs font-medium'>{task_title}</p>
              </div>
            )}
          </Link>
        )
      })}
    </>
  )
}