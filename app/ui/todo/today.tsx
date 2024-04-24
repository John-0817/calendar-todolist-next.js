import { PlusIcon } from '@heroicons/react/24/outline';
import { outfit } from '@/app/ui/font';
import { TaskListToday } from './today-task-list';
import Link from 'next/link';

export default async function TodayTodoList() {
  return(
    <>
      <Link 
        href={'/todo/today/create-task'}
        className='flex flex-row w-full p-2 items-center rounded border'
      >
        <PlusIcon className='w-4 text-gray-400 mr-2'/>
        <p className={`${outfit.className} text-sm text-gray-400`}>Add New Task</p>
      </Link>
      <div className='divide-y'>
        <TaskListToday />
      </div>
    </>
  )
}