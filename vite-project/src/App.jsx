import { BrowserRouter as Router , Route,Switch} from "react-router-dom/cjs/react-router-dom.min"
import Index from './components/index'
import About from './components/about'
import Contact from './components/contact'
import Post from './components/post'
function App() {
 

  return (
   <Router>
<div >
  <Switch>

    <Route exact path = '/'>
    <Index />
    </Route>
    
    <Route exact path = '/about'>
    <About />
    </Route>
    
    <Route exact path = '/contact'>
    <Contact />
    </Route>

    <Route exact path = '/post'>
    <Post />
    </Route>

  </Switch>





</div>


      </Router>
  )
}

export default App
