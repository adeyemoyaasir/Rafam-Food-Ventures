import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='fixed top-0 left-0 flex py-3 px-16 tablet:py-6 phone:py-4 items-center justify-between bg-blue-200 w-full' >
        <div className="text-red-600 text-[32px] font-semibold">
            Rafam Foods
        </div>
        
        {/**MENU */}
        <div>
            <ul>
                <Link className="link">About</Link>
                <Link className="link"></Link>
                <Link className="link"></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar