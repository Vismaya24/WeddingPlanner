import React from "react";
import './wedding.jpg';
import {Link} from "react-router-dom";
import  ReactDOM  from "react";
import './styles.css'
import NavBars from "./NavBar";
import { fontFamily, shadows } from "@mui/system";
class HomePage extends React.Component
{
    render()
    
    {
        const myStyle1={
            backgroundImage:
            "url('ETERNAL.jpg')",
            height:'250vh',
            width:'203.5vh',
            marginTop:'0px',
            marginpottom:'0px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
        const myStyle2={
            position: 'absolute',
            top: '900px',
            left: '0px',
         };
        const myStyle3={
            fontFamily:'Segoe Print',
            position:'absolute',
            top:'935px',
            fontSize:'25px',
            textAlign:'center',
            fontColor:'brown',
            paddingLeft:'50%',
            paddingRight:'10%',
            backgroundColor:'rgba(0, 0, 0, 0.080)',

        };
        const myStyle4={
            position: 'absolute',
            top: '1650px',
            left: '70px',
           
                   

         };
         const myStyle5={
            position: 'absolute',
            top:'2300px',
            width:'100%',
            
         };
         const myStyle6={
            position: 'absolute',
            top:'2300px',
             width:'100%',
         }
         const myStyle7={
          position: 'absolute',
          
          bottom:'700px',
          width:'70%',
          
          left:'230px',
       }
        return(
            <div>
                <div><video autoPlay loop muted id='video' width={"100%"} height={"30%"}><source src="video1.mp4" type="video/mp4"></source></video></div>
                <div style={myStyle3} className="text">
                  <br></br>As if by magic, ETERNAL arranges every detail around your special day. 
                Along with providing you with the most 
                stunning dream wedding you could ever imagine, our website also provide you with impromptu solutions 
                to make your day absolutely perfect. Pick out the things that are important to you and let the rest 
                fall into place! Enjoy every minute of planning, but most importantly the wedding itself, it goes by way too fast.</div>
                <div style={myStyle2} className="image">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="wedding.jpg" width="80%"></img>
                <br></br>
                <br></br>
                </div>
                <div style={myStyle4} className="slep" >
                <img src="sleep.jpg" alt="wedding" width="95%"/>
               <div className="word" >
               <p style={{fontFamily:"Bradley Hand ITC",fontSize:'60px',textAlign:'left',color:'azure'}} >Celebrate with Us!!!</p>
               <p style={{fontFamily:"Bradley Hand ITC",fontSize:'30px',textAlign:'left',color:'azure' ,textAlign:'center'}}>
                Whether you choose to host an intimate wedding celebration or a large destination wedding in Tamil nadu,
               <br></br>our website work tirelessly to deliver your memmorable wedding celebration.</p>
               </div>
                </div>
                <br></br>
                <br></br>
                <div style={myStyle5}><hr></hr>
                <br></br></div>
                <div style={myStyle6}>
      
      <div className='start'>
        <div className='two'>
        <div className='three'>
        <img src="bride 2.jpg" width='500px' height='700px'></img></div>
        <div className='four' style={myStyle7}><p className='des'>
          <br></br>
          Weddings are not about spending the least 
        amount of money
        or the most amount of the money,
        they are about spending good money on the element
        that are most important to you and your partner.
        <br></br>
        <br></br>
        </p></div>
        </div>
        <div className='two'>&emsp;&emsp;</div>
        <div className='two'>
          <img src="bride.jpg" width='500px' height='700px'></img>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="middle">
        <p className="mid">
          <br></br>ETERNAL help in organizing the wedding right from the word Go. Being the most 
        special day in your life, it is essential to be careful while hiring them. Where earlier, family 
        members used to divide responsibilities and provide support for the bride and groom today’s hectic
         lifestyles have done away with this practice and left lesser time for anyone to be involved intricately 
         in planning a home wedding. Thus, most people opt for experts who can take care of everything from your wedding 
         guest list to your vendor contact list to wedding day timeline. ETERNAL suggests you the famous wedding planners 
         who become your eyes, ears and hands to executing your most beautiful day into an equally beautiful memory. <br></br><br></br></p>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
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
    </div>
                <NavBars/>
                 
                </div>
        );
    }
}

export default HomePage;