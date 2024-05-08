'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

export default function CalendarNav() {
  const pathname = usePathname();
  console.log(pathname.includes('week'));
  return(
  <div className='mt-4 py-2 px-2 w-fit text-sm bg-gray-100 rounded-lg'>
    <Link
      href={'/todo/calendar/week'}
      className={clsx('mr-2 px-2 py-1 rounded-lg', {'bg-gray-200': pathname.includes('week')}, {'bg-white': !pathname.includes('week')}, )}
    >
      Week
    </Link>
    <Link
      href={'/todo/calendar/month'} 
      className={clsx(`px-2 py-1 rounded-lg`, {'bg-gray-200': pathname.includes('month')}, {'bg-white': !pathname.includes('month')}, )}
    >
      Month
    </Link>
  </div>  
  )
}



