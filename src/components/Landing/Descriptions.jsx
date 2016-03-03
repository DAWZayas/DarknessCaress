import React, { Component } from 'react';
import Description from './Description';


export default class Descriptions extends Component{
    render(){
        const  SectionStyle = {
            backgroundColor: 'rgb(239, 239, 239)'
        };
        const h2Style = {
          fontFamily: 'Oxygen, sans-serif',
          fontSize: '24px',
          marginLeft: '15%'
        };
        return (
<section className="content-2 col-3" id="features1-47" style={SectionStyle}>
    <div className="container">
        <div className="row">
          <h3 style= {h2Style} >Desarrollado por :</h3>
            <Description title="Carlos Ballesteros" text="The OverPower Mage" src="https://lh3.googleusercontent.com/-sMC7zaRZA6o/AAAAAAAAAAI/AAAAAAAAADo/RLQ-X76Cxqc/s60-p-rw-no/photo.jpg" />
            <Description title="Alberto Mata" text="The Greatest Support Evah" src="https://lh3.googleusercontent.com/-DHqkLZecops/AAAAAAAAAAI/AAAAAAAAIFc/6R3XeceaRoQ/s60-p-rw-no/photo.jpg"/>
            <Description title="Alejandro Sanchez" text="The Carry Master " src="https://lh3.googleusercontent.com/-9LoUj1_pOvg/AAAAAAAAAAI/AAAAAAAAAEM/H3APBxHDAUQ/s60-p-rw-no/photo.jpg" />
        </div>
    </div>
</section>
    );
  }
}
