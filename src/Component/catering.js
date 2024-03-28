import * as React from 'react';
import {Link} from "react-router-dom";
import './styling2.css';
import NavBars from "./NavBar";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
class Catering extends React.Component {
  render(){
    const myStyle1={
      backgroundImage:
      "url('cok.jpg')",
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
            <div className="line"><h4>C A T E R I N G<br></br><img src="u1.jpg" alt="" width="20%" height="9%"></img></h4></div>
            <div><center><img src='QuotesP2.jpg' alt="" height="70px" width="600px"></img></center></div>
            <br></br>
           
            <div className='B'>
              <div className='name'>&nbsp;&nbsp;MR.CHEF<hr color='#825407'></hr>
              <div className='box3'><div className='font2'><a href='https://www.google.com/maps?q=mr+chef+catering+coimbatore&rlz=1C1CHBF_enIN1005IN1005&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi3ufmor-r7AhWBxjgGHV9gAw0Q_AUoAnoECAIQBA'>
              <img src="location.jpg" width="5%" height="6%"></img>Coimbatore</a>
              <br></br><img src='phone.jpg' width="5%" height="6%"></img>9965193786
              <br></br><img src="r1.jpg" width="5%" height="6%"></img> 30 - 100 allocation
              <br></br><img src="l1.jpg" width="5%" height="6%"></img><a href="https://www.mrchefcateringservices.com/"> Website</a>
              <Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={5} precision={0.5} readOnly/>
              </div></div>
              </div>
              <div className='box1'>
                <div className='i'><img src="j1.jpg" width="42%" height="30%"></img>
                <div className='box2'>
                  <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>

                  <div className='font3'>Max Capacity - 500<br></br>Veg Price per plate - 200/-<br></br>Non Veg Price per plate - 200<br></br>Cuisines - North Indian , South Indian, Chineese</div>
                  </div></div></div></div></div>
              <br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
  
             
             <br></br><br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             <br></br>
             <div className='B'>
              <div className='name'>ANANDHAM<br></br>CATERING<hr color='#825407'></hr>
              <div className='box3'><div className='font2'><a href='https://www.google.com/maps?q=anandham+catering+coimbatore&rlz=1C1CHBF_enIN1005IN1005&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzILCC4QgAQQxwEQrwEyAggmMgIIJjICCCYyAggmMgIIJjIFCAAQhgMyBQgAEIYDMgUIABCGAzIFCAAQhgM6CggAEEcQ1gQQsAM6CAgAEAgQBxAeOgUIABCABDoGCAAQBxAeOg0ILhCABBDHARCvARANSgQIQRgASgQIRhgAUKACWKsfYPElaAFwAHgCgAGIBYgBhSWSAQkyLTguMy4xLjKYAQCgAQHIAQjAAQE&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjYzZa5r-r7AhU_xjgGHWaEA2kQ_AUoAXoECAEQAw'>
              <img src="location.jpg" width="5%" height="6%"></img>Coimbatore</a>
              <br></br><img src='phone.jpg' width="5%" height="6%"></img>94424 25703
              <br></br><img src="r1.jpg" width="5%" height="6%"></img> 100 - 1500 allocation
              <br></br><img src="l1.jpg" width="5%" height="6%"></img><a href="http://www.anandhamcatering.com/"> Website</a>
              <Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly/>
              </div></div>
              </div>
              <div className='box1'>
                <div className='i'><img src="j2.jpg" width="49%" height="76%"></img>
                <div className='box2'>
                  <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                  <div className='font3'>Max Capacity - 100<br></br>Veg Price per plate - 400/-<br></br>Non Veg Price per plate - 600<br></br>Cuisines - North Indian , South Indian, Chineese</div>
                  </div></div></div></div></div>
             <br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             
  
             <br></br><br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             <br></br>
             <div className='B'>
              <div className='name'>RAJA CATERING<hr color='#825407'></hr>
              <div className='box3'><div className='font2'><a href='https://www.google.com/maps?q=raja+catering+coimbatore&rlz=1C1CHBF_enIN1005IN1005&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzILCC4QgAQQxwEQrwEyAggmMgIIJjICCCYyBQgAEIYDMgUIABCGAzoKCAAQRxDWBBCwAzoNCC4QgAQQxwEQrwEQDToFCAAQgAQ6BggAEAcQHkoECEEYAEoECEYYAFD7Ali6FmCjHWgBcAB4AIABxgaIAboakgEJMi03LjIuNi0xmAEAoAEByAEIwAEB&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjGtIbKr-r7AhUT4DgGHbrPApcQ_AUoAXoECAIQAw'>
              <img src="location.jpg" width="5%" height="6%"></img>Coimbatore</a>
              <br></br><img src='phone.jpg' width="5%" height="6%"></img>90422 63377
              <br></br><img src="r1.jpg" width="5%" height="6%"></img> 100 - 2000 allocation
              <br></br><img src="l1.jpg" width="5%" height="6%"></img><a href="https://www.rajacateringservices.com/"> Website</a>
              <Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3.5} precision={0.5} readOnly/>
              </div></div>
              </div>
              <div className='box1'>
                <div className='i'><img src="j3.jpg" width="49%" height="76%"></img>
                <div className='box2'>
                  <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                  <div className='font3'>Max Capacity - 200<br></br>Veg Price per plate - 300/-<br></br>Non Veg Price per plate - 500<br></br>Cuisines - North Indian , South Indian, Chineese</div>
                  </div></div></div></div></div>
             <br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
  
             <br></br><br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             <br></br>
             <div className='B'>
              <div className='name'>SREE GNANAMBIKA<br></br>&nbsp;&nbsp;CATERING<hr color='#825407'></hr>
              <div className='box3'><div className='font2'><a href='https://www.google.com/maps?rlz=1C1CHBF_enIN1005IN1005&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCEQoAEQCjIHCCEQoAEQCjIHCCEQoAEQCjoKCAAQRxDWBBCwAzoNCAAQRxDWBBDJAxCwAzoICAAQkgMQsAM6CwguEIAEEMcBEK8BOgIIJjoNCAAQjwEQ6gIQtAIYAToNCC4QjwEQ6gIQtAIYAToFCAAQkQI6BQgAEIAEOgsIABCABBCxAxCDAToRCC4QgwEQxwEQsQMQ0QMQgAQ6BQguEIAEOhEILhCABBCxAxCDARDHARDRAzoKCC4QxwEQrwEQQzoECAAQQzoECC4QQzoLCC4QgAQQxwEQ0QM6DQguEMcBEK8BENQCEEM6DgguEIAEELEDEMcBENEDOggIABCABBDJAzoLCC4QxwEQrwEQkQI6DgguEIMBENQCELEDEIAEOgkILhCABBANEAo6BwgAEIAEEA06CAgAEAgQHhANOgUIABCGAzoGCAAQHhANOg0ILhCABBDHARCvARANSgQIQRgASgQIRhgAUOECWKpRYMZTaAJwAHgHgAGZBIgBn2WSAQsyLTEwLjE1LjkuMpgBAKABAbABCsgBCcABAdoBBAgBGAo&q=sri+gnanambika+catering+chennai&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiPsO_dr-r7AhVU_DgGHRNUCkAQ_AUoAXoECAEQAw'>
              <img src="location.jpg" width="5%" height="6%"></img>Chennai</a>
              <br></br><img src='phone.jpg' width="5%" height="6%"></img>9042233696
              <br></br><img src="r1.jpg" width="5%" height="6%"></img>  allocation
              <br></br><img src="l1.jpg" width="5%" height="6%"></img><a href="http://www.sreegnanambikacatering.com/"> Website</a>
              <Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly/>
              </div></div>
              </div>
              <div className='box1'>
                <div className='i'><img src="j15.jpg" width="49%" height="76%"></img>
                <div className='box2'>
                  <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                  <div className='font3'>Max Capacity - 500<br></br>Veg Price per plate - 200/-<br></br>Non Veg Price per plate - 200<br></br>Cuisines - North Indian , South Indian, Chineese</div>
                  </div></div></div></div></div>
             <br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>

             <br></br><br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             <br></br>
             <div className='B'>
              <div className='name'>KASIKANNU<br></br>CATERING WORLD<hr color='#825407'></hr>
              <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/Kasikannu+Catering+World/@13.048902,80.0950732,17z/data=!3m1!4b1!4m5!3m4!1s0x3a528a7632c11469:0xc8a53dbfbbcd5780!8m2!3d13.048902!4d80.0972619'>
              <img src="location.jpg" width="5%" height="6%"></img>Chennai</a>
              <br></br><img src='phone.jpg' width="5%" height="6%"></img>9688662323
              <br></br><img src="r1.jpg" width="5%" height="6%"></img> 100 - 1500 allocation
              <br></br><img src="l1.jpg" width="5%" height="6%"></img><a href="https://kasikannucateringworld.in/"> Website</a>
              <Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3.5} precision={0.5} readOnly/>
              </div></div>
              </div>
              <div className='box1'>
                <div className='i'><img src="j5.jpg" width="49%" height="76%"></img>
                <div className='box2'>
                  <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                  <div className='font3'>Max Capacity - 100<br></br>Veg Price per plate - 400/-<br></br>Non Veg Price per plate - 600<br></br>Cuisines - North Indian , South Indian, Chineese</div>
                  </div></div></div></div></div>
             <br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             

