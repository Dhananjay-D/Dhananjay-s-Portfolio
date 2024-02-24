import { IonCol, IonGrid, IonRow } from '@ionic/react'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div id="about">
      <IonGrid className="section_margin">
        <h1>About Me</h1>
        <hr></hr>
        <IonRow className="section-margin-desc">
          <IonCol size="12" sizeMd="6">
            <h3 className="abtH3">
              I'm currently pursuing my bachelor's degree in{' '}
              <strong>Computer Science & Engineering</strong> at{' '}
              <a href="https://git.edu/" target="_blank">
                <strong>Kls Gogte Institute Of Technology</strong>
              </a>
              , Belagavi.
              <br />
              <br />
              Proficient at designing websites and writing code in various languages. Specialize in
              thinking outside the box to find unique solutions to difficult engineering problems.
            </h3>
          </IonCol>
          <IonCol size="12" sizeMd="6">
            <div className="ion-text-center">
              <img className="image" alt="myPic" src={require('../assets/images/dhananjay.jpg')} />
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  )
}
export default AboutMe
