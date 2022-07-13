import './Ads.css'

const Ads = () => {
    return(
        <div className="ads">
            <h2>Создать объявления</h2>
            <div className="createAds">
                <form>
                    <legend>Название</legend>
                    <input className='small' type="text" />
                    <legend>Description</legend>
                    <textarea name="" id="" cols="66" rows="10"></textarea>
                    <legend>Цена</legend>
                    <input className='small' type="text" />
                </form>
                <div className="btn">
                    <button className='close'>Close</button>
                    <button className='signIn'>Save</button>
                </div>
            </div>
        </div>
    )
}
export default Ads