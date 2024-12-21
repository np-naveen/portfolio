
import Download from '../Download';
import ReachMeAt from '../ReachMe';
import style from './style.module.css'

const About = (props) =>{
    return <>
    <div className='container'>
        <div className={`${style.about}`} id='about'>
            <div className='d-flex justify-content-center '>
                <h3 className={`${style.heading}`}>About me</h3>
            </div>
            <div className='d-flex row'>
                <div className="col-md">
                    <div className='d-flex justify-content-center'>
                        <img src='me.heic' className={style.about_img}/>
                    </div>
                </div>
                <div className={`col-8 ${style.text_area}`}>
                <p className={style.about_me}>&emsp;{props.props.about}</p>
                    <Download/>
                </div>
            </div>
        </div>
    </div>
    <div className='container'>
        <ReachMeAt/>
    </div>
    </>
}

export default About;
