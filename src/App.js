import React, { Component } from "react";
import { Navbar, NavItem, Row, Card, CardTitle, Col } from "react-materialize";
import colors from './colors';
import dapps from './dapps'
import logo from "./logo.png";
import "./App.css";






class App extends Component {
  renderDapps(){
    return dapps.map(function(dapps){
      return( <Col l={4} m={6} s={12}>
                <Card className='medium'
                  header={<CardTitle image={dapps.image}></CardTitle>}
                  actions={[<a href={dapps.url} target="_blank">{dapps.urlText}</a>]}>
                  <h5>{dapps.name}</h5>
                  {dapps.description}
                </Card>
              </Col>)
    })
  }
  

  render() {
    return (
      <div className="App">
        <Row>
          <Col m={12}>
            {/* <Navbar brand="" className="kitty-nav" right style={{backgroundColor : colors.orange}}>
              <NavItem onClick={() => console.log("test click")} style={{color : colors.black}}>
                Send in your DAPP
              </NavItem>
              <NavItem href="components.html" style={{color : colors.black}}>About</NavItem>
            </Navbar> */}
            <img src={logo}  alt="logo" style={{maxWidth: '100%', marginTop : '10px'}} />
          </Col>
        </Row>
        <Row>
          {this.renderDapps()}
        </Row>
        <Row>
          <Col s={12}>
            <a className="typeform-share button" 
                href="https://mariemarie.typeform.com/to/BaHspY" 
                data-mode="popup" 
                style={{
                      display:"inline-block",
                      textDecoration:"none",
                      backgroundColor: colors.blue4,
                      color:"white",
                      cursor:"pointer",
                      fontFamily:"Helvetica",
                      fontSize:"20px",
                      lineHeight:"50px",
                      textAlign:"center",
                      margin:"0",
                      height:"50px",
                      padding:"0px 33px",
                      borderRadius:"25px",
                      maxWidth:"100%",
                      whiteSpace:"nowrap",
                      overflow:"hidden",
                      textOverflow:"ellipsis",
                      fontWeight:"bold",
                    }} 
                    target="_blank">
                Send us your Crypto Kitty App 
            </a> 
            {(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()} 
          </Col> 
           <h3> <a style={{fontFamily : "Montserrat", padding : '10px', color : colors.orange4, fontSize: "36px", fontWeight: "bold"}} href="https://weekendcoders.us15.list-manage.com/subscribe?u=5f993461ddc3fb26d21baa2e0&id=7b26b473da" target="_blank"> Sign up to our mailing list </a> </h3>           
        </Row>
      </div>
    );
  }
}

export default App;
