import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='p-4 flex flex-col items-center justify-center'>
      <h2 className='custom-header'>Not Found</h2>
      <p className='pb-4 text-center font-bold text-2xl capitalize text-lime-100'>Could not find requested resource</p>
      <Link href="/" className='custom-btn'>Return Home</Link>
    </div>
  )
}