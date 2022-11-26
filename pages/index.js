import $ from "jquery";
import Head from 'next/head'
import HomePage from "component/HomePage";
import Skill from 'component/Skill';
import { useEffect } from 'react';
import MenuBar from 'component/MenuBar';
import pagedata from 'public/utils/utils'
import Project from "component/Project";
import Journey from "component/Journey";
import About from "component/About";

export const getStaticProps = async () => {
  const dob = new Date("04/01/1999");
  var month_diff = Date.now() - dob.getTime();  
  var age_dt = new Date(month_diff);      
  var year = age_dt.getUTCFullYear();
  var age = Math.abs(year - 1970);

  return {
    props:{
      about: `Hi, I'm Naveen Prabhu, A ${age} year old Full Stack Web developer, Living in Salem, India. Currently working in Byju's as Associate Software Engineer. I love combining the worlds of logic and creative design with easy accessible, eye-catching and also user friendly websites & applications.`,
      shortIntro:`I love combining the worlds of logic and creative design with easy accessible, eye-catching and also user friendly websites`,
      skills:pagedata.skill,
      project:pagedata.project,
      journey:pagedata.journey
    }
  }
}
export default function Home(props) {
  const handleScroll = async()=>{
    const homeDivHeight = document.getElementById('home').clientHeight;
  }
  useEffect(()=>{
    $( window ).scroll(function() {
      // handleScroll();
    });
  },[]);

  return (
    <div className='portfolio' id='home-page'>
    <Head>
        <title>Naveen Prabhu V</title>
        <meta name="description" content="Web developer, Currently working in byjus" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Allura&display=swap" rel="stylesheet"/>
    </Head>
      <HomePage props={props.shortIntro}/>
      <Skill skills={props.skills}/>
      <Project project={props.project}/>
      <Journey  journey={props.journey}/>
      <About props={props}/>
      <MenuBar />
    </div>
  )
}
