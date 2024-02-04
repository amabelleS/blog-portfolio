import Image from 'next/image';
// import logo from '../../../public/images/logo.png';
import logo from './logo.png';

function Logo() {
  return <div >
    <Image
    src={logo}
    alt="Amabelle's logo"
    width="0"
    height="0"
    className="bg-mint text-mint fill-current m-0"
    // priority={true}
    style={{ width: '142px', height: 'auto' }}
    // style={{objectFit: "contain"}}
  />
  </div>
}

export default Logo;