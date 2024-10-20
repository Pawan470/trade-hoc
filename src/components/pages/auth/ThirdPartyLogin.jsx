import googleicon from '../../../assets/images/icons/google_icon.svg'
import fbicon from '../../../assets/images/icons/fb_icon.svg'
import appleicon from '../../../assets/images/icons/apple_icon.svg'
import Image from 'next/image'

const ThirdPartyLogin = () => {
  return (
      <div className='thirdParty_login d-flex justify-content-center'>
              <button className='thirdParty_login_btn'>
                <Image src={googleicon} alt="icon" />
              </button>
              <button className='thirdParty_login_btn'>
                <Image src={fbicon} alt="icon" />
              </button>
              <button className='thirdParty_login_btn'>
                <Image src={appleicon} alt="icon" />
              </button>
            </div>
  )
}

export default ThirdPartyLogin
