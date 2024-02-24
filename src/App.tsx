// import { Redirect} from 'react-router-dom'
import { setupIonicReact } from '@ionic/react'
import { BrowserRouter, Route } from 'react-router-dom'
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import Homepage from './HomePage/HomePage'

setupIonicReact()

const App: React.FC = () => (
  <BrowserRouter>
    <Route path="/" component={Homepage} />
  </BrowserRouter>
)

export default App
