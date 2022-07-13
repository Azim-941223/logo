import './Info.css'
import house from '../About/image 2.png'

const Info = () => {
    return(
        <div className="info">
            <div className='info_content'>
                <img src={house} alt="house" />
                <div>
                    <h2>Продаю дом 5км в Нарыне</h2>
                    <h2>Цена: 55000 $</h2>
                    <p>Президентская кампания Бориса Ельцина на выборах 1996 года началась де-юре 15 февраля 1996 года, когда действовавший президент Российской Федерации объявил о своём решении баллотироваться на второй президентский срок. Несмотря на свой возраст (ему было 65 лет на момент избрания), серьёзные проблемы со здоровьем и низкий предвыборный рейтинг, Ельцин решил принять участие в Президентская кампания Бориса Ельцина на выборах 1996 года началась де-юре 15 февраля 1996 года, когда действовавший президент Российской Федерации объявил о своём решении баллотироваться </p>
                </div>
            </div>
            <button className='call'>
                <a href="">Позвонить</a>
            </button>
        </div>
    )
}
export default Info