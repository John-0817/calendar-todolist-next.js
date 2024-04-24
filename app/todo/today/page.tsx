import { outfit } from '@/app/ui/font'
import TodayTodoList from '@/app/ui/todo/today'

export default function Today() {

  return (
    <main className='grow flex flex-col'>
      <h1 className={`${outfit.className} mb-8 text-5xl font-semibold`}>
        Today
      </h1>
      <div className='grow flex flex-col'>
        <TodayTodoList />  
      </div>
    </main>
  )
}