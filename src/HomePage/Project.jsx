import { IonGrid, IonRow } from '@ionic/react'
import ProjectCardComp from '../components/ProjectCardComp'

const Project = () => {
  return (
    <div id="project" className="section_margin">
      <h1>Projects</h1>
      <hr></hr>
      <IonGrid>
        <IonRow>
          <ProjectCardComp title="universityWebsite"></ProjectCardComp>
          <ProjectCardComp title="careerBanaoWebsite"></ProjectCardComp>
          <ProjectCardComp title="bmiCalculator"></ProjectCardComp>
        </IonRow>
      </IonGrid>
    </div>
  )
}
export default Project
