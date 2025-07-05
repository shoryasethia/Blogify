import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='px-4 py-2 text-gray-300 hover:text-white hover:bg-red-600 bg-red-700 rounded-lg transition-all duration-200 font-medium'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn