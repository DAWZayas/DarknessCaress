import React, { Component } from 'react';



export default class Slide extends Component{
  render(){
        const  SectionStyle = {
          backgroundImage: "url('http://media.boingboing.net/wp-content/uploads/2015/04/kakariko.jpg')"
        };
        const  DivStyle = {
            opacity: '0.5',
            backgroundColor: 'rgb(0, 168, 133)'
        };

    return (
      <section className="mbr-slider mbr-section mbr-section--no-padding carousel slide mbr-parallax-background" data-ride="carousel" data-wrap="true" data-interval="5000" id="slider-38" style={SectionStyle}>
          <div className="mbr-overlay" style={DivStyle}></div>
          <div className="mbr-section__container">
              <div>
                  <ol className="carousel-indicators">
                      <li data-app-prevent-settings="" data-target="#slider-38" className="active" data-slide-to="0"></li><li data-app-prevent-settings="" data-target="#slider-38" data-slide-to="1"></li><li data-app-prevent-settings="" data-target="#slider-38" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                      <div className="mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--bg-adapted item dark center mbr-section--full-height active">
                          <div className="mbr-box__magnet mbr-box__magnet--sm-padding mbr-after-navbar">
                              <div className=" container">
                                  <div className="row">
                                      <div className="mbr-box mbr-box--fixed mbr-box--adapted">
                                          <div className="mbr-box__magnet mbr-box__magnet--top-right mbr-section__left col-sm-6">
                                              <figure className="mbr-figure mbr-figure--adapted mbr-figure--caption-inside-bottom mbr-figure--full-width"><img className="mbr-figure__img" src="http://vignette1.wikia.nocookie.net/zelda/images/0/07/Link_en_TP2.png/revision/latest?cb=20121015150830&path-prefix=es" /></figure>
                                          </div>
                                          <div className="mbr-box__magnet mbr-class-mbr-box__magnet--center-left col-sm-6 mbr-section__right">
                                              <div className="mbr-section__container mbr-section__container--middle">
                                                  <div className="mbr-header mbr-header--auto-align mbr-header--wysiwyg">
                                                      <h3 className="mbr-header__text">Link</h3>

                                                  </div>
                                              </div>
                                              <div className="mbr-section__container mbr-section__container--middle">
                                                  <div className="mbr-article mbr-article--auto-align mbr-article--wysiwyg"><p>Overpower champ if you buy it you will see...</p></div>
                                              </div>

                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--bg-adapted item dark center mbr-section--full-height">
                          <div className="mbr-box__magnet mbr-box__magnet--sm-padding mbr-after-navbar">
                              <div className=" container">
                                  <div className="row">
                                      <div className="mbr-box mbr-box--fixed mbr-box--adapted">
                                          <div className="mbr-box__magnet mbr-box__magnet--top-right mbr-section__left col-sm-6">
                                              <figure className="mbr-figure mbr-figure--adapted mbr-figure--caption-inside-bottom mbr-figure--full-width"><img className="mbr-figure__img" src="http://vignette1.wikia.nocookie.net/metroid/images/b/be/Samus_smash_render.png/revision/latest?cb=20140707011836" /></figure>
                                          </div>
                                          <div className="mbr-box__magnet mbr-class-mbr-box__magnet--center-left col-sm-6 mbr-section__right">
                                              <div className="mbr-section__container mbr-section__container--middle">
                                                  <div className="mbr-header mbr-header--auto-align mbr-header--wysiwyg">
                                                      <h3 className="mbr-header__text">Samus</h3>

                                                  </div>
                                              </div>
                                              <div className="mbr-section__container mbr-section__container--middle">
                                                  <div className="mbr-article mbr-article--auto-align mbr-article--wysiwyg"><p>a range hero be careful with her bombs</p></div>
                                              </div>

                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--bg-adapted item dark center mbr-section--full-height">
                          <div className="mbr-box__magnet mbr-box__magnet--sm-padding mbr-after-navbar">
                              <div className=" container">
                                  <div className="row">
                                      <div className="mbr-box mbr-box--fixed mbr-box--adapted">
                                          <div className="mbr-box__magnet mbr-box__magnet--top-right mbr-section__left col-sm-6">
                                              <figure className="mbr-figure mbr-figure--adapted mbr-figure--caption-inside-bottom mbr-figure--full-width"><img className="mbr-figure__img" src="http://vignette3.wikia.nocookie.net/nintendo/images/d/d7/WiiU_HyruleWarriors_Midna.png/revision/20140624000645?path-prefix=en" /></figure>
                                          </div>
                                          <div className="mbr-box__magnet mbr-class-mbr-box__magnet--center-left col-sm-6 mbr-section__right">
                                              <div className="mbr-section__container mbr-section__container--middle">
                                                  <div className="mbr-header mbr-header--auto-align mbr-header--wysiwyg">
                                                      <h3 className="mbr-header__text">Midna</h3>

                                                  </div>
                                              </div>
                                              <div className="mbr-section__container mbr-section__container--middle">
                                                  <div className="mbr-article mbr-article--auto-align mbr-article--wysiwyg"><p>a siniester hero, good friend of Link</p></div>
                                              </div>

                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <a data-app-prevent-settings="" className="left carousel-control" role="button" data-slide="prev" href="#slider-38">
                      <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                  </a>
                  <a data-app-prevent-settings="" className="right carousel-control" role="button" data-slide="next" href="#slider-38">
                      <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                  </a>
              </div>
          </div>
      </section>

    );
  }

}
