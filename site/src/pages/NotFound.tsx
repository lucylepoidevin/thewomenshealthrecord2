import { Link } from 'react-router-dom'

export default function NotFound({ what = 'No page exists at this address.' }: { what?: string }) {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-12 pb-10">
      <h1 className="text-[1.9rem] leading-tight">Page not found</h1>
      <p className="prose mt-4">{what} The <Link to="/">comparison tool</Link> and the <Link to="/analytes">table of intervals</Link> list every test in the table.</p>
    </div>
  )
}
