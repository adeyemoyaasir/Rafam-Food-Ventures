import { Link } from 'react-router-dom'
import LogImg from '../../assets/image/13a.png'
import { IoLocationOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="pad1 py-16 tablet:py-6 phone:py-4 mt-auto w-full bg-blue-50 flex flex-col">
        
        <div className='flex items-center gap-8 justify-between w-full tablet:flex-col tablet:items-start '>

            <div className="flex flex-1 flex-col">
                <img alt='logo' src={LogImg} className='w-[50px]' />

                <div className='flex flex-col gap-3 mt-4'>
                    <h3 className='text-red-600 text-[24px] font-bold'>Contact Us</h3>

                    <div className='flex flex-col gap-2'>
                        <a href='tel23408171999951' className='link text-[18px]' >0817 199 9951</a>
                        <a href='tel23408155570562' className='link text-[18px]' >0815 557 0562</a>
                    </div>
                </div>

            </div>

            <div className="flex flex-1 flex-col gap-4">
                <h3 className='text-red-600 text-[24px] font-bold'>Quick links</h3>

                <div className='flex flex-col gap-2'>
                    <Link to='/home' className='link text-[18px] hover:text-red-600' >Home</Link>
                    <Link to='/products' className='link text-[18px] hover:text-red-600' >Products</Link>
                    <Link to='/about' className='link text-[18px] hover:text-red-600' >About</Link>
                    <Link to='/contact' className='link text-[18px] hover:text-red-600' >Contact</Link>
                </div>
            </div>

            <div className="flex flex-1 flex-col">
                <IoLocationOutline className='text-[32px] text-red-600 font-extrabold' />

                <div className='text-[18px]'>
                    Nigerian Army Post Services Housing <br />
                    Scheme, Abule Egba. Lagos Nigeria
                </div>
            </div>
        </div>

        <p className='text-center text-red-600 mt-8' >@copyright Rafam</p>

    </div>
  )
}

export default Footer