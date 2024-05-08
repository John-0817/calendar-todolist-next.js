import { lists } from '@/app/lib/list-asset';
import { fetchTaskThisMonth } from '@/app/lib/data';
import Link from 'next/link';

export default async function RenderThisMonthTaskDetail() {
  const taskForThisMonth = await fetchTaskThisMonth();

  const date = new Date;
  const month = date.getMonth();
  const year = date.getFullYear();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const endDay = new Date(year, month, lastDate).getDay();
  const lastDatePrevMonth = new Date(year, month, 0).getDate(); 

  const daysFromPrevMonth = Array.from({ length: firstDay }, (_, index) => lastDatePrevMonth - index).reverse();
  const daysInCurrentMonth = Array.from({ length: lastDate }, (_, index) => index + 1);
  const daysInNextMonth = Array.from({ length: 6 - endDay}, (_, index) => index + 1);

  return(
      <>
        {daysFromPrevMonth.map((day) => (
          <div key={day} className='mt-2 pl-2 text-xs text-gray-500 font-bold'>
            {day}
          </div>
        ))}
        {daysInCurrentMonth.map((day) => {
          const tasks = taskForThisMonth[day] || [];
          return (
            <Link 
              key={day}
              href={{
                pathname: 'week',
                query: {include: new Date(year,month,day).toString()}
              }}
              className='mt-2 pl-2 text-xs font-bold'
            >
              {day}
              {tasks.map((task) => {
                const task_id = task.id;
                const task_list = task.list;
                const list = lists.find(item => item.title === task_list);
                const list_color = list?.color;
                return(
                  <div key={task_id}>
                    <div className={`${list_color} bg-opacity-80 p-2 mr-2 mt-1 rounded`}/>
                  </div>
                )
              })}
            </Link>
          )
        })}
        {daysInNextMonth.map((day) => (
          <div key={day} className='mt-2 pl-2 text-xs text-gray-500 font-bold'>
            {day}
          </div>
        ))}
      </>
  )
}