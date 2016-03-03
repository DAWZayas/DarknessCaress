import React, { Component, PropTypes } from 'react';


export default class SlideElement extends Component{
    render(){
            const {title, text, src} = this.props;
        return (
          <div className="mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--bg-adapted item dark center mbr-section--full-height">
            <div className="mbr-box__magnet mbr-box__magnet--sm-padding mbr-after-navbar">
                <div className=" container">
                    <div className="row">
                        <div className="mbr-box mbr-box--fixed mbr-box--adapted">
                            <div className="mbr-box__magnet mbr-box__magnet--top-right mbr-section__left col-sm-6">
                                <figure className="mbr-figure mbr-figure--adapted mbr-figure--caption-inside-bottom mbr-figure--full-width"><img className="mbr-figure__img" src={src} /></figure>
                            </div>
                            <div className="mbr-box__magnet mbr-class-mbr-box__magnet--center-left col-sm-6 mbr-section__right">
                                <div className="mbr-section__container mbr-section__container--middle">
                                    <div className="mbr-header mbr-header--auto-align mbr-header--wysiwyg">
                                        <h3 className="mbr-header__text">{title}</h3>

                                    </div>
                                </div>
                                <div className="mbr-section__container mbr-section__container--middle">
                                    <div className="mbr-article mbr-article--auto-align mbr-article--wysiwyg"><p>{text}</p></div>
                                </div>
                                <div className="mbr-section__container">
                                    <div className="mbr-buttons mbr-buttons--auto-align btn-inverse"><a className="mbr-buttons__btn btn btn-lg btn-default" href="#">LEARN MORE</a></div>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
          </div>
    );
  }
}
SlideElement.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string
};
