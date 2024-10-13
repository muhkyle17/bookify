import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/logo.svg'
import { FaUser, FaSignInAlt, FaSignOutAlt, FaBuilding } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='bg-gray-100'>
      <nav className='mx-auto max-w-7xl px-4 s  m:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <Link href='/'>
              <Image className='h-12 w-12' src={logo} alt='Bookify Logo' priority={true} />
            </Link>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <Link
                  href='/'
                  className='rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white'>
                  Rooms
                </Link>

                <Link
                  href='/bookings.html'
                  className='rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white'>
                  Bookings
                </Link>
                <Link
                  href='/add-room.html'
                  className='rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white'>
                  Add Room
                </Link>
              </div>
            </div>
          </div>

          <div className='ml-auto'>
            <div className='ml-4 flex items-center md:ml-6'>
              <Link
                href='login.html'
                className='mr-3 text-gray-800 hover:text-gray-600 flex flex-row items-center gap-2'>
                <FaSignInAlt /> Login
              </Link>
              <Link
                href='register.html'
                className='mr-3 text-gray-800 hover:text-gray-600 flex flex-row items-center gap-2'>
                <FaUser />
                Register
              </Link>
              <Link
                href='my-rooms.html'
                className='mr-3 text-gray-800 hover:text-gray-600 flex flex-row items-center gap-2'>
                <FaBuilding />
                My Rooms
              </Link>
              <Link
                href='login.html'
                className='text-gray-800 hover:text-gray-600 flex flex-row items-center gap-2'>
                <FaSignOutAlt />
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
