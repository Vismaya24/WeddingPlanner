import * as React from 'react';
import {Link} from "react-router-dom";
import './styling2.css';
import NavBars from "./NavBar";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
class Venue extends React.Component {
  render(){
    const myStyle1={
      backgroundImage:
      "url('pic6.jpg')",
            height: '500px',
            width:'1519px',
            marginTop:'10px',
            marginBottom:'10px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
    }
    
    return(
          <div>
            <div><br></br><br></br><br></br><br></br>
            <div style={myStyle1}></div>
            <div className="line"><h4>V E N U E<br></br><img src="u1.jpg" width="20%" height="9%"></img></h4></div>
            <div><center><img src='QuotesP1.jpg' alt="" height="60px" width="550px"></img></center></div>
            
            <hr color='#825407' size='2' width="90%"></hr><br></br>

           <br></br>
           <div className='B'>
            <div className='name'>THE RESIDENCY<br></br>&emsp;&nbsp; TOWERS<hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/The+Residency+Towers,+Coimbatore/@11.0105412,76.9805283,15z/data=!4m2!3m1!1s0x0:0x16decb0885576006?sa=X&ved=2ahUKEwjRlZbG9Oz7AhWo_HMBHW9MAeMQ_BJ6BAhwEAc'>
            <img src="location.png" width="5%" height="6%"></img>Avinashi Road, Coimbatore</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>04222241414
            <br></br><img src="seat.jpg" width="8%" height="10%"></img> 30 - 100 allocation
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://www.theresidency.com/towers-coimbatore/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="v1.jpg" width="46%" height="76%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>BALLROOM - 100 Seating | 300 Floating <br></br>LEGEND - 70 Seating | 150 Floating <br></br>SENETOR - 30 Seating | 70 Floating <br></br>COUNCIL - 20 Seating | 50 Floating <br></br>Room Count - 350</div>
                </div></div></div></div></div>
            <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>


           
           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&nbsp;&nbsp;&nbsp;M WEDDING <hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/M+Weddings+%26+Conventions/@13.0659142,80.1492631,17z/data=!3m1!4b1!4m5!3m4!1s0x3a5263d904ccafe5:0xcd60636ce77d46e7!8m2!3d13.0659764!4d80.1514538'>
            <img src="location.png" width="5%" height="6%"></img>Ambattur Road, Chennai</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>7601844844
            <br></br><img src="seat.jpg" width="8%" height="10%"></img> 100 - 1500 allocation
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://www.mconventions.com/?gclid=CjwKCAiAs8acBhA1EiwAgRFdw9Wq7kDiIcKeG0lKfM-Ud_8DcFYnB-p3Ha79j2Ex8hNGfzJ7ewhoMBoCpEsQAvD_BwE"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="v2.jpg" width="45%" height="74%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>BALLROOM - 120 Seating | 310 Floating <br></br>LEGEND - 75 Seating | 155 Floating <br></br>SENETOR - 40 Seating | 75 Floating <br></br>COUNCIL - 24 Seating | 55 Floating </div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&nbsp;&nbsp;&nbsp;&emsp;&nbsp;KAYAL<br></br>&emsp; WEDDING <hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/Kayal+l+Wedding+Spaces+%7C+Marriage+Hall+%7C+Banquet+Hall+l+Open+Lawn/@11.0660385,76.9264734,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba8f72287998bf7:0xfb79f07a4977c6ab!8m2!3d11.0660385!4d76.9286621'>
            <img src="location.png" width="5%" height="6%"></img>KNG Pudur Road, Coimbatore</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>9910502284
            <br></br><img src="seat.jpg" width="8%" height="10%"></img> 100 - 2000 allocation
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://www.kayalthevenue.com/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3.5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="v3.jpg" width="54%" height="82%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>BALLROOM - 120 Seating | 310 Floating <br></br>LEGEND - 75 Seating | 155 Floating <br></br>SENETOR - 40 Seating | 75 Floating <br></br>COUNCIL - 24 Seating | 55 Floating </div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&nbsp;FORTUNE VENUE <hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/Fortune+Park+Vellore/@12.9579697,79.1393972,17z/data=!3m1!4b1!4m8!3m7!1s0x3bad477cf9529b29:0x3a3ed0acaaa4fea!5m2!4m1!1i2!8m2!3d12.9579697!4d79.1415859'>
            <img src="location.png" width="5%" height="6%"></img>KNG Pudur Road, Coimbatore</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>8047321951
            <br></br><img src="seat.jpg" width="8%" height="10%"></img>  allocation
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://www.fortunehotels.in/vellore-hotels.d.40"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="v4.jpg" width="54%" height="82%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>BALLROOM - 120 Seating | 310 Floating <br></br>LEGEND - 75 Seating | 155 Floating <br></br>SENETOR - 40 Seating | 75 Floating <br></br>COUNCIL - 24 Seating | 55 Floating </div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>




           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&nbsp;&nbsp;&nbsp;&nbsp;CR&nbsp; MAHAL<hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href="https://www.google.com/maps/search/CR+mahal+madurai/@9.9096375,78.1377586,15z/data=!3m1!4b1">
            <img src="location.png" width="5%" height="6%"></img>Ring Road,Madurai</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>9489804050
            <br></br><img src="seat.jpg" width="8%" height="10%"></img> 130 - 2200 allocation
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://crmahal.com/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="v5.jpg" width="50%" height="80%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>BALLROOM - 126 Seating | 315 Floating <br></br>LEGEND - 72 Seating | 151 Floating <br></br>SENETOR - 43 Seating | 77 Floating <br></br>COUNCIL - 28 Seating | 54 Floating </div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>



           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BREEZE<br></br>&nbsp; &nbsp;&nbsp;RESIDENCY<hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href="https://www.google.com/maps/place/Breeze+Residency/@10.7979859,78.6822226,17z/data=!3m1!4b1!4m8!3m7!1s0x3baaf5143c146c55:0xf425522e2c67ff06!5m2!4m1!1i2!8m2!3d10.7979726!4d78.6844053">
            <img src="location.png" width="5%" height="6%"></img>Kalai Arangam Road,Tiruchirappalli</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>040312414414
            <br></br><img src="seat.jpg" width="8%" height="10%"></img> 120 - 2100 allocation
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://breezeresidency.com/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="v6.jpg" width="49%" height="78%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>BALLROOM - 127 Seating | 300 Floating <br></br>LEGEND - 80 Seating | 162 Floating <br></br>SENETOR - 44 Seating | 73 Floating <br></br>COUNCIL - 26 Seating | 54 Floating </div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>




           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>VIJAY  PALACE<hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href="https://www.google.com/maps/place/Vijay+Palace/@10.3788041,78.8099451,17z/data=!3m1!4b1!4m5!3m4!1s0x3b0079dcc4528565:0xbb8baede376502bf!8m2!3d10.3788041!4d78.8121338">
            <img src="location.png" width="5%" height="6%"></img>Kalai Sathyamurthy Road,Pudukkottai</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>9910502284
            <br></br><img src="seat.jpg"width="8%" height="10%"></img> 150 - 2000 allocation
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://vijay-palace-marriage-celebrant.business.site/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="v7.jpg" width="50%" height="76%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>BALLROOM - 125 Seating | 305 Floating <br></br>LEGEND - 75 Seating | 150 Floating <br></br>SENETOR - 45 Seating | 70 Floating <br></br>COUNCIL - 22 Seating | 50 Floating </div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&nbsp;&nbsp;&nbsp;WESTERN<br></br>&emsp;&nbsp;&nbsp;GHATZ<hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href="https://www.google.com/maps/place/Hotel+Western+Gatz/@10.0150314,77.4773362,17z/data=!3m1!4b1!4m8!3m7!1s0x3b0714ae7474edbb:0xe511e97bebb5e5ce!5m2!4m1!1i2!8m2!3d10.0150314!4d77.4795249">
            <img src="location.png" width="5%" height="6%"></img>Theni</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>7432851096
            <br></br><img src="seat.jpg" width="8%" height="10%"></img> 200 - 2500 allocation
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://www.hotelwesterngatz.com/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="v8.jpg" width="50%" height="78%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>BALLROOM - 125 Seating | 305 Floating <br></br>LEGEND - 75 Seating | 150 Floating <br></br>SENETOR - 45 Seating | 70 Floating <br></br>COUNCIL - 22 Seating | 50 Floating </div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&nbsp;&nbsp;&nbsp;MM LEGACY<hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href="https://www.google.com/maps/place/MM+Legacy+-+A+Bergamont+Group+of+Hotel,+Kanchipuram/@12.8705828,79.721486,17z/data=!3m1!4b1!4m8!3m7!1s0x3a52c21bd31e8f4b:0xc7e53cd58760c37b!5m2!4m1!1i2!8m2!3d12.8705828!4d79.7236747">
            <img src="location.png" width="5%" height="6%"></img>Kanchipuram</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>9943881111
            <br></br><img src="seat.jpg" width="8%" height="10%"></img> 150 - 2500 allocation
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://www.mmlegacy.in/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="v9.jpg" width="50%" height="78%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>BALLROOM - 125 Seating | 305 Floating <br></br>LEGEND - 75 Seating | 150 Floating <br></br>SENETOR - 45 Seating | 70 Floating <br></br>COUNCIL - 22 Seating | 50 Floating </div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>HOTEL SINGAAR<hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href="https://www.google.com/maps/place/Hotel+Singaar+International/@8.0887823,77.5478824,17z/data=!3m1!4b1!4m8!3m7!1s0x3b04ed3a05c04f41:0xc97324661c2f0587!5m2!4m1!1i2!8m2!3d8.0887823!4d77.5500711">
            <img src="location.png" width="5%" height="6%"></img>Kanyakumari</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>8074963025
            <br></br><img src="seat.jpg" width="8%" height="10%"></img> 100 - 2000 allocation
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://www.singaar.in/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3.5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="v10.jpg" width="48%" height="75%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>BALLROOM - 100 Seating | 300 Floating <br></br>LEGEND - 70 Seating | 150 Floating <br></br>SENETOR - 30 Seating | 70 Floating <br></br>COUNCIL - 20 Seating | 50 Floating <br></br>Room Count - 350</div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
          
           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&nbsp;GREAT TRAILS<hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href="https://www.google.com/maps/place/GReaT+Trails+Riverview+Resort+Thanjavur+By+GRT+Hotels/@10.8207696,79.1086023,17z/data=!3m1!4b1!4m8!3m7!1s0x3baac7327c0773a5:0x8725ce34deba3281!5m2!4m1!1i2!8m2!3d10.8207696!4d79.110791">
            <img src="location.png" width="5%" height="6%"></img>Thanjavur</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>7452014030
            <br></br><img src="seat.jpg" width="8%" height="10%"></img> 200 - 1000 allocation
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://grthotels.com/amp/thanjavur.html?gclid=Cj0KCQiA1sucBhDgARIsAFoytUusxIonGqimpG_jN9kdGfIWrJ2s5j6njAQfhoPpx6l2_fX8zUV5GPQaAuLZEALw_wcB"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="v11.jpg" width="49%" height="76%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>BALLROOM - 200 Seating | 305 Floating <br></br>LEGEND - 100 Seating | 150 Floating <br></br>SENETOR - 45 Seating | 100 Floating <br></br>COUNCIL - 22 Seating | 50 Floating </div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
          
           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&emsp;&nbsp;SRM HOTEL<hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href="https://www.google.com/maps/place/SRM+Hotel+Tuticorin/@8.795913,78.1549829,17z/data=!3m1!4b1!4m8!3m7!1s0x3b03ef09eea065f7:0x24ba6d42e864a67!5m2!4m1!1i2!8m2!3d8.795913!4d78.1571716">
            <img src="location.png" width="5%" height="6%"></img>Tuticorin</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>99944 37724
            <br></br><img src="seat.jpg" width="8%" height="10%"></img> 150 - 1000 allocation
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://www.srmhotels.com/tuticorin-hotel/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="v12.jpg" width="49%" height="76%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>BALLROOM - 125 Seating | 305 Floating <br></br>LEGEND - 75 Seating | 150 Floating <br></br>SENETOR - 45 Seating | 70 Floating <br></br>COUNCIL - 22 Seating | 50 Floating </div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&nbsp;ATRIUM HALL<hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href="https://www.google.com/maps/place/Hotel+Atrium/@11.329686,77.720766,17z/data=!3m1!4b1!4m8!3m7!1s0x3ba96f6b571f77f1:0x5d1d03611730bee2!5m2!4m1!1i2!8m2!3d11.329686!4d77.7229547">
            <img src="location.png" width="5%" height="6%"></img>Erode</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>7854962510
            <br></br><img src="seat.jpg" width="8%" height="10%"></img> 250 - 2000 allocation
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="http://hotelatriumerode.com/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="v13.jpg" width="49%" height="82%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>BALLROOM - 125 Seating | 305 Floating <br></br>LEGEND - 75 Seating | 150 Floating <br></br>SENETOR - 45 Seating | 70 Floating <br></br>COUNCIL - 22 Seating | 50 Floating </div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>VIVERA GRANDE<hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href="https://www.google.com/maps/place/Vivera+Grande+(Hotel)/@10.3666649,77.9751085,17z/data=!3m1!4b1!4m8!3m7!1s0x3b00aa5ef9ab643d:0xd7a21d2a5ecd9f81!5m2!4m1!1i2!8m2!3d10.3666649!4d77.9772972">
            <img src="location.png" width="5%" height="6%"></img>Begambur</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>7548219021
            <br></br><img src="seat.jpg" width="8%" height="10%"></img> 200 - 3000 allocation
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="http://www.viveragrande.com/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="v14.jpg" width="49%" height="76%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>BALLROOM - 125 Seating | 400Floating <br></br>LEGEND - 75 Seating | 300 Floating <br></br>SENETOR - 50 Seating | 70 Floating <br></br>COUNCIL - 22 Seating | 70 Floating </div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&nbsp;ROYAL GRAND<hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href="https://www.google.com/maps/place/HOTEL+THE+ROYAL+GRAND/@10.9615678,78.0697093,17z/data=!3m1!4b1!4m8!3m7!1s0x3baa2f21fb58ed7b:0xf8990843d9f02a84!5m2!4m1!1i2!8m2!3d10.9615678!4d78.071898">
            <img src="location.png" width="5%" height="6%"></img>Karur</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>9475157482
            <br></br><img src="seat.jpg"width="8%" height="10%"></img> 300 - 4000 allocation
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="http://hoteltheroyalgrand.com/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="v15.jpg" width="49%" height="82%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>BALLROOM - 400 Seating | 305 Floating <br></br>LEGEND - 75 Seating | 150 Floating <br></br>SENETOR - 45 Seating | 75Floating <br></br>COUNCIL - 22 Seating | 50 Floating </div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&emsp;TTDC HALL<hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href="https://www.google.com/maps/place/TTDC+Ranipet/@12.9473918,79.3167504,17z/data=!3m1!4b1!4m8!3m7!1s0x3bad35a2fa49559f:0x6c66827a58443494!5m2!4m1!1i2!8m2!3d12.9473918!4d79.3189391">
            <img src="location.png" width="5%" height="6%"></img>Ranipet</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>8074596302
            <br></br><img src="seat.jpg" width="8%" height="10%"></img> 300 - 3000 allocation
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://www.ttdconline.com/hotel-tamil-nadu-ranipet.html"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="v15.jpg" width="50%" height="79%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>BALLROOM - 500 Seating | 305 Floating <br></br>LEGEND - 75 Seating | 300 Floating <br></br>SENETOR - 45 Seating | 70 Floating <br></br>COUNCIL - 22 Seating | 50 Floating </div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
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
            </div>
    )
  }
}
export default Venue;