             <br></br><br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             <br></br>
             <div className='B'>
              <div className='name'>&nbsp;HAPPY CATERING<br></br>&nbsp;&nbsp;EVENTS<hr color='#825407'></hr>
              <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/Happy+Catering+and+Events/@13.116723,80.2289926,17z/data=!3m1!4b1!4m5!3m4!1s0x3a5265ea67d94eb7:0xae2d2e9e029399c6!8m2!3d13.116723!4d80.2311813'>
              <img src="location.jpg" width="5%" height="6%"></img>Chennai</a>
              <br></br><img src='phone.jpg' width="5%" height="6%"></img>8072122425
              <br></br><img src="r1.jpg" width="5%" height="6%"></img> 100 - 1500 allocation
              <br></br><img src="l1.jpg" width="5%" height="6%"></img><a href="https://happycateringandevents.com/"> Website</a>
              <Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly/>
              </div></div>
              </div>
              <div className='box1'>
                <div className='i'><img src="j6.jpg" width="49%" height="76%"></img>
                <div className='box2'>
                  <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                  <div className='font3'>Max Capacity - 200<br></br>Veg Price per plate - 300/-<br></br>Non Veg Price per plate - 500<br></br>Cuisines - North Indian , South Indian, Chineese</div>
                  </div></div></div></div></div>
             <br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             

