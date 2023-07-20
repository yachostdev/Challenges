import { Navbar } from './Navbar'
import logo from '../assets/images/logo.svg'

export const Header = () => {
  return (
    <header className=''>
      <img src={logo} alt="logo" />
      <Navbar/>
    </header>
  )
}

