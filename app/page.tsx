import { outfit } from '@/app/ui/font'

import Link from 'next/link';

export default function Home() {
  return (
    <main className={`${outfit.className} flex p-24 grid grid-rows-2`}>
      <div className='grid grid-cols-2'>
        <div>
          <h1 className='text-2xl font-bold'>Current Features</h1>
          <li>Implemented daily, weekly, monthly task scheduling</li>
          <li>Enabled serverless task operations: fetch, update, delete</li>
          <li>Enabled real-time task editing</li>
          <li>Multiple views: Daily, Weekly, Monthly</li>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>Future Update</h1>
          <li>Implement user authentication</li>
          <li>Enable customization of list names</li>
          <li>Expand functionality of the monthly view beyond the current month</li>
        </div>
      </div>
      <div className='mt-36 px-4 py-2 justify-self-center border rounded bg-orange-300'>
        <Link href={'/todo/overview'}>Go to App</Link>
      </div>
            
    </main>
  );
}
