import { Navbar } from './Navbar'
import logo from '../assets/images/logo.svg'

export const Header = () => {
  return (
    <header className='bg-blue-400 flex place-content-between items-center'>      
      <img src={logo} alt="logo" />
      <Navbar/>
    </header>
  )
}
