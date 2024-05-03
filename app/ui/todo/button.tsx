'use client'
import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { usePathname, useSearchParams } from 'next/navigation';
import { updateState } from '@/app/lib/actions';

export default function Button({ taskId, taskDone }: { taskId: string, taskDone: boolean }) {
  let pathname = usePathname();
  const searchParams = useSearchParams().toString();

  if (pathname.includes('/task/')) {
    let updatedSearchParams = searchParams.replace(`&done=${taskDone}`, `&done=${!taskDone}`);
    pathname += `?${updatedSearchParams}`;
  }

  function handleCLick(id: string, done: boolean) {
    updateState(id, done, pathname);
  }
  return (
    <button 
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        handleCLick(taskId, !taskDone);
     }}
    > 
      {taskDone
        ? <CheckCircleIcon className='mr-2 w-4 text-green-500 align-top'/> 
        : <div className='w-4 h-4 rounded-[8px] border mr-2 justify-center items-center'/>
      }
    </button>
  )
}