import style from './style.module.css'
const Skill = (props)=>{
    const {skills} = props;
    return <>
    <div className='container' id='skill'>
        <div className='d-flex flex-wrap justify-content-around'>
            <div className={style.skillboxheading}>
                <h2 className={style.skillheading}>Skill</h2>
                <span>Things which i gained over the years ...!</span>
            </div>
            {skills.data.map((data)=>(
            <div className={style.skillbox}>
                <span>
                    <img src={data.iconlink} className={style.icon}></img>
                </span>
                {data.title}
                <ul className={style.listfont}>
                    {data.items.map((itemData)=>(
                        <li>{itemData.data}</li>
                    ))}
                </ul>
            </div>
            ))}
        </div>
    </div>
    </>
}

export default Skill;