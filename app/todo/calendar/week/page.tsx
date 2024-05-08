import { outfit } from '@/app/ui/font';
import CalendarLink from '@/app/ui/todo/calendar-link';
import { fetchTaskThisWeek } from '@/app/lib/data';
import RenderTaskDetail from '@/app/ui/todo/calendar-week';
import Link from 'next/link';
import clsx from 'clsx';

export default async function Calendar() {
  const taskForThisWeek = await fetchTaskThisWeek();
  const today = new Date().getDay();

  return (
    <main className={`${outfit.className} grow flex flex-col`} >
      <div className='flex flex-row justify-between items-center'>
        <h1 className='text-5xl font-semibold'>Calendar</h1>
        <Link 
          href={'/todo/calendar/week/create-task'}
          className='mr-2 p-2 border rounded'
        >
          Add Event
        </Link>
      </div>
      <div className='grow flex flex-col'>
        <CalendarLink />
        <div className='grow flex flex-col mt-4 text-sm font-semibold grid grid-cols-7'>
          <div className={clsx('pt-2 pl-2', {'bg-gray-200 rounded': today === 0},  )}>
            <p>SUN</p>
            <RenderTaskDetail taskList={taskForThisWeek} day={0}/>
          </div>
          <div className={clsx('pt-2 pl-2', {'bg-gray-200 rounded': today === 1}, {'border-l': today + 1 !== 1} )}>
            <p>MON</p>
            <RenderTaskDetail taskList={taskForThisWeek} day={1}/>
          </div>
          <div className={clsx('pt-2 pl-2', {'bg-gray-200 rounded': today === 2}, {'border-l': today + 1 !== 2} )}>
            <p>TUE</p>
            <RenderTaskDetail taskList={taskForThisWeek} day={2}/>
          </div>
          <div className={clsx('pt-2 pl-2', {'bg-gray-200 rounded': today === 3}, {'border-l': today + 1 !== 3} )}>
            <p>WED</p>
            <RenderTaskDetail taskList={taskForThisWeek} day={3}/>
          </div>
          <div className={clsx('pt-2 pl-2', {'bg-gray-200 rounded': today === 4}, {'border-l': today + 1 !== 4} )}>
            <p>THU</p>
            <RenderTaskDetail taskList={taskForThisWeek} day={4}/>
          </div>
          <div className={clsx('pt-2 pl-2', {'bg-gray-200 rounded': today === 5}, {'border-l': today + 1 !== 5} )}>
            <p>FRI</p>
            <RenderTaskDetail taskList={taskForThisWeek} day={5}/>
          </div>
          <div className={clsx('pt-2 pl-2', {'bg-gray-200 rounded': today === 6}, {'border-l': today + 1 !== 6} )}>
            <p>SAT</p>
            <RenderTaskDetail taskList={taskForThisWeek} day={6}/>
          </div>
        </div>      
      </div>
    </main>
  )
}