import React, { Component} from 'react';

export default class Introduction extends Component{
    render(){
        const  divStyle = {
            opacity: '0.6',
            backgroundColor: 'rgb(76, 105, 114)'
        };
        const theDiv = {
          backgroundImage: 'url("http://img.youtube.com/vi/1oDxDzp0oNQ/maxresdefault.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          bottom: '0',
          left: '0',
          overflow: 'hidden',
          position: 'absolute',
          right:'0',
          top: '0'
        };
        return (
          <section className="mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--full-height mbr-section--bg-adapted mbr-after-navbar" id="header1-40" data-bg-video="https://www.youtube.com/watch?v=1oDxDzp0oNQ&feature=youtu.be">
              <div className="mbr-box__magnet mbr-box__magnet--sm-padding mbr-box__magnet--center-left">
                  <div className="mbr-overlay" style={divStyle}></div>
                  <div style={theDiv}></div>
                  <div className="mbr-box__container mbr-section__container container">
                      <div className="mbr-box mbr-box--stretched"><div className="mbr-box__magnet mbr-box__magnet--center-left">
                          <div className="row"><div className=" col-sm-6">
                              <div className="mbr-hero animated fadeInUp">
                                  <h1 className="mbr-hero__text">DARKNESS CARESS</h1>
                                  <p className="mbr-hero__subtext">Wellcome to Darkness Caress a world-wide well-known on-line game (oh yeah!)<br /></p>
                              </div>
                              <div className="mbr-buttons btn-inverse mbr-buttons--left">
                                  <a className="mbr-buttons__btn btn btn-lg animated fadeInUp delay btn-warning" href="#">PLAY</a>
                              </div>
                          </div></div>
                      </div></div>
                  </div>
                  <div className="mbr-arrow mbr-arrow--floating text-center">
                      <div className="mbr-section__container container">
                          <a className="mbr-arrow__link" href="#features1-47"><i className="glyphicon glyphicon-menu-down"></i></a>
                      </div>
                  </div>
              </div>
          </section>
        );
      }
    }
