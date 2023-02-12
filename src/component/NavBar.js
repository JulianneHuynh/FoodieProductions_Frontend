import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";
import jquery from "jquery";


function NavBar() {
  // function animation (){
  //   var tabsNewAnim = jquery('#navbarSupportedContent');
  //   var activeItemNewAnim = tabsNewAnim.find('.active');
  //   var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  //   var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  //   var itemPosNewAnimTop = activeItemNewAnim.position();
  //   var itemPosNewAnimLeft = activeItemNewAnim.position();
  //   jquery(".hori-selector").css({
  //     "top":itemPosNewAnimTop.top + "px",
  //     "left":itemPosNewAnimLeft.left + "px",
  //     "height": activeWidthNewAnimHeight + "px",
  //     "width": activeWidthNewAnimWidth + "px",
  //   });
  //   jquery("#navbarSupportedContent").on("click","li",function(e) {
  //     jquery('#navbarSupportedContent ul li').removeClass("active");
  //     jquery(this).addClass('active');
  //     var activeWidthNewAnimHeight = jquery(this).innerHeight();
  //     var activeWidthNewAnimWidth = jquery(this).innerWidth();
  //     var itemPosNewAnimTop = jquery(this).position();
  //     var itemPosNewAnimLeft = jquery(this).position();
  //     jquery(".hori-selector").css({
  //       "top":itemPosNewAnimTop.top + "px",
  //       "left":itemPosNewAnimLeft.left + "px",
  //       "height":activeWidthNewAnimHeight + "px",
  //       "width":activeWidthNewAnimWidth + "px"
  //     })
  //   })
  // };

  // useEffect(() => {
    
  //   animation();
  //   jquery(window).on('resize', function() {
  //     setTimeout(function(){ animation(); }, 500);
  //   });
  // },[]);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <div className ="navbar-brand navbar-logo" >Foodie Productions</div> 
      <img src="/images/icon" className="logo" alt=""/>
          <button 
            className="navbar-toggler" 
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"> 
            <i className= "fas fa-bars text white"></i>
          </button>

            <div 
            className="collapse navbar-collapse"
            id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">

                  <div className="hori-selector">
                    <div className="left"></div>
                    <div className="right"></div>
                  </div>

                  <li className="nav-item">
                    <Link className="nav-link" to="/home" exact>
                      <i className="fas fa-tachometer-alt"></i>Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/create" exact>
                      <i className="fas fa-tachometer-alt"></i>Projects
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/archive" exact>
                      <i className="fas fa-tachometer-alt"></i>Ar-Chives
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/account" exact>
                      <i className="fas fa-tachometer-alt"></i>Profile
                    </Link>
                  </li>

              </ul>
            </div>

      <div className = "NavBar">
      {/* <Link exact path to ="/home">Home</Link> */}
      {/* <Link exact path to ="/create">Create</Link> */}
      {/* <Link exact path to ="/archive">Ar-Chives</Link> */}
      {/* <Link exact path to ="/account">Account</Link> */}
      </div>
    </nav>
    
    );
} 

export default NavBar;