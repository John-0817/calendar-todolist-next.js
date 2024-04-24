import { outfit } from '@/app/ui/font'


export default function ListTask({ params }:{ params: { listdetail: string } }) {
  return (
    <main>
      <h1 className={`${outfit.className} mb-8 text-5xl font-semibold capitalize`}>
        {params.listdetail}
      </h1>
    </main>
  )
}