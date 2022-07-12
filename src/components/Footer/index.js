import React from 'react'
import "./style.css";
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer>
        <span>
          Made with 💛 by el equipo de {" "}  {" "} 
          <a
            href="https://github.com/belcar-ceci"
            target="_blank"
            rel="noopener noreferrer"
          > <FaGithub/> 
            Cecilia Carbajal 
          </a> {" "}
          and 
          <a
            href="https://github.com/CalixtoLopez"
            target="_blank"
            rel="noopener noreferrer"
          > <FaGithub /> 
            Calixto López
          </a> {" "}
        </span>
        © || Hack a Boss ® || 2022
      </footer>
    </>
  )
}

export default Footer