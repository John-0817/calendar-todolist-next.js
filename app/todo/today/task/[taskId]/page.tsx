import { outfit } from '@/app/ui/font'
import { TodayTodoList } from '@/app/ui/todo/today'
import { TaskDetail } from '@/app/ui/todo/tasks'

export default function TaskDetailPage( { params, searchParams }: { params: any, searchParams: any } ) {
  const path = 'today';
  const done = searchParams.done === 'true';

  return (
    <main className='grow flex flex-col'>
      <div className='grow flex grid grid-cols-3 gap-6'>
        <div className='col-span-2'>
          <h1 className={`${outfit.className} mb-8 text-5xl font-semibold`}>
            Today
          </h1>
          <div className='grow flex flex-col'>
            <TodayTodoList />  
          </div>
        </div>
        {/* Edit task */}
        <div className='grow flex flex-col p-3 rounded bg-gray-100'>
          <TaskDetail 
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