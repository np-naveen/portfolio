import style from './style.module.css'

const ReachMeAt = () =>{
    return <>
    <div className={style.heading}>
        <div className="d-flex justify-content-center">
            <h2>
                Reach me @
            </h2>
        </div>
        <div className='d-flex justify-content-center'>
            <div className={style.logo}>
                <a href='https://www.instagram.com/_naveen_prabhu_/' target={'_blank'}>
                    <img src='/reachme/insta.png' width={'100%'} height={'100%'}/>
                </a>
            </div>
            <div className={style.logo}>
                <a href='mailto:np.naveen.prabhu@gmail.com' target={'_blank'}>
                    <img src='/reachme/gmail.png' width={'100%'} height={'100%'}/>
                </a>
            </div>
            <div className={style.logo}>
                <a href='https://github.com/np-naveen' target={'_blank'}>
                    <img src='/reachme/git.png' width={'100%'} height={'100%'}/>
                </a>
            </div>
            <div className={style.logo}>
                <a href='https://in.linkedin.com/in/naveen-prabhu-vijayakumar-824542143' target={'_blank'}>
                    <img src='/reachme/linkedin.png' width={'100%'} height={'100%'}/>
                </a>
            </div>
        </div>
        <div className={style.madeTxt}>
            Made with 💙 in India
        </div>
    </div>
    </>
}

export default ReachMeAt
