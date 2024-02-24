import {
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonChip,
  IonRow,
  IonTitle,
} from '@ionic/react'
import { useState } from 'react'
import { FaSquareArrowUpRight } from 'react-icons/fa6'
import * as projectInfo from '../constants/projectInfo'
import Modal from './Modal'

import './ProjectCardComp.css'

const ProjectCardComp = ({ title }: any) => {
  const [isShown, setIsShown] = useState(false)
  const [projectClicked, setProjectClicked] = useState('')
  const projectData = projectInfo[title];


  return (
    <>
      {isShown && <Modal title={projectClicked} closeModal={() => setIsShown(false)} />}
      <IonCol>
        <IonCard
          className="bg"
          onClick={() => {
            setIsShown(true)
            setProjectClicked(title)
          }}
        >
          <img src={require(`../assets/images/${projectData.images[0]}`)} className="projImg" />
          <IonCardHeader>
            <IonRow>
              <IonCol size="10">
                <IonTitle className="title">{projectData.title}</IonTitle>
              </IonCol>

              <IonCol size="2">
                <span></span>
                <a target="_blank" href={projectData.liveUrl}>
                  <FaSquareArrowUpRight className="ion-icon-project" color="white" />
                </a>
              </IonCol>
            </IonRow>
            <IonCardSubtitle>
              {projectData.tech.map((item, index) => {
                return (
                  <IonChip key={index} className="ion-chip ">
                    {item}
                  </IonChip>
                )
              })}
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="content">{projectData.details}</IonCardContent>
        </IonCard>
      </IonCol>
    </>
  )
}
export default ProjectCardComp
