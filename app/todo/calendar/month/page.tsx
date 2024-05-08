import { outfit } from '@/app/ui/font';
import CalendarNav from '@/app/ui/todo/calendar-link';
import RenderThisMonthTaskDetail from '@/app/ui/todo/calendar-month';
import Link from 'next/link';

export default function Month() {

  return (
    <main className={`${outfit.className} grow flex flex-col`}>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='text-5xl font-semibold'>Calendar</h1>
        <Link 
          href={'/todo/calendar/month/create-task'}
          className='mr-2 p-2 border rounded'
        >
          Add Event
        </Link>
      </div>
      <div className='grow flex flex-col'>
        <CalendarNav />
        <div className='mt-4 text-sm font-semibold grid grid-cols-7'>
          <div className='pt-2 pl-2'>SUN</div>
          <div className='pt-2 pl-2'>MON</div>
          <div className='pt-2 pl-2'>TUE</div>
          <div className='pt-2 pl-2'>WED</div>
          <div className='pt-2 pl-2'>THU</div>
          <div className='pt-2 pl-2'>FRI</div>
          <div className='pt-2 pl-2'>SAT</div>
        </div>
        <div className='grow flex flex-col mt-2 grid grid-cols-7 grid-rows-6'>
          <RenderThisMonthTaskDetail />
        </div>   
      </div>
    </main>
  )
}