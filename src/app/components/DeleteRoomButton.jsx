'use client'
import toast from 'react-hot-toast'
import { FaTrash } from 'react-icons/fa'

import deleteRoom from '../actions/deleteRoom'

const DeleteRoomButton = () => {
  return (
    <button className='bg-red-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-red-700'>
      <FaTrash className='inline mr-1' /> Delete
    </button>
  )
}

export default DeleteRoomButton
