import { outfit } from '@/app/ui/font'
import { UpcomingTodayTodoList } from '@/app/ui/todo/today'
import { ThisWeekTaskDetail } from '@/app/ui/todo/tasks'
import UpcomingTomorrowTodoList from '@/app/ui/todo/tomorrow';
import UpcomingThisWeekTodoList from '@/app/ui/todo/this-week';

export default function TaskDetailPage( { params, searchParams }: { params: any, searchParams: any } ) {
  const path = 'upcoming';
  const done = searchParams.done === 'true';

  return (
    <main className='grow flex flex-col'>
      <div className='grow flex grid grid-cols-3 gap-6'>
        <div className='col-span-2'>
        <h1 className={`${outfit.className} mb-8 text-5xl font-semibold`}>
          Upcoming
        </h1>
        <div className='basis-1/2 p-4 rounded border mb-6'>
          <h2 className={`${outfit.className} mb-4 text-xl font-semibold`}>
          Today
          </h2>
          <UpcomingTodayTodoList />
        </div>
        <div className='basis-1/2 grid grid-cols-2 gap-6'>
          <div className='p-4 rounded border'>
            <h2 className={`${outfit.className} mb-4 text-xl font-semibold`}>
              Tomorrow
            </h2>
            <UpcomingTomorrowTodoList />  
          </div>
          <div className='p-4 rounded border'>
            <h2 className={`${outfit.className} mb-4 text-xl font-semibold`}>
              This Week
            </h2>
            <UpcomingThisWeekTodoList />
          </div>
        </div>
        </div>
        {/* Edit task */}
        <div className='grow flex flex-col p-3 rounded bg-gray-100'>
          <ThisWeekTaskDetail 
            path={path} 
            task_id={params.taskId}
            title={searchParams.title} 
            description={searchParams.description} 
            list={searchParams.list} 
            date={searchParams.date}
            timestamp={searchParams.timestamp}
            done={done}
          />
        </div>
      </div>
    </main>
  )
}