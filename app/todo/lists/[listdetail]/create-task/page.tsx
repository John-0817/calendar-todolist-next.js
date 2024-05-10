import { outfit } from '@/app/ui/font'
import RenderListTask from '@/app/ui/todo/list'
import { AddNewTaskByList } from '@/app/ui/todo/tasks'

interface prop{
  page: String
}

export default function createTask({ params, searchParams }:{ params: { listdetail: string }, searchParams: prop}) {
  const path = `lists/${params.listdetail}`;
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
          <AddNewTaskByList path={path} list={params.listdetail} />
        </div>
      </div>
    </main>
  )
}