import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import CollegeSignup from '../Pages/CollegeSignup'
import CollegeSignin from '../Pages/CollegeSignin'
import StudentSignUp from '../Pages/StudentSignUp'
import StudentSignin from '../Pages/StudentSignin'

export default function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    {/* SignIn and SignUp */}
                    <Route exact path='/student/signup' component={StudentSignUp} />
                    <Route exact path='/student/signin' component={StudentSignin} />
                    <Route exact path='/college/signup' component={CollegeSignup} />
                    <Route exact path='/college/signin' component={CollegeSignin} />
                </Switch>
            </Router>
        </>
    )
}
