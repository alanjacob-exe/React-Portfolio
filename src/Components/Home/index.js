import logoTitle from "../../assets/images/logo-s.png";
import "./index.scss";
import { Link } from 'react-router-dom';
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetter";
import { useEffect } from "react";
import Logo from '../Logo';


const Home = () => {

  const[letterClass,setLetterClass]=useState('text-animate')
  const nameArray=['l','a','n']
  const jobArray=['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    },4000)
    
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>


          <br />
          <span className={`${letterClass} _13`}>i</span>
          <span className={`${letterClass} _14`}>'m</span>


          <img src={logoTitle} alt="developer" />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>

        </h1>
        <h2>Student / React Developer</h2>
        <Link to="/contact" className="flat-button">Contact Me</Link>



      </div>
    </div>
  );
};
export default Home;
