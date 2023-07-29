import { Navbar } from './Navbar'
import logo from '../assets/images/logo.svg'

export const Header = () => {
  return (
    <header className='flex place-content-between items-center mb-8'>      
      <img className='cursor-pointer' src={logo} alt="logo" />
      <Navbar/>
    </header>
  )
}
