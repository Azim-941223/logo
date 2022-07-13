import logo from './LOGO.svg'
import './Header.css'

const Header = () => {
    return(
        <header>
            <div className="container">
                <div className='logo'><img src={logo} alt="logotype" /></div>
                <div className='header_info'>
                    <a href=''>О нас</a>
                    <a href="">Контакты</a>
                    <a href=''>Войти</a>
                </div>
            </div>
        </header>
    )
}
export default Header;