import Image from 'next/image';

type Props = {}

export default function Skills({}: Props) {
  return (
    <div className='w-full h-full bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700'>
    {/* <div className='w-full h-full bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'> */}
    {/* <div className='w-full h-full bg-gradient-to-r from-green-300 to-purple-400'> */}
        <div className="text-3xl text-center font-bold text-dark dark:text-black/90 pt-10 pb-10">
            Tech Stack
        </div>
        <div className='flex justify-around items-center text-center'>
        {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center'> */}
            <div className='p-4 mx-auto'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    width={88}
                    height={77}
                    className='p-6 mx-auto'
                    alt="react logo"
                />
            </div>
            <div className='p-4 mx-auto'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
                    width={88}
                    height={77}
                    alt="mongodb logo"
                />
            </div>
            <div className='p-4 mx-auto'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                    width={88}
                    height={77}
                    // className='p-2'
                    alt="nodejs logo"
                />
            </div>
            {/* <div className='p-4 mx-auto  bg-purple-300'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                    width={88}
                    height={77}
                    alt="Naxtjs logo"
                />
            </div> */}
            <div className='p-4 mx-auto'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                    width={88}
                    height={77}
                    alt="Naxtjs logo"
                />
            </div>
            
        </div>
    </div>
  )
}