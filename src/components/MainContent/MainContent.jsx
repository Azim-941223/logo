import './MainContent.css'
import house  from './image1.svg'

const MainContent = () => {
    return(
        <main>
            <img className='photo' src={house} alt="house" />
            <div className='buy'>
                <h5>Продаю 6км дом в Бишкеке</h5>
                <p>55000$</p>
                <button class="cell">Купить</button>
            </div>
        </main>
    )
}

export default MainContent