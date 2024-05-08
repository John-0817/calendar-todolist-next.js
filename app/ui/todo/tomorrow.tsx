import { PlusIcon } from '@heroicons/react/24/outline';
import { outfit } from '@/app/ui/font';
import { UpcomingTaskListTomorrow } from '@/app/ui/todo/task-list';
import Link from 'next/link';

export default function UpcomingTomorrowTodoList() {
  return(
    <>
      <Link 
        href={'/todo/overview/create-task/tomorrow'}
        className='flex flex-row w-full mt-1 p-2 items-center rounded border'
      >
        <PlusIcon className='w-4 text-gray-400 mr-2'/>
        <p className={`${outfit.className} text-sm text-gray-400`}>Add New Task</p>
      </Link>
      <div className='divide-y'>
        <UpcomingTaskListTomorrow />
      </div>
    </>
  )
}