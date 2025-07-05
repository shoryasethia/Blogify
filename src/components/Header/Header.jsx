import React from 'react'
import { LogoutBtn, Container, Logo} from '../index'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


export default function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true

    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    }
  ]

  return (
    <header className='bg-gray-800 border-b border-gray-700 shadow-lg'>
      <Container>
        <nav className='flex items-center justify-between py-4'>
          <div className="flex items-center">
            <Link to='/' className="hover:opacity-80 transition-opacity">
              <Logo width='60px'/>
            </Link>
          </div>
          
          <ul className='flex items-center space-x-1'>
            {navItems.map((item) => (
              item.active ? (
                <li key={item.name}>
                  <button 
                    onClick={() => navigate(item.slug)} 
                    className='px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-200 font-medium'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            ))}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
