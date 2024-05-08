import { lists } from '@/app/lib/list-asset';
import { fetchTaskThisWeek } from '@/app/lib/data';
import Link from 'next/link';
import clsx from 'clsx';

export default async function RenderThisWeekTaskDetail( {targetDate}: { targetDate: Date}) {
  const date = targetDate;
  const month = date.getMonth();
  const year = date.getFullYear();

  const weekStart = date.getDate() - date.getDay() < 0 ? 1 : date.getDate() - date.getDay();
  const weekEnd = date.getDate() + 6 - date.getDay() > new Date(year, month + 1, 0).getDate() 
  ? new Date(year, month + 1, 0).getDate() : date.getDate() + 6 - date.getDay();

  const taskForThisWeek = await fetchTaskThisWeek(date);

  const currentWeekStart = new Date().getDate() - new Date().getDay() < 0 ? 1 : new Date().getDate() - new Date().getDay();
  const currentWeekEnd = new Date().getDate() + 6 - new Date().getDay() > new Date(year, month + 1, 0).getDate() 
    ? new Date(year, month + 1, 0).getDate() : new Date().getDate() + 6 - new Date().getDay();

  const today = weekStart === currentWeekStart && weekEnd === currentWeekEnd ? new Date().getDay() : 9;
  const days = Array.from({ length:7 }, (_, index) => index);
  return(
    <>
      {days.map((day) => (
        <div 
          key={day}
          className={clsx('pt-2 pl-2', {'bg-gray-200 rounded-b-lg': today === day}, {'border-l': today + 1 !== day && day !== 0} )}
        >
          {taskForThisWeek.map((task) => {
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
                    include: date.toString(),
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
        </div>
      ))}
    </>
  )
}