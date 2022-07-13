import './Sign.css'

const Sign = () => {
    return(
        <div className="sign">
            <h1>Войти</h1>
            <form className='signForm'>
                <legend>Login</legend>
                <input type="text" />
                <legend className='password'>Password</legend>
                <input type='password' />
            </form>
            <div className="btn_sign">
                <button className='close_2'>Close</button>
                <button className='save'>Save</button>
            </div>
        </div>
    )
}
export default Sign