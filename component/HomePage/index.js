import { useEffect, useState } from 'react';
import MenuBar from '../MenuBar';
import Share from '../Share';
import style from './style.module.css'

const HomePage =(props)=>{
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [shortIntro,setShortIntro] = useState('');
    const renderName = async() =>{
        setTimeout(() => {
            setName('Naveen Prabhu');
            setDescription('Full Stack Web developer');
          }, "1500");
        setTimeout(() => {
            setShortIntro(props.props);
          }, "3500");
    }

    useEffect(()=>{
        renderName();
    },[]);

    return <>
        <div className={style.homepage} id='home-container'>
            <div className='d-flex justify-content-center text-center align-items-center'>
                {name.length !=0 && <span className={style.name}>{name}</span>}
            </div>
        <div className='d-flex justify-content-center text-center align-items-center'>
            {description.length !=0 ? <div className={style.description}>{description}</div>:<></>}
        </div>
        <div>{shortIntro.length !=0 && <p className={style.intro}>&nbsp;&nbsp;{shortIntro}</p>}</div>
        <Share/>
        </div>
    </>
}

export default HomePage;