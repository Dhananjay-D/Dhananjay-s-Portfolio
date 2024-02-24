import './Intro.css'
import { IonIcon } from '@ionic/react'
import { SiLeetcode } from 'react-icons/si'
import { logoGithub, logoLinkedin } from 'ionicons/icons'
const Intro = () => {
  const gitHub = 'https://github.com/Dhananjay-D'
  const linkedin = 'https://www.linkedin.com/in/dhananjay-dharne-663856235/'
  const leetcode = 'https://leetcode.com/dhananjay_dharne/'
  return (
    <div className="section_margin intro-content">
      <img
        className="bgImage"
        alt="introgifiimage"
        src={require('../assets/images/bannerImg.gif')}
      />
      <div className="herocontent">
        <h2>Hello, I'm</h2>
        <div className="header">Dhananjay Dharne</div>
        <div className="intro-desc">Frontend Developer + Programmer</div>
        <br></br>
        <a target="_blank" href={gitHub}>
          <IonIcon className="Introcontact-ion-icon" icon={logoGithub}></IonIcon>
        </a>
        <a target="_blank" href={linkedin}>
          <IonIcon className="Introcontact-ion-icon" icon={logoLinkedin}></IonIcon>
        </a>
        <a target="_blank" href={leetcode}>
          <SiLeetcode className="Introcontact-ion-icon" color="white" />
        </a>
      </div>
    </div>
  )
}
export default Intro
