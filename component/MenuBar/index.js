import { useEffect, useState } from 'react';
import style from './style.module.css'
import $ from "jquery";

const MenuBar = () =>{

    const [activeMenu,setActiveMenu] = useState('home');

    const handleScroll = async()=>{
        const homeDivHeight = document.getElementById('home').offsetTop;
        const scrollY = window.scrollY
        console.log(scrollY > document.getElementById('about').offsetTop-200)
        if(scrollY >= document.getElementById('skill').offsetTop - 200 && scrollY <= document.getElementById('journey').offsetTop-200){
            setActiveMenu('skill')
        }else if(scrollY > document.getElementById('journey').offsetTop-200 && scrollY<=document.getElementById('about').offsetTop-200){
            setActiveMenu('journey')
        }
        else if( scrollY > document.getElementById('about').offsetTop-200){
            setActiveMenu('about')
        }else{
            setActiveMenu('home')
        }
      }
    const setMenuItemActive = async()=>{
        const menu = document.querySelectorAll('#menu');
    }

    async function handleMenu(data){
        setActiveMenu(data)
    }

    useEffect(()=>{
        setMenuItemActive();
        $( window ).scroll(function() {
            handleScroll();
        });
    },[]);

    return <>
        <div className='d-flex justify-content-center position-fixed  bottom-0 end-50'>
            <div className={style.menucontainer}>
                <ul className={style.menulist} id='menu'>
                    <li className={activeMenu=='home' ? style.menuitem+' menuactive':style.menuitem} data='home' 
                        onClick = { () => handleMenu('home')}>
                        <a href='#home'>Home</a></li>
                    <li className={activeMenu=='skill' ? style.menuitem+' menuactive':style.menuitem} data='skill' 
                        onClick = { ()=> handleMenu('skill')}>
                        <a href='#skill'>Skills</a></li>
                    <li className={activeMenu=='journey' ? style.menuitem+' menuactive':style.menuitem} data='journey' 
                        onClick={ () => handleMenu('journey')}>
                        <a href='#journey'>Journey</a></li>
                    <li className={activeMenu=='about' ? style.menuitem+' menuactive':style.menuitem} data='about' 
                        onClick = { ()=> handleMenu('about')}>
                        <a href='#about'>About</a></li>
                </ul>
            </div>
        </div>
    </>
}

export default MenuBar;  
