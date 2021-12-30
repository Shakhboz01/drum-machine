import { useEffect, useState } from "react";
import "./com.css";
import { colors } from "./data";

const Play1=({arg,volume,power,records })=>{

        const [active,setActive]=useState(false);
        
        const math=Math.floor(Math.random()*colors.length);
        
        const playChange=(arr)=>{
        const audio=document.getElementById(arg.keyCode);
        audio.currentTime=0;
        audio.volume=volume;
        setActive(true);
        setTimeout(() => {
        setActive(false)  
        }, 200 );
        audio.play();
        records(arr);
        };
       
        const handleKeyCode=(e)=>{
        if(e.keyCode==arg.keyCode  ){
        playChange()
        }
        };

        useEffect(()=>{
        document.addEventListener("keydown",handleKeyCode);
        return ()=>{document.removeEventListener("keydown",handleKeyCode)}                
        },[]);


        return(
        <div className='patterns' 
        src={arg.keyTrigger}
        onClick={power?()=>{playChange(arg)}:()=>{}} 
        style={active ? {backgroundColor:colors[math],color:colors[math]}:{backgroundColor:"black"}}>

           <div>   
           <audio id={arg.keyCode} src={arg.url}  className={arg.keyTrigger}  />
           {arg.keyTrigger}
           </div>

        </div>
        )
};

export default Play1;