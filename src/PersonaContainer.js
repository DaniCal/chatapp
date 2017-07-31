import React, { Component } from 'react';
import './PersonaContainer.css'
import persona from './portrait.png';


class PersonaContainer extends React.Component {
  render(){
    return(
      <div className="PersonaContainer">
        <div>
          <div className="PersonaElementContainer">
            <p className="PersonaName">Edgar</p>
            <p className="PersonaAge">29 years</p>
          </div>
          <div className="PersonaImageContainer">
            <img src={persona} className="PersonaImage"/>
          </div>
        </div>
        <div>
          <p className="Title JobTitle">Job</p>
          <p className="Attribute PersonaJob">HR-Manager</p>
          <p className="Title NationalityTitle">Nationality</p>
          <p className="Attribute PersonaNationality">German</p>
        </div>
        <a className="ExportButton" href="#export" >EXPORT</a>
        
      </div>
  )};
}

export default PersonaContainer;
