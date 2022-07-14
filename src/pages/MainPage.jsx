import Card from "../components/card/Card"
import {useState} from 'react'

const MainPage = () => {
    const arr = [
        {
            id: 1,
            title: "Продаю 2км кв в 12мкр",
            price: 45000,
            img: "https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/Contemporary-Modern-House-Design-6.1539270983.8601.jpg"
        },
        {
            id: 2,
            title: "Продаю 3км кв в 8мкр",
            price: 60000,
            img: "https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/Contemporary-Modern-House-Design-6.1539270983.8601.jpg"
        },
        {
            id: 3,
            title: "Продаю 1км кв в 3мкр",
            price: 3000,
            img: "https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/Contemporary-Modern-House-Design-6.1539270983.8601.jpg"
        },
    ]
    const [state,setState] = useState(arr)
    return(
        <div className="page">
            <h1 className="title">Последние объявления</h1>
            <div className="cards_wrapper">
                {
                state.map((item) => <Card id={item.id} title={item.title} price={item.price} image={item.img}/>)
                }
            </div>
            <h1 className="title">О нас</h1>
        </div>
    )
}

export default MainPage