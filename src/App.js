import React, { Component } from "react";
import {bankOne,colors, bankTwo} from './components/data';
import './App.css';
import Play1 from "./components/bank1";

class App extends Component{  
 
  constructor(props){
  super(props);
  this.state={
  volume:1,
  speed:0.5,
  isRecording:false,
  display:'',
  power:true,
  bankPower:true,
  };
  }


render(){
 
  const {power,bankPower,display,volume}=this.state;

    const records=(smth)=>{
    this.setState({
    display:smth.id,
    }) 
    }

      const setDisplay=(arg)=>{
      if(arg==true || volume==0){
      this.setState({
      display:"power off"
      })
      }
      else{this.setState({
      display:"power on"
      })};
      };


        const checkPower=()=>{
        this.setState({
        power:!power,
        })
        setDisplay(power)
        }

          const checkBank=(arg)=>{
          switch (arg) {
          case true:
          this.setState({display:"Piano kit"})
          break;
          case false:
          this.setState({display:"Heater kit"})
          break;
          default:
          this.setState("displaying")
          break;
          }
          };


            const changeBank=()=>{
            this.setState({
            bankPower:!bankPower
            })
            checkBank(bankPower)
            };

              const myBank=bankPower?[...bankOne]:[...bankTwo];

              const math=Math.floor(Math.random()*colors.length);

return (
<div className="text-center">

  <h1>Drum Machine</h1>

    <div style={{border:`3px solid ${colors[math]}`}} className="container text-center">

        <div className="containers text-center">

            {myBank.map(arg=>{

              return(
                  <Play1 
                  volume={volume} 
                  key={arg.keyTrigger}
                  arg={arg} 
                  records={records}
                  power={power}
                  />
              )})}


        </div>
        
              <div>

                <p>{display}</p>

                  <div className="powbtn">

                      <div className="brd">
                        <h4>Power</h4>
                          <div onClick={checkPower} className="select">

                            <div className="inner"
                            style={power?{float:"right"}
                            :{float:"left"}} />

                          </div>
                      </div>

                      <div className="brd">
                        <h4>Bank</h4>
                          <div onClick={changeBank} className="select">

                            <div className="inner"
                            style={bankPower?{float:"right"}:{float:"left"}} />
                          </div>
                      </div>


                  </div>
                  {/* </div>//powbtn */}

                        <h3>Volume</h3>

                          <input type='range'
                          step='0.01'
                          max='1'
                          min='0'
                          onChange={(e)=>this.setState({volume:e.target.value})}
                          value={volume}
                          />
              </div>

    </div> 
</div>  
)
}
}
 
export default App;
