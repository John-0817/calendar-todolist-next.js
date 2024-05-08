import { outfit } from '@/app/ui/font'
import { UpcomingTodayTodoList } from '@/app/ui/todo/today'
import UpcomingTomorrowTodoList from '@/app/ui/todo/tomorrow';
import UpcomingThisWeekTodoList from '@/app/ui/todo/this-week';
import { AddNewTask } from '@/app/ui/todo/tasks'
import Link from 'next/link';

export default function createTask() {
  const path = 'overview'
  return (
    <main className='grow flex flex-col'>
      <div className='grow flex grid grid-cols-3 gap-6'>
        <div className='grow flex flex-col col-span-2'>
          <h1 className={`${outfit.className} mb-8 text-5xl font-semibold`}>
            Overview
          </h1>
          <div className='grow flex flex-col'>
            <div className='basis-1/2 p-4 rounded border mb-6'>
              <Link href={'/todo/today'} className={`${outfit.className} mb-4 text-xl font-semibold`}>
                Today
              </Link>
              <UpcomingTodayTodoList />
            </div>
            <div className='basis-1/2 grid grid-cols-2 gap-6'>
              <div className='p-4 rounded border'>
                <Link href={'/todo/calendar/week'} className={`${outfit.className} mb-4 text-xl font-semibold`}>
                  Tomorrow
                </Link>
                <UpcomingTomorrowTodoList />
              </div>
              <div className='p-4 rounded border'>
                <Link href={'/todo/calendar/week'} className={`${outfit.className} mb-4 text-xl font-semibold`}>
                  This Week
                </Link>
                <UpcomingThisWeekTodoList />
              </div>
            </div>
          </div>
        </div>
        {/* Add new task */}
        <div className='grow flex flex-col p-3 rounded bg-gray-100'>
          <AddNewTask path={path} />
        </div>
      </div>
    </main>
  )
}