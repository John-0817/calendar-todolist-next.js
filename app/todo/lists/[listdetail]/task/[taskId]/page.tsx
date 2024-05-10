import { outfit } from '@/app/ui/font'
import RenderListTask from '@/app/ui/todo/list'
import { AddNewTaskByList } from '@/app/ui/todo/tasks'
import { TaskDetailByList } from '@/app/ui/todo/tasks'

export default function createTask({ params, searchParams }:{ params: { listdetail: string, taskId: string }, searchParams: any}) {
  const path = `lists/${params.listdetail}`;
  const done = searchParams.done === 'true';
  const currentPage = Number(searchParams.page) || 1;

  return (
    <main className={`${outfit.className} grow flex flex-col`}>
      <div className='grow flex grid grid-cols-3 gap-6'>
        <div className='col-span-2'>
          <h1 className='mb-8 text-5xl font-semibold capitalize'>
            {params.listdetail}
          </h1>
          <div className='grow flex flex-col'>
            <RenderListTask list={params.listdetail} page={currentPage}/>
          </div>
          </div>
        {/* Add new task */}
        <div className='grow flex flex-col p-3 rounded bg-gray-100'>
          <TaskDetailByList
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