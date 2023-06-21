import Image from 'next/image';
import { FaReact } from 'react-icons/fa'

type Props = {}

export default function Skills({}: Props) {
  return (
    <div className='w-full bg-white'>
        <div className="text-3xl text-center font-bold text-dark dark:text-black/90 pt-10 pb-10">
            Skills
        </div>
        <div className='flex justify-around items-center text-center'>
        {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center'> */}
            {/* <div className='mx-auto bg-purple-300'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/6/61/Wikinews-science.svg"
                    width={88}
                    height={77}
                    // className='w-1/2'
                    className='p-4 mx-auto'
                    alt="react logo"
                />
            </div> */}
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