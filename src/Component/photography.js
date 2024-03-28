import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import './styling.css';
import NavBars from "./NavBar";
import { FormatUnderlined } from '@mui/icons-material';
import { padding } from '@mui/system';
class Photography extends React.Component {
  
  render(){
    const myStyle1={
      backgroundImage:
      "url('pic.jpg')",
            height: '500px',
            width:'1519px',
            marginTop:'10px',
            marginBottom:'10px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
    }
    
    return(
          <div>
            <div>
        
            <div><video autoPlay  muted id='video' width={"100%"} height={"50%"}><source src="Eternal.mp4" type="video/mp4"></source></video></div>
  
            <div className="line"><h4>P H O T O G R A P H Y
             <br></br> <img src="u1.jpg" alt="" width="20%" height="9%"></img>
            </h4></div>
            <div><center><img src='QuotesP3.jpg' alt="" height="70px" width="1000px"></img></center></div>
            
            
            <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&nbsp;&nbsp;CANDID RED <br></br>&emsp;&nbsp;STUDIOS<hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/Candid+Red+Studios/@12.9230177,80.1528158,15z/data=!4m5!3m4!1s0x0:0x5beafd2fef0ef650!8m2!3d12.9230177!4d80.1528158'>
            <img src="location.png" width="5%" height="6%"></img>Sembakkam, Chennai</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>91761 96761
            <br></br><img src="rupee.png" width="5%" height="6%"></img> 40000 -  85000 per day
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://www.candidred.com/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="pg1.jpg" width="51%" height="81%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>Albums - 10000/- per day<br></br>Candid Photography - 10000/- per day<br></br>Cinematography - 16000/- per day<br></br>Photo Package - 40000/- per day<br></br>Photo + Video - 85000/- per day</div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&nbsp;&emsp;&emsp;KNOT<br></br> PHOTOGRAPHY <hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/KNOT+PHOTOGRAPHY/@11.0177354,76.9540862,15z/data=!4m5!3m4!1s0x0:0xcb42af63763229ed!8m2!3d11.0177354!4d76.9540862'>
            <img src="location.png" width="5%" height="6%"></img>Mettupalyam Rd, Coimbatore</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>9894467890
            <br></br><img src="rupee.png" width="5%" height="6%"></img> 25000 - 45000 per day
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://knotphotography.in/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="pg2.jpg" width="50%" height="96%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>Albums - 10000/- per pages<br></br>Candid Photography - 25000/- per day<br></br>Cinematography - 25000/- per day<br></br>Studio Photography - 20000/- per day<br></br>Photo + Video - 70000/- per day<br></br>Photo Package - 45000/- per day</div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&emsp;&emsp;&emsp;AK<br></br> PHOTOGRAPHY <hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/A+K+PHOTOGRAPHY/@10.9963572,76.9466457,15z/data=!4m2!3m1!1s0x0:0x8d5d9627b2e34284?sa=X&ved=2ahUKEwiNuuftv-f7AhUUTGwGHcz1BuMQ_BJ6BQiHARAI'>
            <img src="location.png" width="5%" height="6%"></img>Coimbatore</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>99944 37724
            <br></br><img src="rupee.png" width="5%" height="6%"></img>15,000 - 21,000 per day
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://akphotographyarun.com/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3.5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="pg3.jpg" width="50%" height="95%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>Studio Photography - 10000/- per day<br></br>Candid Photography - 1200/- per day<br></br>Albums - 8000/- per day<br></br>Traditional Videography - 10000/- per day<br></br>Cinematography - 10000/- per day<br></br>Budget(Photo + video) - 21000/- per day<br></br> Delivery Time - 7 weeks</div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           
           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&emsp;&emsp;&nbsp;IRICH<br></br> PHOTOGRAPHY <hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/Irich+Photography/@11.019577,76.9659525,15z/data=!4m5!3m4!1s0x0:0xbeab1cb2d042368d!8m2!3d11.019577!4d76.9659525'>
            <img src="location.png" width="5%" height="6%"></img>Gandipuram, Coimbatore</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>99948 12106
            <br></br><img src="rupee.png" width="5%" height="6%"></img>30,000 - 50,000 per day
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://irichphotography.com/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="pg4.jpg" width="49%" height="60%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>Candid Photography - 25000/- per day<br></br>Albums - 40000 per pages<br></br>Cinematography - 40000/- per day<br></br>Studio Photography - 18000/- per day<br></br>Photo Package - 30000/- per day<br></br>Photo + Video - 50000/- per day</div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'> &nbsp;ZERO GRAVITY <hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/Zero+Gravity+Photography/@10.9961755,76.9797872,15z/data=!4m5!3m4!1s0x0:0x921b951b520e36bd!8m2!3d10.9961755!4d76.9797872'>
            <img src="location.png" width="5%" height="6%"></img>Coimbatore</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>9840767566
            <br></br><img src="rupee.png" width="5%" height="6%"></img> 40000 -  85000 per day
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://zerogravity.photography/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="pg5.jpg" width="51%" height="47%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>Albums - 10000/- per day<br></br>Candid Photography - 10000/- per day<br></br>Cinematography - 16000/- per day<br></br>Photo Package - 40000/- per day<br></br>Photo + Video - 85000/- per day</div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>

          <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'> &nbsp;iGLOW STUDIO <hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/iGlow+Studioz+%7C+Premium+wedding+photographers+in+chennai/@12.9254629,80.1088846,15z/data=!4m5!3m4!1s0x0:0xdd798657a6872c8e!8m2!3d12.9254629!4d80.1088846'>
            <img src="location.png" width="5%" height="6%"></img>Chennai</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>9500122240
            <br></br><img src="rupee.png" width="5%" height="6%"></img> 25000 - 45000 per day
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://www.iglowstudioz.com/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="pg6.jpg" width="49%" height="76%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>Studio Photography - 10000/- per day<br></br>Candid Photography - 1200/- per day<br></br>Albums - 8000/- per day<br></br>Traditional Videography - 10000/- per day<br></br>Cinematography - 10000/- per day<br></br>Budget(Photo + video) - 21000/- per day<br></br> Delivery Time - 7 weeks</div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           
           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'> &nbsp;FILM ADDICTS <hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/search?q=filmaddicts+photography+tirunelveli&rlz=1C1CHBF_enIN1004IN1004&tbm=lcl&sxsrf=ALiCzsaHerU462f9mqcoQatKiDZRL9cjcw%3A1670509206361&ei=lvKRY7bGFYjOseMP0JmLqAU&ved=0ahUKEwi26drem-r7AhUIZ2wGHdDMAlUQ4dUDCAk&uact=5&oq=filmaddicts+photography+tirunelveli&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMyBQgAEIAEMgUIABCGAzoECCMQJzoKCAAQgAQQhwIQFDoGCAAQFhAeOgQIABBDOgIIJlDOAViGHmCKIGgAcAB4AIABuQSIAbUYkgELMC41LjQuMC4yLjGYAQCgAQHAAQE&sclient=gws-wiz-local'>
            <img src="location.png" width="5%" height="6%"></img>Tirunelveli</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>91711 11551
            <br></br><img src="rupee.png" width="5%" height="6%"></img>40000 -  85000 per day
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://www.filmaddictstirunelveli.in/best-wedding-photographers-in-tirunelveli-filmaddicts.php"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="pg7.jpg" width="49%" height="65%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>Albums - 10000/- per pages<br></br>Candid Photography - 25000/- per day<br></br>Cinematography - 25000/- per day<br></br>Studio Photography - 20000/- per day<br></br>Photo + Video - 70000/- per day<br></br>Photo Package - 45000/- per day</div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
            

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&nbsp; INCREDIBLE<br></br>PHOTOGRAPHY <hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/Incredible+Photography+-+Best+Candid+Wedding+Photographers+in+Madurai/@9.9189157,78.1309628,15z/data=!4m2!3m1!1s0x0:0xc7e74640dc87cd88?sa=X&ved=2ahUKEwjk8LORner7AhXASWwGHZrjBswQ_BJ6BAh8EAg'>
            <img src="location.png" width="5%" height="6%"></img>Madurai</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>9080500131
            <br></br><img src="rupee.png" width="5%" height="6%"></img> 15,000 - 21,000 per day
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://incrediblephotography.in/ip/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="pg8.jpg" width="46%" height="70%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>Albums - 10000/- per day<br></br>Candid Photography - 10000/- per day<br></br>Cinematography - 16000/- per day<br></br>Photo Package - 40000/- per day<br></br>Photo + Video - 85000/- per day</div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&nbsp;&emsp;MARISON<br></br>PHOTOGRAPHY <hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/Marison+Photography+%7C+Candid+Wedding+Photography+in+Madurai/@9.9407207,78.1247383,15z/data=!4m5!3m4!1s0x0:0x1b20c03a40af44cd!8m2!3d9.9407207!4d78.1247383'>
            <img src="location.png" width="5%" height="6%"></img>Madurai</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>8870237714
            <br></br><img src="rupee.png" width="5%" height="6%"></img> 25000 - 45000 per day
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://marisonphotography.in"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="pg9.jpg" width="49%" height="70%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>Candid Photography - 25000/- per day<br></br>Albums - 40000 per pages<br></br>Cinematography - 40000/- per day<br></br>Studio Photography - 18000/- per day<br></br>Photo Package - 30000/- per day<br></br>Photo + Video - 50000/- per day</div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>


           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&nbsp;&emsp;CAPTURE<br></br>PHOTOGRAPHY <hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/Capture+Photography/@11.3310676,77.6999367,15z/data=!4m5!3m4!1s0x0:0x6341e61450be41b0!8m2!3d11.3310676!4d77.6999367'>
            <img src="location.png" width="5%" height="6%"></img>Erode</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>8667752450
            <br></br><img src="rupee.png" width="5%" height="6%"></img> 40000 -  85000 per day
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://capturephoto.in/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="pg10.jpg" width="49%" height="74%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>Studio Photography - 10000/- per day<br></br>Candid Photography - 1200/- per day<br></br>Albums - 8000/- per day<br></br>Traditional Videography - 10000/- per day<br></br>Cinematography - 10000/- per day<br></br>Budget(Photo + video) - 21000/- per day<br></br> Delivery Time - 7 weeks</div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>


           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&nbsp;VIVID CLICKZZ<br></br>&emsp;&emsp;STUDIO <hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href=''>
            <img src="location.png" width="5%" height="6%"></img>Erode</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>9789732019
            <br></br><img src="rupee.png" width="5%" height="6%"></img>15,000 - 21,000 per day
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://vivid-clickzz-studio.business.site/?utm_source=googlemybusiness&utm_medium=referral"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="pg11.jpg" width="50%" height="81%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>Albums - 10000/- per pages<br></br>Candid Photography - 25000/- per day<br></br>Cinematography - 25000/- per day<br></br>Studio Photography - 20000/- per day<br></br>Photo + Video - 70000/- per day<br></br>Photo Package - 45000/- per day</div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&emsp;THIRD EYE <hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/Third+Eye+Photography/@11.0287105,76.9513527,15z/data=!4m5!3m4!1s0x0:0xe72f0b0f0e577ab6!8m2!3d11.0287105!4d76.9513527'>
            <img src="location.png" width="5%" height="6%"></img>Coimbatore</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>8015889918
            <br></br><img src="rupee.png" width="5%" height="6%"></img> 40000 -  85000 per day
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://www.thirdeyephotographycbe.com/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="pg12.jpg" width="47%" height="76%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>Albums - 10000/- per day<br></br>Candid Photography - 10000/- per day<br></br>Cinematography - 16000/- per day<br></br>Photo Package - 40000/- per day<br></br>Photo + Video - 85000/- per day</div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&emsp;CREATION<br></br> FRAMEMAKERS <hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/Creation+Frame+Makers+Wedding+Chennai+%7C+Best+Wedding+Photographers+in+Chennai/@13.0825155,80.2695656,15z/data=!4m5!3m4!1s0x0:0x3f2db3f8ecb26c5!8m2!3d13.0825155!4d80.2695656'>
            <img src="location.png" width="5%" height="6%"></img>Chennai</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>9447126219
            <br></br><img src="rupee.png" width="5%" height="6%"></img> 15,000 - 21,000 per day
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://www.creationframemakers.com/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="pg13.jpg" width="48%" height="74%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>Candid Photography - 25000/- per day<br></br>Albums - 40000 per pages<br></br>Cinematography - 40000/- per day<br></br>Studio Photography - 18000/- per day<br></br>Photo Package - 30000/- per day<br></br>Photo + Video - 50000/- per day</div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&emsp;&nbsp;PIXEL<br></br> FOTOGRAPHY<hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/Pixel+Fotography+%7C+Best+Candid+Photographer+in+Chennai/@13.0956707,80.2071271,15z/data=!4m2!3m1!1s0x0:0xf29ce9477d1f215a?sa=X&ved=2ahUKEwj228zBour7AhXIyDgGHYuOD-sQ_BJ6BAhpEAg'>
            <img src="location.png" width="5%" height="6%"></img>Chennai</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>9566006030
            <br></br><img src="rupee.png" width="5%" height="6%"></img> 15,000 - 25,000 per day
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://www.pixelfotography.com/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3.5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="pg14.jpg" width="50%" height="78%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>Albums - 10000/- per day<br></br>Candid Photography - 10000/- per day<br></br>Cinematography - 16000/- per day<br></br>Photo Package - 40000/- per day<br></br>Photo + Video - 85000/- per day</div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>


           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>&nbsp;WED ENGAGE<hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/WedEngage%C2%AE+%7C+Best+Candid+Wedding+Photographers+in+India/@13.0910195,80.2104933,15z/data=!4m2!3m1!1s0x0:0xf06e91023eb33f0?sa=X&ved=2ahUKEwi6xKuGo-r7AhVR8DgGHZ3fC50Q_BJ6BAhmEAg'>
            <img src="location.png" width="5%" height="6%"></img>Chennai</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>9566006030
            <br></br><img src="rupee.png" width="5%" height="6%"></img> 25000 - 45000 per day
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://wedengage.com/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="pg15.jpg" width="49%" height="76%"></img>
              <div className='box2'>
                <div className="font1"><center>D E T A I L S<hr color='#825407' size="1"></hr></center>
                <div className='font3'>Albums - 10000/- per pages<br></br>Candid Photography - 25000/- per day<br></br>Cinematography - 25000/- per day<br></br>Studio Photography - 20000/- per day<br></br>Photo + Video - 70000/- per day<br></br>Photo Package - 45000/- per day</div>
                </div></div></div></div></div>
           <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>

           <br></br><br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
           <div className='B'>
            <div className='name'>WED ENGAGE<hr color='#825407'></hr>
            <div className='box3'><div className='font2'><a href='https://www.google.com/maps/place/WedEngage%C2%AE+%7C+Best+Candid+Wedding+Photographers+in+India/@13.0910195,80.2104933,15z/data=!4m2!3m1!1s0x0:0xf06e91023eb33f0?sa=X&ved=2ahUKEwi6xKuGo-r7AhVR8DgGHZ3fC50Q_BJ6BAhmEAg'>
            <img src="location.png" width="5%" height="6%"></img>Chennai</a>
            <br></br><img src='phone.png' width="5%" height="6%"></img>9566006030
            <br></br><img src="rupee.png" width="5%" height="6%"></img> 15,000 - 21,000 per day
            <br></br><img src="web2.jpg" width="5%" height="6%"></img><a href="https://wedengage.com/"> Website</a>
            <br></br><Typography component="legend"></Typography>Rating: <Rating name="half-rating" defaultValue={3.5} precision={0.5} readOnly/></div></div>
            </div>
            <div className='box1'>
              <div className='i'><img src="pg15.jpg" width="49%" height="76%"></img>
              &emsp;<div className='font4'>Add Your Review
                <form>
                  <textarea placeholder="Add Your Review"></textarea>
                  <center><button class="button1">Submit</button></center>
                </form>
                </div>
             </div></div></div>
             <br></br><br></br>
           <hr color='#825407' size='2' width="90%"></hr><br></br>
           <br></br>
      <hr></hr>
      </div>
     
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
    )
  }
}
export default Photography;