import React from 'react';
import '../Css/NavBar.css';
import NavBarLogo from '../Img/Logo-Super-Cleaning.png';

function NavBar() {

    const Menu = () => {

        //Media querys para ajuste del menú responsivo
        let mql1 = window.matchMedia("(min-width: 1001px)");


        let Menu = document.getElementById("NavBar-Child-Menu");
        let NavBar = document.getElementById("NavBar");
        let NavBarBackground = document.getElementById("NavBar-Background");
        let Hamburger = document.getElementById("Hamburger");
        let Close = document.getElementById("Close");

        let CreatedBy = document.getElementById("CreatedBy");


        
        if (mql1.matches){

            Menu.style.display = "none";
            CreatedBy.style.opacity = "0";

        }
        else{

            Hamburger.style.display = "block";
            Close.style.display = "none";
    
            Menu.addEventListener("click", function () {
            
                let NavBar_position = NavBar.style.opacity;
            
                if (NavBar_position != 1) {
                  
                    NavBarBackground.style.background = "linear-gradient(to bottom, hsla(248, 47%, 29%, 0.500), transparent)";
                    NavBarBackground.style.transition = "ease-in-out 590ms";
                    NavBarBackground.style.height = "100vh";
                    NavBar.style.height = `40vh`;
                    NavBar.style.opacity = "1";
                    Hamburger.style.display = "none";
                    Close.style.display = "block";
                    CreatedBy.style.opacity = "1";
                    CreatedBy.style.display = "flex";
    
                } else {
                    
                    NavBarBackground.style.background = "none";
                    NavBarBackground.style.height = "0vh";
                    NavBar.style.height = "0px";
                    NavBar.style.opacity = "0";
                    Hamburger.style.display = "block";
                    Close.style.display = "none";
                    CreatedBy.style.opacity = "0";
                    CreatedBy.style.display = "none";
    
                }
            
            });

        }


    };

    const MenuC = () => {

        let Hamburger = document.getElementById("Hamburger");
        let Close = document.getElementById("Close");
        let CreatedBy = document.getElementById("CreatedBy");


        Hamburger.style.display = "block";
        Close.style.display = "none";
        CreatedBy.style.opacity = "0";

        

    };

    const Home = () => {
      
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
    
    };

    const About = () => {
     
        //Media querys para ajuste de trasiciones y scale
        let mql1 = window.matchMedia("(min-width: 301px) and (max-width: 400px)");
        let mql2 = window.matchMedia("(min-width: 401px) and (max-width: 500px)");
        let mql3 = window.matchMedia("(min-width: 501px) and (max-width: 600px)");
        let mql4 = window.matchMedia("(min-width: 601px) and (max-width: 700px)");
        let mql5 = window.matchMedia("(min-width: 701px) and (max-width: 800px)");
        let mql6 = window.matchMedia("(min-width: 801px) and (max-width: 900px)");
        let mql7 = window.matchMedia("(min-width: 901px) and (max-width: 990px)");
      
        if (mql1.matches){

            window.scroll({
                top: 680,
                left: 0,
                behavior: "smooth",
            });

        }
        else if(mql2.matches){
            
            window.scroll({
                top: 750,
                left: 0,
                behavior: "smooth",
            });

        }
        else if(mql3.matches){
            
            window.scroll({
                top: 880,
                left: 0,
                behavior: "smooth",
            });

        }
        else if(mql4.matches){
            
            window.scroll({
                top: 1000,
                left: 0,
                behavior: "smooth",
            });

        }
        else if(mql5.matches){
            
            window.scroll({
                top: 1100,
                left: 0,
                behavior: "smooth",
            });

        }
        else if(mql6.matches){
            
            window.scroll({
                top: 1200,
                left: 0,
                behavior: "smooth",
            });

        }
        else if(mql7.matches){
            
            window.scroll({
                top: 1270,
                left: 0,
                behavior: "smooth",
            });

        }
        else{

            window.scroll({
                top: 700,
                left: 0,
                behavior: "smooth",
            });

        }

    };

    const Contact = () => {
      
        //Media querys para ajuste de trasiciones y scale
        let mql1 = window.matchMedia("(min-width: 301px) and (max-width: 400px)");
        let mql2 = window.matchMedia("(min-width: 401px) and (max-width: 500px)");
        let mql3 = window.matchMedia("(min-width: 501px) and (max-width: 600px)");
        let mql4 = window.matchMedia("(min-width: 601px) and (max-width: 700px)");
        let mql5 = window.matchMedia("(min-width: 701px) and (max-width: 800px)");
        let mql6 = window.matchMedia("(min-width: 801px) and (max-width: 900px)");
        let mql7 = window.matchMedia("(min-width: 901px) and (max-width: 990px)");
      
        if(mql1.matches){

            window.scroll({
                top: 3566,
                left: 0,
                behavior: "smooth",
            });

        }
        else if(mql2.matches){

            window.scroll({
                top: 3566,
                left: 0,
                behavior: "smooth",
            });

        }
        else if(mql3.matches){

            window.scroll({
                top: 3660,
                left: 0,
                behavior: "smooth",
            });

        }
        else if(mql4.matches){
            
            window.scroll({
                top: 3753,
                left: 0,
                behavior: "smooth",
            });

        }
        else if(mql5.matches){
            
            window.scroll({
                top: 3853,
                left: 0,
                behavior: "smooth",
            });

        }
        else if(mql6.matches){
            
            window.scroll({
                top: 3770,
                left: 0,
                behavior: "smooth",
            });

        }
        else if(mql7.matches){
            
            window.scroll({
                top: 3860,
                left: 0,
                behavior: "smooth",
            });

        }
        else{
            
            window.scroll({
                top: 2280,
                left: 0,
                behavior: "smooth",
            });

        }

    };

    const Blog = () => {
      
        //Media querys para ajuste de trasiciones y scale
        let mql1 = window.matchMedia("(min-width: 301px) and (max-width: 400px)");
        let mql2 = window.matchMedia("(min-width: 401px) and (max-width: 500px)");
        let mql3 = window.matchMedia("(min-width: 501px) and (max-width: 600px)");
        let mql4 = window.matchMedia("(min-width: 601px) and (max-width: 700px)");
        let mql5 = window.matchMedia("(min-width: 701px) and (max-width: 800px)");
        let mql6 = window.matchMedia("(min-width: 801px) and (max-width: 900px)");
        let mql7 = window.matchMedia("(min-width: 901px) and (max-width: 990px)");
      

        if(mql1.matches){

            window.scroll({
                top: 1900,
                left: 0,
                behavior: "smooth",
            });

        }
        else if(mql2.matches){

            window.scroll({
                top: 1800,
                left: 0,
                behavior: "smooth",
            });

        }
        else if(mql3.matches){

            window.scroll({
                top: 1950,
                left: 0,
                behavior: "smooth",
            });

        }

        else if(mql4.matches){
            
            window.scroll({
                top: 2060,
                left: 0,
                behavior: "smooth",
            });

        }
        else if(mql5.matches){
            
            window.scroll({
                top: 2150,
                left: 0,
                behavior: "smooth",
            });

        }
        else if(mql6.matches){
            
            window.scroll({
                top: 2200,
                left: 0,
                behavior: "smooth",
            });

        }
        else if(mql7.matches){
            
            window.scroll({
                top: 2300,
                left: 0,
                behavior: "smooth",
            });

        }
        else{

            window.scroll({
                top: 1160,
                left: 0,
                behavior: "smooth",
            });

        }

    };

    window.addEventListener("scroll", function () {

        let scrollPosition = window.pageYOffset;
        let CreatedBy = document.getElementById("CreatedBy");
        //console.log(scrollPosition);

        if(scrollPosition > 1260)
        {

            CreatedBy.style.opacity = "1";

        }
        else{

            CreatedBy.style.opacity = "0";

        }
    
    });

    return (
        
        <div className="Container-NavBar" onLoad={Menu} onChange={MenuC}>

            <div className="NavBar" id="NavBar-Background">
                
                <div className="NavBar-Child">

                    <img tabIndex="1" onClick={Home} src={NavBarLogo} className="NavBar-Logo" alt="Logo" />

                </div>

                
                
                <div className="NavBar-Child">

                    <button id="NavBar-Child-Menu">

                        <i id="Hamburger">
                            <svg className="NavBar-Child-Svg" width="24" height="11"><g stroke="white" strokeWidth="1.5" fill="none" fillRule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g></svg>
                        </i>

                        <i id="Close">
                            <svg className="NavBar-Child-Svg" width="18" height="19"><g stroke="white" strokeWidth="1.5" fill="none" fillRule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g></svg>
                        </i>

                    </button>

                    <ul className="NavBar-Links" id="NavBar">

                        <li tabIndex="2" onClick={Home} className="NavBar-Links-Childs">

                            <span className="NavBar-Links-Child">Inicio</span>

                        </li>

                        <li tabIndex="3" onClick={About} className="NavBar-Links-Childs">

                            <span className="NavBar-Links-Child">Promoción</span>

                        </li>
                        
                        <li tabIndex="4" onClick={Contact} className="NavBar-Links-Childs">

                            <span className="NavBar-Links-Child">Servicios</span>                

                        </li>
                        
                        <li tabIndex="5" onClick={Blog} className="NavBar-Links-Childs">

                            <span className="NavBar-Links-Child">Contacto</span>

                        </li>
                        
                    
                    </ul>

                </div>
                
                {/*<div className="NavBar-Child">

                    <button className="Button-Request-Invite1">Contact service</button>

                </div>*/}

                <span id="CreatedBy">Website Created by Edgardo FB</span>

            
            </div>
            
        </div>
    )
}

export default NavBar
