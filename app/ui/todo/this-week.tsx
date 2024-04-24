import { PlusIcon } from '@heroicons/react/24/outline';
import { outfit } from '@/app/ui/font';

export default function ThisWeekTodoList() {
  return(
    <>
      <button className='flex flex-row w-full p-2 items-center rounded border'>
        <PlusIcon className='w-4 text-gray-400 mr-2'/>
        <p className={`${outfit.className} text-sm text-gray-400`}>Add New Task</p>
      </button>
      <div className='h-full'>

      </div>  
    </>
  )
}