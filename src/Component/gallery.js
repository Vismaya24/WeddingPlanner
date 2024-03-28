import PhotoAlbum from "react-photo-album";
import React from 'react';
import NavBars from "./NavBar";
import './styling.css';

class Gallery extends React.Component{
    render(){
        const photos = [
            { src:"g1.jpg", width: 1080, height: 1680 },
            { src: "g2.jpg", width: 1080, height: 1620 },
            { src: "g3.jpg", width: 1080, height: 1020 },
            { src: "g4.jpg", width: 1880, height: 1720 },
            { src: "g5.jpg", width: 1180, height: 820 },
            { src: "g6.jpg", width: 1080, height: 707 },
            { src: "g7.jpg", width: 1080, height: 720 },
            { src: "g8.jpg", width: 1080, height: 1549 },
            { src: "g9.jpg", width: 1080, height: 720 },
            { src: "g10.jpg", width:1080, height: 694 },
            { src: "g11.jpg", width: 1080, height: 1620 },
            { src: "g12.jpg", width: 1080, height: 720 },
            { src: "g13.jpg", width: 1080, height: 1440 },
            { src: "g14.jpg", width: 1080, height: 1020 },
            { src: "g15.jpg", width: 1080, height: 810 },
            { src: "g16.jpg", width: 1080, height: 750 },
            { src: "g17.jpg", width: 1080, height: 1300 },
            { src: "g18.jpg", width: 1080, height: 750 },
            { src: "g19.jpg", width: 1080, height: 680 },
            { src: "g20.jpg", width: 1080, height: 900 },
            { src: "g21.webp", width: 1080, height: 1000 },
            { src: "g22.jpeg", width: 1080, height: 700 },
            { src: "g23.jpg", width: 1080, height: 900 },
            { src: "g24.jpg", width: 1080, height: 900 },
            { src: "g25.jpg", width: 1080, height: 900 },
            { src: "g26.jpg", width: 1080, height: 900 },
            { src: "g27.jpg", width: 1080, height: 900 },
            { src: "g28.jpg", width: 1080, height: 900 },
            { src: "g29.jpg", width: 1080, height: 900 },
            { src: "g30.jpg", width: 1080, height: 900 },
            { src: "g31.webp", width: 1080, height: 900 },
            { src: "g32.jpg", width: 1080, height: 900 },
            { src: "g33.jpg", width: 1080, height: 900 },
            { src: "g34.jpg", width: 1080, height: 900 },
            { src: "g35.jpg", width: 1080, height: 900 },
            { src: "g36.jpg", width: 1080, height: 900 },
            { src: "g37.jpg", width: 1080, height: 900 },
            { src: "g38.jpg", width: 1080, height: 900 },
            { src: "g39.jpg", width: 1080, height: 900 },
            { src: "g40.jpg", width: 1080, height: 900 },
            { src: "g41.jpg", width: 1080, height: 900 },
            { src: "g42.jpg", width: 1080, height: 900 },
            ];
        return(
            <div>
                <br></br>
                <br></br>
                <br></br>
            <h4>G A L L E R Y
             <br></br> <img src="u1.jpg" alt="" width="20%" height="9%"></img>
            </h4>
            <div className='gall'><PhotoAlbum layout="masonry" photos={photos} /></div>
            <br></br>
            <br></br>
            <hr color='#825407' size='2' width="90%"></hr><br></br>
            <br></br>
            <br></br>
    <div className="end">
      <div className='ones'></div>
      <div className='ones'>
        <img src='logoBlack.png' width='200px' height='130px'></img>
      </div>
      <div className='one'></div>
      <div className='ones'>
        Contact Us
      <p style={{fontFamily:"Courier New"}}>eternalwelove@gmail.com
      <br></br>
      +91 9876543210</p>
      </div>
      <div className='one'></div>
      <div className='ones'>
        Follow Us
        <br></br>
        <br></br>
      <a href="https://www.facebook.com/profile.php?id=100087871437118">
        <img src="fac.png" width='50px' height='50px' className='ff'></img></a>
      &nbsp;
      <a href="https://instagram.com/weloveeternal?igshid=YmMyMTA2M2Y=">
        <img src="insta.png" width='50px' height='50px' className='ff'></img></a>
        &nbsp;
        <a href="https://instagram.com/weloveeternal?igshid=YmMyMTA2M2Y=">
        <img src="twitter.jpg" width='50px' height='50px' className='ff'></img></a>
      </div>
      <div className='ones'></div>
      </div>
            <NavBars/>
            </div>
        )}
}
    

export default Gallery;