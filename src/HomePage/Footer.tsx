import './Footer.css'
const Footer = () => {
  const linkedin = 'https://www.linkedin.com/in/dhananjay-dharne-663856235/'
  return (
    <div className="ion-text-center test footerDiv">
      <a target="_blank" href={linkedin}>
        <h5>Copyright ©2024. All rights reserved. | This portfolio is made by Dhananjay D.</h5>
      </a>
    </div>
  )
}
export default Footer
