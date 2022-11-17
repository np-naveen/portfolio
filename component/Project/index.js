import style from './style.module.css'

const Project = (props) =>{
    const {project} = props
    return <>
        <div id='project' className={style.projectcontainer}>
            <div className='container'>
                <div className={style.containertitle}>
                    <span>Project</span>
                </div>
                
                    {project.data.map((data)=>(
                        <div className='d-flex justify-content-center mb-5'>
                        <div className={style.projcard}>
                            <div className={`${style.proj_img_container}`}>
                                <img src={data.img_link} className={style.proj_img}/>
                            </div>
                            <div className={style.proj_desc_container}>
                                <h4 className={style.proj_title}>{data.proj_name}</h4>
                                <div className={`${style.proj_desc} mt-2`}>&emsp;{data.description}</div>
                                <div className={`${style.proj_tech_stack_container} justify-content-between mt-3`}>
                                    <div className={style.tech_stack}>TECH STACK : {data.tech_stack}</div>
                                    <div>
                                        <a href={data.redirect_link} className={style.redirect_link}>
                                        Click here to visit</a>
                                    </div>
                                </div>  
                                <div>
                                </div>    
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
    </>
}   

export default Project;