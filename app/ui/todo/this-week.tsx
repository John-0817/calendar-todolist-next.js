import { PlusIcon } from '@heroicons/react/24/outline';
import { outfit } from '@/app/ui/font';
import { UpcomingTaskListThisWeek } from '@/app/ui/todo/task-list';
import Link from 'next/link';

export default function UpcomingThisWeekTodoList() {
  return(
    <>
      <Link 
        href={'/todo/overview/create-task/this-week'}
        className='flex flex-row w-full mt-1 p-2 items-center rounded border'
      >
        <PlusIcon className='w-4 text-gray-400 mr-2'/>
        <p className={`${outfit.className} text-sm text-gray-400`}>Add New Task</p>
      </Link>
      <div className='mt-2 divide-y'>
        <UpcomingTaskListThisWeek />
      </div>
    </>
  )
}