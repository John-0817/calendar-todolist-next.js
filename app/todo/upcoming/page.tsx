import { outfit } from '@/app/ui/font';
import TodayTodoList from '@/app/ui/todo/today';
import TomorrowTodoList from '@/app/ui/todo/tomorrow';
import ThisWeekTodoList from '@/app/ui/todo/this-week';

export default function Upcoming() {

  return (
    <main className='grow flex flex-col'>
      <h1 className={`${outfit.className} mb-8 text-5xl font-semibold`}>
        Upcoming
      </h1>
      <div className='grow flex flex-col'>
        <div className='basis-1/2 p-4 rounded border mb-6'>
          <h2 className={`${outfit.className} mb-4 text-xl font-semibold`}>
          Today
          </h2>
          <TodayTodoList />
        </div>
        <div className='basis-1/2 grid grid-cols-2 gap-6'>
          <div className='p-4 rounded border'>
            <h2 className={`${outfit.className} mb-4 text-xl font-semibold`}>
              Tomorrow
            </h2>
            <TomorrowTodoList />  
          </div>
          <div className='p-4 rounded border'>
            <h2 className={`${outfit.className} mb-4 text-xl font-semibold`}>
              This Week
            </h2>
            <ThisWeekTodoList />
          </div>
        </div>
      </div>
    </main>
)
}