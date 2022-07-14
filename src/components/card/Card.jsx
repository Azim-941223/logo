import css from './Card.module.css'

const Card = (props) => {
    return (
        <div className={"card " + css.card}>
            <img src={props.image} className="card-img-top" alt="house"/>
                <div className={"card-body " + css.cardbody}>
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-title">{props.price}</h5>
                    <a href="#" className="btn btn-primary">Купить</a>
                </div>
        </div>
    )
}
export default Card