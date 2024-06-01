import { IonCard, IonGrid, IonRow, IonCol, IonCardContent } from '@ionic/react'

import { FaGithub } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { DiGit } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'

import './Skills.css'
import { FaJava, FaReact, FaHtml5, FaCss3, FaBootstrap } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { IoLogoFirebase } from 'react-icons/io5'
import { AiOutlineAntDesign } from 'react-icons/ai'

const Skills = () => {
  return (
    <div id="skills" className="section_margin">
      <h1>Skills</h1>
      <hr></hr>
      <IonGrid className="section-margin-desc centerItems ">
        <IonRow>
          <IonCol size="6" sizeMd="4" sizeLg="2">
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <FaJava className="contact-ion-icon" />
                </div>
                <div>Java</div>
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol size="6" sizeMd="4" sizeLg="2">
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <FaReact className="contact-ion-icon" />
                </div>
                <div>React</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="6" sizeMd="4" sizeLg="2">
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <IoLogoJavascript className="contact-ion-icon" />
                </div>
                <div>JavaScript</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="6" sizeMd="4" sizeLg="2">
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <FaHtml5 className="contact-ion-icon" />
                </div>
                <div>HTML</div>
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol size="6" sizeMd="4" sizeLg="2">
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <FaCss3 className="contact-ion-icon" />
                </div>
                <div>CSS</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="6" sizeMd="4" sizeLg="2">
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <DiGit className="contact-ion-icon" />
                </div>
                <div>GIT</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="6" sizeMd="4" sizeLg="2">
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <GrMysql className="contact-ion-icon" />
                </div>
                <div>MySQL</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="6" sizeMd="4" sizeLg="2">
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <IoLogoFirebase className="contact-ion-icon" />
                </div>
                <div>Firebase</div>
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol size="6" sizeMd="4" sizeLg="2">
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <FaBootstrap className="contact-ion-icon" />
                </div>
                <div>Bootstrap</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="6" sizeMd="4" sizeLg="2">
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <SiTailwindcss className="contact-ion-icon" />
                </div>
                <div>Tailwind CSS</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="6" sizeMd="4" sizeLg="2">
            <IonCard className="cardContent centerflex centerflex">
              <IonCardContent>
                <div>
                  <FaGithub className="contact-ion-icon" />
                </div>
                <div className="centerItems">Github</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="6" sizeMd="4" sizeLg="2">
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <AiOutlineAntDesign className="contact-ion-icon" />
                </div>
                <div>Ant Design</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  )
}
export default Skills
