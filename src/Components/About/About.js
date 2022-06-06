import React, { Component } from 'react';
import LeftAbout from './Component/LeftAbout';
import RightAbout from './Component/RightAbout';
import Contact from './Component/Contact';
import ImgaeHover from './Component/ImgaeHover';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className='container'>
          <div className='TopAbout'>
            <LeftAbout/>
            <RightAbout/>
          </div>
          <div>
            <ImgaeHover/>
          </div>
          <div>
            <Contact/>
          </div>
      </div>
    )
  }
}
