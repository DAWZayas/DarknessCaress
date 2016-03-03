import React, { Component, PropTypes } from 'react';


export default class Description extends Component{
    render(){
            const {title, text, src} = this.props;
        return (
            <div>
                <div className="thumbnail">
                    <div className="image"><img className="undefined" src={src} /></div>
                    <div className="caption">
                        <div>
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </div> 


    );
  }
}
Description.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string
};