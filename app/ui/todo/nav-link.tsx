'use client'

import {
  ChevronDoubleRightIcon,
  ListBulletIcon,
  CalendarDaysIcon,
  HashtagIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { outfit } from '../font';
import { lists } from '@/app/lib/list-asset';
import clsx from 'clsx'

const taskLinks = [
  {name: 'Upcoming', href: '/todo/upcoming', icon: ChevronDoubleRightIcon},
  {name: 'Today', href: '/todo/today', icon: ListBulletIcon},
  {name: 'Calendar', href: '/todo/calendar', icon: CalendarDaysIcon},
  {name: 'Sticky Wall', href: '/todo/sticky-wall', icon: HashtagIcon},
];
const listLinks = [
  {name: 'Personal', href: '/todo/personal', icon: ChevronDoubleRightIcon},
  {name: 'Work', href: '/todo/work', icon: ListBulletIcon},
  {name: 'List 1', href: '/todo/list-1', icon: CalendarDaysIcon},
];

export function TaskLinks() {
  const pathname = usePathname();
  return(
    <>
      {taskLinks.map((link) => {
        const LinkIcon = link.icon;
        return(
          <Link 
            key={link.name}
            href={link.href}
            className={clsx(`${outfit.className} flex p-1 text-sm`, {' bg-gray-200 font-bold rounded': pathname.startsWith(link.href)}, {'font-medium': !pathname.startsWith(link.href)}, )}
          >
            <LinkIcon className='w-3 mr-1' />
            <p className='hidden md:block '>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};

export function ListLinks() {
  const pathname = usePathname();

  return(
    <>
      {lists.map((list) => {
        const color = list.color;
        const title = list.title;
        const href = list.href;
        const isVisible = list.isVisible;
        return(
          isVisible && (
            <Link
              key={title}
              href={href}
              className={clsx(`${outfit.className} items-center flex p-1 text-sm`, {' bg-gray-200 font-bold rounded': pathname === href}, {'font-medium': pathname !== href}, )}
            >
              <div className={`${color} mr-2 w-3 h-3 rounded`}/>
              <p className='hidden md:block '>{title}</p>
            </Link>
          )
        )
      })}
    </>
  )
}

