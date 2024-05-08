import { Bars3Icon } from '@heroicons/react/24/outline';
import { outfit } from '../font';
import { TaskLinks} from './nav-link';
import { ListLinks } from './nav-link';
import Link from 'next/link';

export default function SideMenu() {
  
  return(
    <div className='flex h-full flex-col py-3 space-y-4 md:px-2 bg-gray-100 rounded-lg'>
      <div className='flex'>
        <p className={`${outfit.className} text-xl text-stone-600 font-bold`}>Menu</p>
      </div>
      <div className='space-y-2 pb-2 border-b-2'>
        <p className={`${outfit.className} text-xs text-stone-600 font-bold`}>TASKS</p>
        <TaskLinks />
      </div>
      <div className='space-y-2'>
        <p className={`${outfit.className} text-xs text-stone-600 font-bold`}>LISTS</p>
        <ListLinks />
      </div>
    </div>
  )
}