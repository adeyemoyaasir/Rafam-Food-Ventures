import { Link } from "react-router-dom"
import LogImg from '../../assets/image/13a.png'
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";

function Navbar() {
  const [ open, setOpen ] = useState(false)

  const toggle = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className='fixed h-[70px] top-0 left-0 flex py-3 px-16 tablet:px-6 phone:px-4 items-center justify-between bg-blue-50 w-full z-[9999]' >
        <div className="text-red-600 text-[32px] font-semibold">
          <img alt="logo" src={LogImg} className="w-[70px]" />
        </div>
        
        {/**MENU */}
        <div>
            <div className={ `${open ? 'hidden' : 'flex items-center gap-6 text-[18px] font-normal phone:absolute phone:flex-col phone:right-3 phone:bg-blue-50 phone:p-4 phone:text-[21px] phone:rounded-[10px]'}`}>
                <div onClick={toggle}>
                  <IoClose className="hidden phone:flex phone:text-[24px] cursor-pointer" />
                </div>
                <Link to='/' className="link duration-500 border-b-[2px] border-b-transparent hover:border-b-red-600 cursor-pointer hover:text-red-600">Home</Link>
                <Link className="link duration-500 border-b-[2px] border-b-transparent hover:border-b-red-600 cursor-pointer hover:text-red-600">Products</Link>
                <Link className="link duration-500 border-b-[2px] border-b-transparent hover:border-b-red-600 cursor-pointer hover:text-red-600">About</Link>
                <Link className="link duration-500 border-b-[2px] border-b-transparent hover:border-b-red-600 cursor-pointer hover:text-red-600">Contact</Link>
            </div>

            <div onClick={toggle}>
              <RiMenu3Fill className="hidden phone:flex text-[24px]" />
            </div>

        </div>
    </div>
  )
}

export default Navbar