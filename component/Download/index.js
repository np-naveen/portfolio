import style from './style.module.css'

const Download = () =>{
    return<>
        <div className={style.button_container}>
            <a target='_blank' href='/naveenresume.pdf' className={style.a_link}>
                <button className={style.button}>Dowload Resume &darr;</button>
            </a>
        </div>
    </>
}

export default Download;