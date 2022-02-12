import React from 'react'
import './featureBox.css'
import FeatureBox from './featuresBox'
import Img from '../images/feature_1.png'
import Img2 from '../images/feature_2.png'
import Img3 from '../images/feature_3.png'

function Feature() {
  return (
    <>
    <div className="features">
      <div className="container">
      <FeatureBox image={Img} title='Devlepment' />
      <FeatureBox image={Img2} title='In Your buget' />
      <FeatureBox image={Img3} title='UI Design' />
      </div>  
    </div> 
    </>
  )
}

export default Feature