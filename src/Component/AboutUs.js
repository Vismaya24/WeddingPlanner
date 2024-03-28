import React from 'react';
import NavBars from './NavBar';
import './styling3.css';
class AboutUs extends React.Component {
    render()
    {
        const myStyle1={
            backgroundImage:
            "url('sv.jpg')",
                  height: '735px',
                  width:'1519px',
                  marginTop:'10px',
                  marginBottom:'10px',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  
          }
     return(
            <div>
                <br></br><br></br><br></br><br></br>
                <div style={myStyle1}>
                    <div className='f4'><br></br><br></br><br></br><br></br>
                    ETERNAL help in organizing the wedding right from the word Go. Being the most 
        special day in your life, it is essential to be careful while hiring them. Where earlier, family 
        members used to divide responsibilities and provide support for the bride and groom today’s hectic
         lifestyles have done away with this practice and left lesser time for anyone to be involved intricately 
         in planning a home wedding. Thus, most people opt for experts who can take care of everything from your wedding 
         guest list to your vendor contact list to wedding day timeline. ETERNAL suggests you the famous wedding planners 
         who become your eyes, ears and hands to executing your most beautiful day into an equally beautiful memory. 
</div>
                </div>
                
    
                    <div className='f1'><center>Write to Us!</center></div>
                    <div className='f2'><center>We would love to hear from you!</center><br></br><br></br></div>
                    <br></br><br></br><br></br><br></br>   
                 <div className='BOX1'>
                    <div className='f2'> <br></br><br></br>Contact us directly by filling this form</div>
                    <form>
                      
                    <div className='f3'>
                        
                        <br></br>Enter Your Details<br></br><br></br>
                        <input className="input1" type="text" placeholder='*Your Name' width="50px" height="10px"/><br></br><br></br>
                        <input className="input1" type="text" placeholder='*Your Phone'/><br></br><br></br>
                        <input className="input1" type="text" placeholder='*Your Email'/><br></br><br></br>
                        <input className="input1" type="text" placeholder='*Tell Us More '/>
                        <br></br><br></br>
                        <center><button class="button1">Submit</button></center>
                    </div>
                    </form>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <img src="b12.jpg" width="700px" height="450px"></img>
                 </div>
                <NavBars/>
            </div>
    )
}
}
export default AboutUs;