import { outfit } from '@/app/ui/font'
import { TodayTodoList } from '@/app/ui/todo/today'
import { AddNewTaskToday } from '@/app/ui/todo/tasks'

export default function createTask() {
  const path = 'today'
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
        {/* Add new task */}
        <div className='grow flex flex-col p-3 rounded bg-gray-100'>
          <AddNewTaskToday path={path} />
        </div>
      </div>
    </main>
  )
}