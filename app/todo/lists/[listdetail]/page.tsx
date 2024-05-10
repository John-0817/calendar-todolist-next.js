import { outfit } from '@/app/ui/font'
import RenderListTask from '@/app/ui/todo/list'

interface prop{
  page: String
}

export default function ListTask({ params, searchParams }:{ params: { listdetail: string }, searchParams: prop}) {
  const currentPage = Number(searchParams.page) || 1;
  return (
    <main className={`${outfit.className} grow flex flex-col`}>
      <h1 className='mb-8 text-5xl font-semibold capitalize'>
        {params.listdetail}
      </h1>
      <div className='grow flex flex-col'>
        <RenderListTask list={params.listdetail} page={currentPage}/>
      </div>
    </main>
  )
}