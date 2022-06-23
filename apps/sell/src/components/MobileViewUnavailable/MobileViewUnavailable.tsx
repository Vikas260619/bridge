import React from 'react'

// assets
import mobileviewshow from '../../assets/images/mobileviewshow.svg'
import mobilebackground from '../../assets/images/mobilebackground.svg'
import mobilebridgeuplogo from '../../assets/images/mobilebridgeuplogo.svg'

// style sheets
import './MobileViewUnavailable.scss'

// other imports
import { configVariables } from '../../utils/configVariables'

const MobileViewUnavailable: React.FunctionComponent = () => {
  return (
    <div className="mobile-view-main-div">
      <div className="mobile-view-inner-div pt-20">
        <div className="mobile-view-message-div p-5">
          <div className="image-div mb-6">
            <img src={mobileviewshow} alt="logo" />
          </div>
          <div className="mobile-view-message-one-div text-24 mb-5">
            {configVariables.unAvailableOnMobileText}
          </div>
          <div className="mobile-view-message-two-div text-14">
            {configVariables.unAvailableOnMobileDescription}
          </div>
        </div>
      </div>
      <div className="mobile-view-bg-image-div">
        <img src={mobilebackground} alt="logo" />
      </div>
      <div className="company-logo-div">
        <img
          src={mobilebridgeuplogo}
          alt="logo"
          className="company-logo-image"
        />
      </div>
    </div>
  )
}

export default MobileViewUnavailable
