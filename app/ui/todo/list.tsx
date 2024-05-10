import { outfit } from '@/app/ui/font';
import { PlusIcon } from '@heroicons/react/24/outline';
import { RenderList } from '@/app/ui/todo/task-list';
import { fetchTaskByListPage } from '@/app/lib/data';
import { PaginationByList } from './pagination';
import Link from 'next/link';

export default async function RenderListTask({list, page}: {list: string, page: number}) {
  const totalPages = await fetchTaskByListPage(list);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  
  return(
    <>
      <Link 
        href={`/todo/lists/${list}/create-task`}
        className='flex flex-row w-full p-2 items-center rounded border'
      >
        <PlusIcon className='w-4 text-gray-400 mr-2'/>
        <p className={`${outfit.className} text-sm text-gray-400`}>Add New Task</p>
      </Link>
      <div className='h-5/6 mt-2 divide-y'>
        <RenderList pathList={list} currentPage={page}/>
      </div>
      <PaginationByList totalPages={pages} currentPage={page}/>
    </>
  )
}