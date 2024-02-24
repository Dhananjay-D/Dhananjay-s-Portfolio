import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from '@ionic/react'
import {
  logoGithub,
  logoLinkedin,
  mailOutline,
  callOutline,
  logoInstagram,
  logoWhatsapp,
} from 'ionicons/icons'

import './Contact.css'

const Contact = () => {
  const gitHub = 'https://github.com/Dhananjay-D'
  const linkedIn = 'https://www.linkedin.com/in/dhananjay-dharne-663856235/'
  const mail = 'mailto:dhananjay.dharne09@gmail.com'
  const call = 'tel:+918217014312'
  const instagram = 'https://www.instagram.com/__dhananjay.d_/'
  const whatsApp = 'https://wa.me/8217014312'
  return (
    <div id="contact" className="section_margin">
      <h1>Contact me</h1>
      <hr></hr>
      <IonGrid className="section-margin-desc">
        <IonRow>
          <IonCol size="12" sizeMd="12" sizeLg="4">
            <a target="_blank" href={gitHub}>
              <IonButton>
                <IonIcon className="contact-ion-icon" icon={logoGithub}></IonIcon>
                <h3>Github</h3>
              </IonButton>
            </a>
          </IonCol>
          <IonCol size="12" sizeMd="12" sizeLg="4">
            <a target="_blank" href={mail}>
              <IonButton>
                <IonIcon className="contact-ion-icon" icon={mailOutline}></IonIcon>
                <h3>Email</h3>
              </IonButton>
            </a>
          </IonCol>
          <IonCol size="12" sizeMd="12" sizeLg="4">
            <a target="_blank" href={linkedIn}>
              <IonButton>
                <IonIcon className="contact-ion-icon" icon={logoLinkedin}></IonIcon>
                <h3>LinkedIn</h3>
              </IonButton>
            </a>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12" sizeMd="12" sizeLg="4">
            <a target="_blank" href={call}>
              <IonButton>
                <IonIcon className="contact-ion-icon" icon={callOutline}></IonIcon>
                <h3>Phone</h3>
              </IonButton>
            </a>
          </IonCol>
          <IonCol size="12" sizeMd="12" sizeLg="4">
            <a target="_blank" href={instagram}>
              <IonButton>
                <IonIcon className="contact-ion-icon" icon={logoInstagram}></IonIcon>
                <h3>Instagram</h3>
              </IonButton>
            </a>
          </IonCol>
          <IonCol size="12" sizeMd="12" sizeLg="4">
            <a target="_blank" href={whatsApp}>
              <IonButton>
                <IonIcon className="contact-ion-icon" icon={logoWhatsapp}></IonIcon>
                <h3>Whatsapp</h3>
              </IonButton>
            </a>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  )
}
export default Contact
