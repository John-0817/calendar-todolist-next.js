import { outfit } from '@/app/ui/font';
import { months } from '@/app/lib/month';
import CalendarNav from '@/app/ui/todo/calendar-link';
import RenderThisWeekTaskDetail from '@/app/ui/todo/calendar-week';
import { AddNewTaskThisWeekCalendar } from '@/app/ui/todo/tasks';
import Link from 'next/link';
import clsx from 'clsx';

interface Prop {
  include: string;
}

export default function Page( { searchParams }: { searchParams: Prop } ) {
  let date = new Date();
  if (searchParams.include !== undefined) {
    date = new Date(searchParams.include);
  }
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const weekStart = date.getDate() - date.getDay() < 0 ? 1 : date.getDate() - date.getDay();
  const weekEnd = date.getDate() + 6 - date.getDay() > new Date(year, date.getMonth() + 1, 0).getDate() 
    ? new Date(year, date.getMonth() + 1, 0).getDate() : date.getDate() + 6 - date.getDay();

  const currentWeekStart = new Date().getDate() - new Date().getDay() < 0 ? 1 : new Date().getDate() - new Date().getDay();
  const currentWeekEnd = new Date().getDate() + 6 - new Date().getDay() > new Date(year, date.getMonth() + 1, 0).getDate() 
    ? new Date(year, date.getMonth() + 1, 0).getDate() : new Date().getDate() + 6 - new Date().getDay();

  const today = weekStart === currentWeekStart && weekEnd === currentWeekEnd ? new Date().getDay() : null;
  const isPast = weekStart < currentWeekStart;
  const path = 'calendar/week';

  return(
    <main className={`${outfit.className} grow flex flex-col`}>
      <div className='grow flex grid grid-cols-3 gap-6'>
        <div className='grow flex flex-col col-span-2'>
          <div className='flex flex-row justify-between items-center'>
            <h1 className='text-5xl font-semibold'>{weekStart}-{weekEnd} {month} {year}</h1>
            {isPast && (
              <div className='mr-2 p-2 border rounded'>
                Add Event
              </div>
            )}
            {!isPast && (
              <Link 
                href={{
                  pathname: '/todo/calendar/week/create-task',
                  query: {include: date.toString()}
                }}
                className='mr-2 p-2 border rounded'
              >
                Add Event
              </Link>
            )}
          </div>
          <div className='grow flex flex-col'>
            <CalendarNav />
            <div className='mt-4 text-sm font-semibold grid grid-cols-7'>
              <div className={clsx('pt-2 pl-2', {'bg-gray-200 rounded-t-lg': today === 0}, )}>SUN</div>
              <div className={clsx('pt-2 pl-2', {'bg-gray-200 rounded-t-lg': today === 1}, )}>MON</div>
              <div className={clsx('pt-2 pl-2', {'bg-gray-200 rounded-t-lg': today === 2}, )}>TUE</div>
              <div className={clsx('pt-2 pl-2', {'bg-gray-200 rounded-t-lg': today === 3}, )}>WED</div>
              <div className={clsx('pt-2 pl-2', {'bg-gray-200 rounded-t-lg': today === 4}, )}>THU</div>
              <div className={clsx('pt-2 pl-2', {'bg-gray-200 rounded-t-lg': today === 5}, )}>FRI</div>
              <div className={clsx('pt-2 pl-2', {'bg-gray-200 rounded-t-lg': today === 6}, )}>SAT</div>
            </div>
            <div className='grow flex flex-col text-sm font-semibold grid grid-cols-7'>
              <RenderThisWeekTaskDetail targetDate={date} />
            </div>    
          </div>

        </div>
        {/* Add new task */}
        <div className='grow flex flex-col p-3 rounded bg-gray-100'>
          <AddNewTaskThisWeekCalendar path={path} date={date} />
        </div>
      </div>
    </main>
  )
  
}