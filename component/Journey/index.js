
import JourneyCard from './JourneyCard/index.';
import style from './style.module.css'
const Journey = (props) =>{
    const {journey} = props;
    return <div id='journey'>
        <h1 className={style.section_title}> My journey</h1>
        <div className='container'>
            <div className='d-flex justify-content-center flex-wrap'>
                {journey.data.map((data)=>(
                    <JourneyCard data={data}/>
                ))}
                
                
            </div>
        </div>
    </div>
}

export default Journey;