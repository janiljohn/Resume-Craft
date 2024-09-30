import Reac from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ResumeForm from "./pages/ResumeForm"
import University from "./pages/University"

const App = () => {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/login" exact Component={Login}/>
                <Route path="/register" exact Component={Register}/>
                <Route path="/dashboard" exact Component={Dashboard}/>
                <Route path="/resume" exact Component={ResumeForm}/>
                <Route path="/university" exact Component={University}/>
            </Routes>
        </BrowserRouter>

    </div>
}

export default App