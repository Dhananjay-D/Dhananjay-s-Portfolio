import './Footer.css'
const Footer = () => {
  const linkedin = 'https://www.linkedin.com/in/dhananjay-dharne-663856235/'
  return (
    <div className="ion-text-center test footerDiv">
      <a target="_blank" href={linkedin}>
        <h5>Copyright © 2024 
          <a className="copyright" target="_self" href="https://dhananjaysportfolio.online">
           <span> </span> Dhananjay's_Portfolio
          </a> | All rights reserved.</h5>
      </a>
    </div>
  )
}
export default Footer
