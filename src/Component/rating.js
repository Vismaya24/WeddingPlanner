import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}




import React from 'react'
import { useState,useEffect } from 'react'


 const FirstEffect = () => {

   const [count, setCount] = useState(0)

   useEffect(()=>{
    document.title= "clicked me "+count
   })

   
  return (
    <div>
     <h1>number of clicks{count}</h1>
    <button onClick={()=>setCount(count+1)}>CLICK</button>
    </div>
  )
}

export default FirstEffect;
life cycle of class components mounting example
sathya ssp10:33 AM
import React from "react";
import { Component } from "react";

class FirstMount extends Component{

constructor(props){
    super(props)
    this.state={name:'sathya'}
    console.log("constructor called")
}
componentDidMount() {  
    console.log('Component Did MOUNT!')  
 } 
 render(){
    return(
        console.log("i am render")
    )
 }

}
export default FirstMount;
sathya ssp10:39 AM
ex 1:
import React ,{Component}from "react";

class NestEx extends Component{
    render(){
        return(
            <div>
                 <h3>to wrap many elements we need to wrap it together
                       we can use div container
                 </h3>
                 <h4>nested in the sense many eleemnts we can use in the div tag</h4>
                 <h5>wrapping all the elemnts together like in a  container</h5>
            </div>
        );
    }
}

export default NestEx;
ex2:
import React ,{Component}from "react";

class AtributeEx extends Component{
    render(){
        return(
    <div>
     <h4>Basically attribute we are using HTML also,injsx we can use camelcase. </h4>
    <h4>for custom attributes in jsx we can use different format: data-prefix</h4>
    <h5>************jsx custom attribute**********</h5>
    <p data-hello="demo"> welcome to custom attribute in jsx</p>
    </div>
        );
    }
}
export default AtributeEx;
ex3:
import React,{Component} from "react";

class StringAttri extends Component{

    render(){
        return(
            <div>
                <p className="hello">By using String litteral Attribute</p>
                <p data-demoAttribute="demo">by custome attributes</p>
            </div>
        );
    }
}
export default StringAttri;
ex4:
import React,{Component} from "react";

class ExpressionAttri extends Component{
   render(){
    return(
        <div>
            <h2>By using Expression Attributes</h2>
            <h4 className="hello">{56+10}</h4>
        </div>
    );
   }
}
export default ExpressionAttri;
sathya ssp10:40 AM
ex 5:
class BlockAttri extends Component{

    render(){
const my=<ul>
            <li>java</li>
            <li>python</li>
            <li>.Net</li>
        </ul>
    
const myStyle={

    color:'red'
}
        return(
                 <div>
            <h2 style={myStyle}>block of large code by using variable</h2>
            <h3>{my}</h3>
           
            </div>
        );
    }

}

export default BlockAttri;
ex 6:
import React,{Component} from "react";

class IfEx extends Component{
    render(){
        var i=5;
        return(  
              <div>
                   <h1>{i==3?'true':'false'}</h1>
              </div>
        );
    }
}
export default IfEx;
ex 7:
import React,{Component} from "react";

class IfEx1 extends Component{
    render(){
        const x=3;        
        let text="good bye";
        if(x<5){
            text="welcome";
        }
//const my=<h2>{text}</h2>
         return(
            <div>
         <h1>{text}</h1>
            </div>
         );
    }
}
export default IfEx1;
ex 8:
import React,{Component} from "react";

//class without parent(div) element
class ClassEx extends Component{

    render(){

        return <h2>Hello i am class component(if 
            you want use more than one element in the class compoennt you need to cretae parent elemnt)</h2>
                   
    }
}
export default ClassEx;
sathya ssp10:42 AM
ex 9:
import React,{Component} from "react";

//with parent(div) element
class ClassEx1 extends Component{
    
      render(){
        return(
            <div>
                <h2>by using parent elemnt"div"</h2>
                <h3>by using parent elemnt we can write any number of lines</h3>
            </div>
        );

      }
}
export default ClassEx1;
ex 10:
import React from "react";

function Greet(props){
    console.log(props);
    return(
        <div>
<h1>Hello welcome {props.name}  hmm {props.heroName}</h1>
     {props.children}  
     </div>
    )
    
}
export default Greet;
ex 11:
import React,{Component} from "react";

class PropsByClass extends Component{

    render(){
        return(
<div>
        <h2>Hello welcome {this.props.name}</h2>
</div>

        );
    }

}
export default PropsByClass;
sathya ssp10:43 AM
ex 12:
import React,{Component} from "react";

class ExpenceByClass extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                 <div><b>Name of Customer :</b><em>{this.props.name}</em></div>
                 <div><b>Customer Amount :</b><em>{this.props.amount}</em></div>
                 <div><b>Entry Date :</b><em></em>{this.props.cusdate.toString()}</div>
<div><b>Customer Category :</b><em>{this.props.category}</em></div>
            </div>
        );
    }
}
export default ExpenceByClass;
App.js:====>
sathya ssp10:44 AM
// <ExpenceByClass
    
//     name="Divya soma" 
//     amount="90000" 
//     cusdate={new Date("2022-10-12")}
//     category="employee fund"
 
//  ></ExpenceByClass>
ex 13:
const ExpenseEntryItem =(props) =>{

return(
    <div>
        <div className="hel"><b>Name: </b><em>{props.name}</em></div>
        <div><b>Amount: </b><em>{props.amount}</em></div>
        <div className="hel"><b>SpendDate: </b><em>{props.spendDate.toString()}</em></div>
        <div><b>Category: </b><em>{props.Category}</em></div>
    </div>
);

}
export default ExpenseEntryItem;
App.js file:
------------



// <ExpenseEntryItem
// name="sathya" amount="6788" spendDate={new Date("2020-12-23")} Category="food"
// ></ExpenseEntryItem>
ex 14:===>
import React from "react";
import { useState } from "react";

//we need to import useState method thenonly it will allow
function UseStateEx(){

const [name, setName] = useState("sathya");

return(
    <div>
        Your Name is:{name} <br/>
        <button onClick={()=>setName("prakash")}>click me</button>
    </div>
);

}
export default UseStateEx;