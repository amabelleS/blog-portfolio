import Image from 'next/image';
// import logo from '../../../public/images/logo.png';
import logo from './logo.png';

function Logo() {
  return <div >
    <Image
    src={logo}
    alt='my logo'
    width={200}
    height={22}
    className="bg-mint text-mint fill-current m-0"
    priority={true}
    // style={{objectFit: "contain"}}
  />
  </div>
}

export default Logo;