             <br></br><br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             <br></br>
             <div className='B'>
              <div className='name'>SRI SABARI<br></br>CATERING<hr color='#825407'></hr>
              <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/Sri+Sabari+Catering+Service/@11.3309507,77.7110144,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba96f171ad8b139:0x1a86dc5a81ae0587!8m2!3d11.3309507!4d77.7132031'>
              <img src="location.jpg" width="5%" height="6%"></img>Erode</a>
              <br></br><img src='phone.jpg' width="5%" height="6%"></img>97918 24363
              <br></br><img src="r1.jpg" width="5%" height="6%"></img> 100 - 1500 allocation
              <br></br><img src="l1.jpg" width="5%" height="6%"></img><a href="https://sri-sabari-catering-service-wedding-catering.business.site/?utm_source=gmb&utm_medium=referral"> Website</a>
              <Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3.5} precision={0.5} readOnly/>
              </div></div>
              </div>
              <div className='box1'>
                <div className='i'><img src="j7.jpg" width="49%" height="76%"></img>
                <div className='box2'>
                  <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                  <div className='font3'>Max Capacity - 500<br></br>Veg Price per plate - 200/-<br></br>Non Veg Price per plate - 200<br></br>Cuisines - North Indian , South Indian, Chineese</div>
                  </div></div></div></div></div>
             <br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             

             <br></br><br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             <br></br>
             <div className='B'>
              <div className='name'>&nbsp;THANGAM<br></br>&nbsp;&nbsp;CATERERS<hr color='#825407'></hr>
              <div className='box3'><div className='font2'><a href='https://www.google.com/maps?q=thangam+catering+erode&rlz=1C1CHBF_enIN1005IN1005&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzINCC4QgAQQxwEQrwEQDTIFCAAQhgMyBQgAEIYDOgoIABBHENYEELADOg0IABBHENYEEMkDELADOggIABCSAxCwAzoFCAAQogQ6BQgAEIAEOgYIABAHEB46BwgAEIAEEA06CAgAEAUQHhANSgQIQRgASgQIRhgAUNoBWNsdYPAfaAFwAXgAgAHSAogBmBOSAQcwLjguMy4xmAEAoAEByAEJwAEB&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi_5ML3ser7AhUe4XMBHQU4AikQ_AUoAXoECAIQAw'>
              <img src="location.jpg" width="5%" height="6%"></img>Erode</a>
              <br></br><img src='phone.jpg' width="5%" height="6%"></img>1800 121 4546
              <br></br><img src="r1.jpg" width="5%" height="6%"></img> 100 - 1500 allocation
              <br></br><img src="l1.jpg" width="5%" height="6%"></img><a href="http://www.erodethangamgroup.com/"> Website</a>
              <Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly/>
              </div></div>
              </div>
              <div className='box1'>
                <div className='i'><img src="j8.jpg" width="49%" height="76%"></img>
                <div className='box2'>
                  <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                  <div className='font3'>Max Capacity - 100<br></br>Veg Price per plate - 400/-<br></br>Non Veg Price per plate - 600<br></br>Cuisines - North Indian , South Indian, Chineese</div>
                  </div></div></div></div></div>
             <br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             

             <br></br><br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             <br></br>
             <div className='B'>
              <div className='name'>&nbsp;NSK CATERING<hr color='#825407'></hr>
              <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/Nanbargal+Samayal+Kulu+-+NSK+Catering+Services/@8.7018294,77.711505,16z/data=!4m10!1m2!2m1!1snsk+catering+tirunelveli!3m6!1s0x3b041249c7700969:0xb576e7298912d826!8m2!3d8.6995528!4d77.7155495!15sChhuc2sgY2F0ZXJpbmcgdGlydW5lbHZlbGmSARBjYXRlcmluZ19zZXJ2aWNl4AEA!16s%2Fg%2F11c2pmqbq1'>
              <img src="location.jpg" width="5%" height="6%"></img>Tirunelveli</a>
              <br></br><img src='phone.jpg' width="5%" height="6%"></img>7448888444
              <br></br><img src="r1.jpg" width="5%" height="6%"></img> 100 - 1500 allocation
              <br></br><img src="l1.jpg" width="5%" height="6%"></img><a href="http://www.nskcatering.com/"> Website</a>
              <Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3} precision={0.5} readOnly/>
              </div></div>
              </div>
              <div className='box1'>
                <div className='i'><img src="j9.jpg" width="49%" height="76%"></img>
                <div className='box2'>
                  <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                  <div className='font3'>Max Capacity - 500<br></br>Veg Price per plate - 200/-<br></br>Non Veg Price per plate - 200<br></br>Cuisines - North Indian , South Indian, Chineese</div>
                  </div></div></div></div></div>
             <br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             

             <br></br><br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             <br></br>
             <div className='B'>
              <div className='name'>CREATIVE FOODS<br></br>&nbsp;&nbsp;CATERING<hr color='#825407'></hr>
              <div className='box3'><div className='font2'><a href='https://www.google.com/maps?rlz=1C1CHBF_enIN1005IN1005&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCEQoAEQCjIHCCEQoAEQCjIHCCEQoAEQCjIHCCEQoAEQCjoKCAAQRxDWBBCwAzoGCAAQBxAeOggIABAIEAcQHjoGCAAQHhANOggIABAFEB4QDToFCAAQogQ6BwgAEB4QogQ6CgghEMMEEAoQoAE6BQghEKABOgYIABAWEB46BQgAEIYDOgQIIRAVOggIIRAWEB4QHToKCCEQFhAeEA8QHToGCCEQDRAVSgQIQRgASgQIRhgAUKcCWKZYYNJaaAFwAHgAgAGCA4gBgD-SAQkwLjIzLjE0LjKYAQCgAQHIAQjAAQE&q=creative+foods+catering+dindigul&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjNie60sur7AhU__HMBHX-dBSoQ_AUoAXoECAEQAw'>
              <img src="location.jpg" width="5%" height="6%"></img>Dindigal</a>
              <br></br><img src='phone.jpg' width="5%" height="6%"></img>87786 82827
              <br></br><img src="r1.jpg" width="5%" height="6%"></img> 100 - 1500 allocation
              <br></br><img src="l1.jpg" width="5%" height="6%"></img><a href="http://www.creativefoodcatering.in/"> Website</a>
              <Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3.5} precision={0.5} readOnly/>
              </div></div>
              </div>
              <div className='box1'>
                <div className='i'><img src="j10.jpg" width="49%" height="76%"></img>
                <div className='box2'>
                  <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                  <div className='font3'>Max Capacity - 100<br></br>Veg Price per plate - 400/-<br></br>Non Veg Price per plate - 600<br></br>Cuisines - North Indian , South Indian, Chineese</div>
                  </div></div></div></div></div>
             <br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             

             <br></br><br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             <br></br>
             <div className='B'>
              <div className='name'>&nbsp;PONEES KITCHEN<hr color='#825407'></hr>
              <div className='box3'><div className='font2'><a href='https://www.google.com/maps?q=ponees+kitchen+kanyakumari&rlz=1C1CHBF_enIN1005IN1005&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCEQoAEQCjoKCAAQRxDWBBCwAzoNCAAQRxDWBBDJAxCwAzoICAAQkgMQsAM6CgguEMcBEK8BEEM6BQgAEJECOgQIABBDOg0ILhDHARDRAxDUAhBDOgoILhDHARDRAxBDOggIABCxAxCDAToLCAAQgAQQsQMQgwE6DQgAEI8BEOoCELQCGAE6CwguEIMBELEDEIAEOggILhCABBDUAjoLCC4QgAQQsQMQ1AI6DgguEIAEELEDEIMBENQCOgUIABCABDoLCC4Q1AIQsQMQgAQ6BQguEJECOggIABCABBCxAzoNCC4QgAQQsQMQ1AIQCjoKCC4QgAQQ1AIQCjoHCAAQgAQQCjoHCC4QgAQQCjoNCC4QgAQQxwEQrwEQCjoNCAAQgAQQsQMQgwEQCjoGCAAQHhAKOggIABAFEB4QCjoGCAAQHhANOgQIIRAVSgQIQRgASgQIRhgAUKgCWI0-YI9AaAJwAHgBgAHbA4gBzjWSAQswLjEzLjE2LjAuMpgBAKABAbABCsgBB8ABAdoBBAgBGAo&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjm2OPJsur7AhUTg-YKHbRjAW0Q_AUoAXoECAEQAw'>
              <img src="location.jpg" width="5%" height="6%"></img>Kanyakumari</a>
              <br></br><img src='phone.jpg' width="5%" height="6%"></img>9790538909
              <br></br><img src="r1.jpg" width="5%" height="6%"></img> 100 - 1500 allocation
              <br></br><img src="l1.jpg" width="5%" height="6%"></img><a href="https://business.google.com/website/ponneeskitchen?utm_source=gmb&utm_medium=referral"> Website</a>
              <Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly/>
              </div></div>
              </div>
              <div className='box1'>
                <div className='i'><img src="j11.jpg" width="49%" height="76%"></img>
                <div className='box2'>
                  <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                  <div className='font3'>Max Capacity - 200<br></br>Veg Price per plate - 300/-<br></br>Non Veg Price per plate - 500<br></br>Cuisines - North Indian , South Indian, Chineese</div>
                  </div></div></div></div></div>
             <br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>

             <br></br><br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             <br></br>
             <div className='B'>
              <div className='name'>TAJ HOSPITALITY<br></br>&nbsp;&nbsp;SERVICE<hr color='#825407'></hr>
              <div className='box3'><div className='font2'><a href='https://www.google.com/maps?q=taj+hospitality+service+coimbatore&rlz=1C1CHBF_enIN1005IN1005&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCEQoAEQCjIHCCEQoAEQCjIHCCEQoAEQCjoICAAQogQQsAM6CggAEB4QogQQsAM6DQgAEI8BEOoCELQCGAE6DQguEI8BEOoCELQCGAE6BQgAEJECOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6BQgAEIAEOggIABCxAxCDAToFCC4QkQI6BAgAEEM6CAgAEIAEELEDOgsILhCABBCxAxCDAToKCC4QrwEQxwEQQzoLCC4QxwEQrwEQkQI6BwgAELEDEEM6DQguELEDEMcBENEDEEM6CwguEIAEEMcBEK8BOhQILhCABBCxAxCDARDJAxDHARCvAToRCC4QgAQQsQMQgwEQxwEQrwE6CgguEMcBEK8BEEM6FAguEIMBEK8BEMcBELEDEMkDEIAEOhEILhCDARCvARDHARCxAxCABDoOCC4QsQMQxwEQ0QMQkQI6DgguEIAEELEDEMcBEK8BOgsILhCvARDHARCABDoLCC4QgAQQxwEQ0QM6CAgAEBYQHhAPOgYIABAWEB46AggmOgUIABCGAzoICCEQFhAeEB1KBAhBGAFKBAhGGABQhgNYkF5go19oBHAAeASAAdICiAHkQJIBCTAuMjEuMTEuNpgBAKABAbABCsgBBcABAdoBBAgBGAo&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiV3-vdsur7AhUNzTgGHUhUCJ8Q_AUoAXoECAIQAw'>
              <img src="location.jpg" width="5%" height="6%"></img>Coimbatore</a>
              <br></br><img src='phone.jpg' width="5%" height="6%"></img> 96774 20616
              <br></br><img src="r1.jpg" width="5%" height="6%"></img> 100 - 1500 allocation
              <br></br><img src="l1.jpg" width="5%" height="6%"></img><a href="http://tajhospitalityservices.com/"> Website</a>
              <Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={5} precision={0.5} readOnly/>
              </div></div>
              </div>
              <div className='box1'>
                <div className='i'><img src="j12.jpg" width="49%" height="76%"></img>
                                <div className='box2'>
                  <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                  <div className='font3'>Max Capacity - 500<br></br>Veg Price per plate - 200/-<br></br>Non Veg Price per plate - 200<br></br>Cuisines - North Indian , South Indian, Chineese</div>
                  </div></div></div></div></div>
             <br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>

             <br></br><br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             <br></br>
             <div className='B'>
              <div className='name'>&nbsp;&nbsp;SRI VAISHNAVA<br></br>&nbsp;&nbsp;CATERING<hr color='#825407'></hr>
              <div className='box3'><div className='font2'><a href='https://www.google.com/maps/dir//3X2J%2B7F9+Sri+Vaishanava+Iyengar+Brahmin,+Pukuti+Thottam+Vinayaga+garden,+Chinniyampalayam+Rd,+Ganapathy+Housing+Unit,+Coimbatore,+Tamil+Nadu+641006/@11.0506594,76.9462143,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba859e36e77b64d:0xb2c8bbcb1d2633f8!2m2!1d76.981234!2d11.0506614'>
              <img src="location.jpg" width="5%" height="6%"></img>Coimbatore</a>
              <br></br><img src='phone.jpg' width="5%" height="6%"></img>90430 77158
              <br></br><img src="r1.jpg" width="5%" height="6%"></img> 100 - 1500 allocation
              <br></br><img src="l1.jpg" width="5%" height="6%"></img><a href="https://www.srivaishnavacatering.com/"> Website</a>
              <Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3.5} precision={0.5} readOnly/>
              </div></div>
              </div>
              <div className='box1'>
                <div className='i'><img src="j13.jpg" width="49%" height="76%"></img>
                <div className='box2'>
                  <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                  <div className='font3'>Max Capacity - 100<br></br>Veg Price per plate - 400/-<br></br>Non Veg Price per plate - 600<br></br>Cuisines - North Indian , South Indian, Chineese</div>
                  </div></div></div></div></div>
             <br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>

             <br></br><br></br><br></br>
             <hr color='#825407' size='2' width="90%"></hr><br></br>
             <br></br>
             <div className='B'>
              <div className='name'>SVC IYENGAR<br></br>CATERING
              <hr color='#825407'></hr>
              <div className='box3'><div className='font2'><a href='https://www.google.com/maps/search/svc+iyengar+catering+trichy/@10.5050434,77.2784769,9z/data=!3m1!4b1n'>
              <img src="location.jpg" width="5%" height="6%"></img>Trichy</a>
              <br></br><img src='phone.jpg' width="5%" height="6%"></img>94872 77158
              <br></br><img src="r1.jpg" width="5%" height="6%"></img> 100 - 1500 allocation
              <br></br><img src="l1.jpg" width="5%" height="6%"></img><a href="https://www.srivaishnavacatering.com/contact-us"> Website</a>
              <Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly/>
              </div></div>
              </div>
              <div className='box1'>
                <div className='i'><img src="j14.jpg" width="49%" height="76%"></img>
                <div className='box2'>
                  <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                  <div className='font3'>Max Capacity - 400<br></br>Veg Price per plate - 250/-<br></br>Non Veg Price per plate - 550<br></br>Cuisines - North Indian , South Indian, Chineese</div>
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
export default Catering;