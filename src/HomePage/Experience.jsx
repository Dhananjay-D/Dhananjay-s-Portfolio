import { IonCol, IonGrid, IonRow, IonSegment, IonSegmentButton } from '@ionic/react'
import { useState } from 'react'

import './Experience.css'
const Experience = () => {
  const careerBanao = 'http://careerbanao.org/'
  const [segmentValue, setSegmentValue] = useState('careerbanao')

  const eventtrigger = (event: any) => {
    setSegmentValue(event.detail.value)
  }
  return (
    <div id="experience" className="section_margin">
      <h1>Experience</h1>
      <hr></hr>
      <IonGrid className="bgColor-exp section-margin-desc">
        <IonRow>
          <IonCol size="12" sizeMd="12" sizeLg="4">
            <IonSegment value={segmentValue} onIonChange={eventtrigger}>
              <IonSegmentButton value="careerbanao">
                <a target="_blank" href={careerBanao}>
                  <h2 className="compName">CareerBanao</h2>
                </a>
              </IonSegmentButton>
            </IonSegment>
          </IonCol>
          <IonCol>
            <div className="description">
              {segmentValue === 'careerbanao' && (
                <div>
                  <div className="expTitle">React Developer</div>
                  <div className="expDate">Nov 2023 - Feb 2024</div>
                  <ul className="expDesc">
                    <li>
                      Enhanced user experience by implementing responsive web designs and optimizing
                      application performance.
                    </li>
                    <li>
                      Reduced application load times by optimizing React components and utilizing
                      code-splitting techniques.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to develop seamless integration of
                      APIs, improving data flow within applications.
                    </li>
                    <li>
                      Boosted application efficiency by incorporating Redux for state management and
                      streamlining component rerendering.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  )
}
export default Experience
