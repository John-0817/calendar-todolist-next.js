import { outfit } from '@/app/ui/font'
import { UpcomingTodayTodoList } from '@/app/ui/todo/today'
import UpcomingTomorrowTodoList from '@/app/ui/todo/tomorrow';
import ThisWeekTodoList from '@/app/ui/todo/this-week';
import { AddNewTaskTomorrow } from '@/app/ui/todo/tasks'

export default function createTask() {
  const path = 'upcoming'
  return (
    <main className='grow flex flex-col'>
      <div className='grow flex grid grid-cols-3 gap-6'>
        <div className='grow flex flex-col col-span-2'>
          <h1 className={`${outfit.className} mb-8 text-5xl font-semibold`}>
            Upcoming
          </h1>
          <div className='grow flex flex-col'>
            <div className='basis-1/2 p-4 rounded border mb-6'>
              <h2 className={`${outfit.className} mb-4 text-xl font-semibold`}>
              Today
              </h2>
              <UpcomingTodayTodoList />
            </div>
            <div className='basis-1/2 grid grid-cols-2 gap-6'>
              <div className='grow p-4 rounded border'>
                <h2 className={`${outfit.className} mb-4 text-xl font-semibold`}>
                  Tomorrow
                </h2>
                <UpcomingTomorrowTodoList />  
              </div>
              <div className='p-4 rounded border'>
                <h2 className={`${outfit.className} mb-4 text-xl font-semibold`}>
                  This Week
                </h2>
                <ThisWeekTodoList />
              </div>
            </div>
          </div>
        </div>
        {/* Add new task */}
        <div className='grow flex flex-col p-3 rounded bg-gray-100'>
          <AddNewTaskTomorrow path={path} />
        </div>
      </div>
    </main>
  )
}