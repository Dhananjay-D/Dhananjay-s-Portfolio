import './Education.css'
import { IonCol, IonGrid, IonRow } from '@ionic/react'
import { FaGraduationCap } from 'react-icons/fa6'

const Education = () => {
  const Data = [
    {
      id: 1,
      name: 'KLS Gogte Institute of Technology, Belagavi',
      date: '2021 - 2025',
      course: 'Bachelor of Engineering in Computer Science',
      logo: 'FaGraduationCap',
    },
    {
      id: 2,
      name: 'GSS Pu College, Belagavi',
      date: '2019-2021',
      course: 'Pre-University Course',
      logo: 'FaUniversity',
    },
    {
      id: 3,
      name: 'Karuna Sadan School, Maharashtra',
      date: '2009-2019',
      course: 'Schooling',
      logo: 'FaSchool',
    },
  ]
  return (
    <div id="education" className="section_margin">
      <h1>Education</h1>
      <hr></hr>
      <IonGrid className="bgColor-exp section-margin-desc">
        {Data.map((item) => (
          <IonRow key={item.id}>
            <IonCol size="12" size-md="3" sizeLg="4">
              <div className="eduDate">
                {item.date}
                {item.id === 1 ? <FaGraduationCap className="ion-icon-education" /> : ''}
              </div>
            </IonCol>
            <IonCol>
              <div className="description">
                <div>
                  <h2 className="courseName">{item.course}</h2>
                  <div className="eduName">{item.name}</div>
                </div>
              </div>
            </IonCol>
          </IonRow>
        ))}
      </IonGrid>
    </div>
  )
}

export default Education
