import style from './style.module.css'

const Share = () =>{
    return <>
        <div className={style.container}>
            <ul className={style.liststyle}>
                <li className='mb-3'>
                    <span className={style.border}>
                    </span>
                </li>
                <li className='mb-3'>
                    <a href='https://github.com/np-naveen' target='_blank' className={style.item}>
                        <span className="uil uil-github-alt"></span>
                    </a>
                </li>
                <li className='mb-3'>
                    <a href='https://in.linkedin.com/in/naveen-prabhu-vijayakumar-824542143' target='_blank' className={style.item}>
                        <span className="uil uil-linkedin-alt"></span>
                    </a>
                </li>
                <li className='mb-3'>
                    <a href='https://www.instagram.com/_naveen_prabhu_/' target='_blank' className={style.item}>
                        <span className="uil uil-instagram"></span>
                    </a>
                </li>
                <li>
                    <span className={style.border}>
                    </span>
                </li>
            </ul>
        </div>
    </>
}

export default Share;