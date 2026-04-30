import './Navbar.css'
import logo from '../../assets/symbol.png'
import search from '../../assets/search1.svg'
import arrow from '../../assets/arrow-down.svg'
import searchwt from '../../assets/search.svg'

const Navbar = (props) => {

    const {toggleModal}=props
    return (
        <div>

            <nav className='fixed z-50 w-full overflow-auto p-2 pl-3 pr-3 shadow-md bg-slate-100 border-b-4 border-solid border-b-white'>

                <img src={logo} alt="" className='w-12' />

                <div className='relative location-search ml-5'>
                    <img src={search} alt="" className='absolute top-4 left-2 w-5' />
                    <input placeholder='Search city,area, or locality...' type="text"
                        className='w-[50px] sm:w-[150px] md:w-[250px] lg:w-[270px] p-3 pl-8 pr-8 border-black border-solid border-2 rounded-md placeholder:text-ellipsis focus:outline-none focus:border-teal-300' />

                    <img src={arrow} alt="" className='absolute top-5 right-3 w-3 cursor-pointer' />
                </div>

                <div className='ml-5 mr-2 relative w-full main-search'>
                    <input
                        type="text"
                        placeholder='Find Cars,Mobile Phones, and More...'
                        className='w-full p-3 pr-14 border-black border-solid border-2 rounded-md placeholder:text-ellipsis focus:outline-none focus:border-teal-300'
                    />

                    <div
                        style={{ backgroundColor: '#002f34' }}
                        className='flex justify-center items-center absolute top-0 right-0 h-full w-12 rounded-r-md'
                    >
                        <img className='w-5 invert' src={searchwt} alt="Search Icon" />
                    </div>
                </div>

                <div className='mx-1 sm:ml-5 sm:mr-5 relative lang'>
                    <p className='font-bold mr-3'>English</p>
                    <img src={arrow} alt="" className='w-3 cursor-pointer' />

                </div>

                <p onClick={toggleModal} className='cursor-pointer'>Login</p>
            </nav>
        </div>
    )
}

export default Navbar
