import { outfit } from '@/app/ui/font';
import CalendarLink from '@/app/ui/todo/calendar-link';
import { fetchTaskThisWeek } from '@/app/lib/data';
import RenderTaskDetail from '@/app/ui/todo/calendar-week';
import { AddNewTaskThisWeek } from '@/app/ui/todo/tasks';
import Link from 'next/link';
import clsx from 'clsx';

export default async function Page() {
  const taskForTomorrow = await fetchTaskThisWeek();
  const today = new Date().getDay();
  const path = 'calendar/week';

  return(
    <main className='grow flex flex-col'>
      <div className='grow flex grid grid-cols-3 gap-6'>
        <div className='grow flex flex-col col-span-2'>
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
            <div className='mt-4 text-sm font-semibold grid grid-cols-7'>
              <div className='pt-2 pl-2'>SUN</div>
              <div className='pt-2 pl-2'>MON</div>
              <div className='pt-2 pl-2'>TUE</div>
              <div className='pt-2 pl-2'>WED</div>
              <div className='pt-2 pl-2'>THU</div>
              <div className='pt-2 pl-2'>FRI</div>
              <div className='pt-2 pl-2'>SAT</div>
            </div>   
          </div>

        </div>
        {/* Add new task */}
        <div className='grow flex flex-col p-3 rounded bg-gray-100'>
        <AddNewTaskThisWeek path={path} />
        </div>
      </div>
    </main>
  )
  
}