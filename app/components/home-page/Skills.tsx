import Image from 'next/image';

type Props = {}

export default function Skills({}: Props) {
  return (
    <div className='w-full h-full bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700'>
        <div className="text-3xl text-center font-bold text-dark text-teal-900 pt-10">
            Tech Stack
        </div>
        <div className='grid grid-cols-5 items-center text-center'>
        {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center'> */}
           
            <div className='p-4 mx-auto col-span-1'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
                    alt="mongodb logo"
                    width="0"
                    height="0"
                    style={{ width: '121px', height: 'auto' }}
                    className="hover:motion-safe:animate-pulse"
                    // className='hover:motion-safe:animate-pulse w-[121] h-[111]'
                />
            </div>
            
            <div className='p-4 mx-auto col-span-1'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                    // width={88}
                    // height={77}
                    width="0"
                    height="0"
                    className="hover:motion-safe:animate-pulse"
                    style={{ width: '88px', height: 'auto' }}
                    alt="nodejs logo"
                />
            </div>
            <div className='p-4 mx-auto col-span-1'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                    // width={88}
                    // height={77}
                    alt="Naxtjs logo"
                    width="0"
                    height="0"
                    style={{ width: '88px', height: 'auto' }}
                    className="hover:motion-safe:animate-pulse"
                />
            </div>
            <div className='p-4 mx-auto col-span-1'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    // width="42"
                    // height="32"
                    width="0"
                    height="0"
                    style={{ width: '42px', height: 'auto' }}
                    className="hover:motion-safe:animate-pulse"
                    alt="React logo"
                />
            </div>
            
            <div className='p-4 mx-auto col-span-1'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                    width="0"
                    height="0"
                    alt="JavaScript logo"
                    style={{ width: '32px', height: 'auto' }}
                    className='hover:motion-safe:animate-pulse'
                />
            </div>
            <div className='p-4 mx-auto col-span-1'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                    width="0"
                    height="0"
                    alt="TypeScript logo"
                    style={{ width: '32px', height: 'auto' }}
                    className='hover:motion-safe:animate-pulse'
                />
            </div>
            <div className='p-4 mx-auto col-span-1'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                    width="0"
                    height="0"
                    alt="HTML logo"
                    style={{ width: '38px', height: 'auto' }}
                    className='hover:motion-safe:animate-pulse'
                />
            </div>
            <div className='p-4 mx-auto col-span-1'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                    width="0"
                    height="0"
                    alt="CSS logo"
                    style={{ width: '32px', height: 'auto' }}
                    className='hover:motion-safe:animate-pulse'
                />
            </div>
            <div className='p-4 mx-auto col-span-1'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                    width="0"
                    height="0"
                    alt="Vue.js logo"
                    style={{ width: '32px', height: 'auto' }}
                    className='hover:motion-safe:animate-pulse'
                />
            </div>
            <div className='p-4 mx-auto col-span-1'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Font_Awesome_5_brands_angular.svg"
                    width="0"
                    height="0"
                    alt="Angular logo"
                    style={{ width: '32px', height: 'auto' }}
                    className='hover:motion-safe:animate-pulse'
                />
            </div>
            <div className='p-4 mx-auto col-span-1'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
                    width={66}
                    height={55}
                    alt="SQL logo"
                    // style={{ width: '32px', height: 'auto' }}
                    className='hover:motion-safe:animate-pulse'
                />
            </div>
            <div className='p-4 mx-auto col-span-1'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg"
                    width="0"
                    height="0"
                    alt="Docker logo"
                    style={{ width: '121px', height: 'auto' }}
                    className='hover:motion-safe:animate-pulse'
                />
            </div>
            <div className='p-4 mx-auto col-span-1'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
                    width="66"
                    height="0"
                    style={{ width: '66x', height: 'auto' }}
                    alt="Git logo"
                    className='hover:motion-safe:animate-pulse'
                />
            </div>
            <div className='p-4 mx-auto col-span-1'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
                    width={32}
                    height={32}
                    alt="GitHub logo"
                    // style={{ width: '32px', height: 'auto' }}
                    className='hover:motion-safe:animate-pulse'
                />
            </div>
            <div className='p-4 mx-auto col-span-1'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg"
                    width="0"
                    height="0"
                    style={{ width: '111px', height: 'auto' }}
                    alt="Firebase logo"
                    className='hover:motion-safe:animate-pulse'
                />
            </div>
            
        </div>
    </div>
  )
}