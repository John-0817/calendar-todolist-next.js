'use client'
import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { usePathname, useSearchParams } from 'next/navigation';
import { updateState } from '@/app/lib/actions';

export default function Button({ taskId, taskDone }: { taskId: string, taskDone: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  let params = {};
  if (pathname.includes('/task/')) {
    params = {
      title: searchParams.get('title'),
      description: searchParams.get('description'),
      list: searchParams.get('list'),
      date: searchParams.get('date'),
      timestamp: searchParams.get('timestamp'),
      done: searchParams.get('done'),
    }
  }

  function handleCLick(id: string, done: boolean) {
    updateState(id, done, pathname, params);
  }
  return (
    <button 
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        handleCLick(taskId, taskDone);
     }}
    > 
      {taskDone
        ? <CheckCircleIcon className='mr-2 w-4 text-green-500 align-top'/> 
        : <div className='w-4 h-4 rounded-[8px] border mr-2 justify-center items-center'/>
      }
    </button>
  )
}