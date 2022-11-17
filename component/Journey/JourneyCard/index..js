import style from './style.module.css'

const JourneyCard = (props) => {
    const {index,data} = props;
    return <>
    <div className={style.card}>
        <div className={`align-self-center ${style.logo}`}>
            <img src={data.logo_link} width={'100%'}/>
        </div>
        <div className={style.card_detail}>
            <div>{data.role}</div>
            <div>{data.duration}</div>
        </div>
    </div>   
    </>
}

export default JourneyCard;