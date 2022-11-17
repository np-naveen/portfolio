import { useEffect, useState } from 'react';
import style from './style.module.css'
const MenuBar = (props) =>{
    const {activeMenu} = props;
    const setMenuItemActive = async()=>{
        const menu = document.querySelectorAll('#menu');
    }

    const handleMenu = async(event) =>{
        // if(event.target.data != menu && event.target.data != 'menu'){
        //     document.getElementById(menu).classList.remove('menuactive');
        //     document.getElementById(event.target.id).classList.add('menuactive');
        //     setMenu(event.target.id);

        // }
    }
    useEffect(()=>{
        setMenuItemActive();
    },[]);
    return <>
        <div className='d-flex justify-content-center position-fixed  bottom-0 end-50'>
            <div className={style.menucontainer}>
                <ul className={style.menulist} onClick={handleMenu} id='menu'>
                    <li className={activeMenu=='home' ? style.menuitem+' menuactive':style.menuitem} data='home'>
                        <a href='/'>Home</a></li>
                    <li className={activeMenu=='skill' ? style.menuitem+' menuactive':style.menuitem} data='skill'>
                        <a href='#skill'>Skills</a></li>
                    <li className={activeMenu=='journey' ? style.menuitem+' menuactive':style.menuitem} data='journey'>
                        <a href='#journey'>Journey</a></li>
                    <li className={activeMenu=='about' ? style.menuitem+' menuactive':style.menuitem} data='about'>
                        <a href='#about'>About</a></li>
                </ul>
            </div>
        </div>
    </>
}

export default MenuBar;  