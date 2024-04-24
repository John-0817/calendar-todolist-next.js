import { fetchTaskToday } from '@/app/lib/data';
import { outfit } from '@/app/ui/font'
import { 
  ChevronRightIcon, 
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';
import { lists } from '@/app/lib/list-asset';
import Button from './button';
import Link from 'next/link';

export default async function TaskListToday() {
  const taskForToday = await fetchTaskToday();
  
  return(
    <>
      {taskForToday.map((task) => {
        const task_id = task.id;
        const task_title = task.title;
        const task_description = task.description;
        const task_list = task.list;
        const task_due_date = new Date(task.date).toLocaleDateString();
        const task_timestamp = task.timestamp;
        const task_done = task.done;
        const list = lists.find(item => item.title === task_list);
        const list_color = list?.color;

        console.log("task done type: ", typeof task_done);
        
        return(
          <Link 
            key={task_id} 
            href={{
              pathname: `/todo/today/task/${task_id}`,
              query: {
                title: task_title,
                description: task_description,
                list: task_list,
                date: task.date.toString(),
                timestamp: task_timestamp,
                done: task_done,
              }
            }}
            className={`${outfit.className} text-sm grow flex flex-col grid grid-rows-2`}
          >
            <div className='flex flex-row px-2 mt-2 items-center justify-between'>
              <div className='flex flex-row items-center'>
                <Button taskId={task_id} taskDone={task_done} />
                <h2>{task_title}</h2>
              </div>
              <ChevronRightIcon className='w-4'/>
            </div>
            <div className='flex flex-row ml-6'>
              <div className='flex flex-row items-center px-2'>
                <CalendarDaysIcon className='w-4 mr-2'/>
                <p>
                  {task_due_date}
                </p>
              </div>
              <div className='flex flex-row items-center px-2'>
                <div className={`${list_color} w-4 h-4 border rounded mr-2`} />
                <p>
                  {task_list}
                </p>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}