import {BrowserRouter as Router} from 'react-router-dom'
import Header from "./components/Header/Header";
import UsersGit from './GitUser/UsersGit';
const App = () => {
  return (
    <div>
    <Router>
    <Header />
    </Router>
      <UsersGit />
    </div>
  )
}

export default App;
