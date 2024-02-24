// import { IonContent, IonPage } from "@ionic/react";
import AboutMe from './AboutMe'
import Contact from './Contact'
import Experience from './Experience'
import Intro from './Intro'
import Project from './Project'
import './HomePage.css'
// import NavBar from "./NavBar";
import Footer from './Footer'
import Skills from './Skills'
import Education from './Education'

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { IonCol, IonGrid, IonRow } from '@ionic/react'

const Homepage = () => {
  return (
    <div>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <h4 style={{ textAlign: 'center' }}>Dhananjay D.</h4>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <span></span>
              </IonCol>

              <IonCol size="12" className="marright">
                <a href="#about">
                  <h4 className="nav">About</h4>
                </a>
              </IonCol>
              <IonCol size="12" className="marright">
                <a href="#experience">
                  <h4 className="nav">Experience</h4>
                </a>
              </IonCol>
              <IonCol size="12" className="marright">
                <a href="#education">
                  <h4 className="nav">Education</h4>
                </a>
              </IonCol>
              <IonCol size="12" className="marright">
                <a href="#skills">
                  <h4 className="nav">Skills</h4>
                </a>
              </IonCol>
              <IonCol size="12" className="marright">
                <a href="#project">
                  <h4 className="nav">Project</h4>
                </a>
              </IonCol>
              <IonCol size="12" className="marright">
                <a href="#contact">
                  <h4 className="nav">Contact</h4>
                </a>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonContent>
          <IonHeader className="sticky-header">
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonTitle>
                <h4>Dhananjay's Portfolio</h4>
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <div className="border">
            <Intro></Intro>
            <AboutMe></AboutMe>
            <Experience></Experience>
            <Education></Education>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
          </div>
        </IonContent>
      </IonPage>
    </div>
  )
}
export default Homepage
