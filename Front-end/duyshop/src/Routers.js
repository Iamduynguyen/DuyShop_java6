import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminRoute from './authconfig/adminrouter'
import AdminLayout from './layout/adminlayout'
import Weblayout from './layout/weblayout'
import Test from './Page/test'
import WebsiteHomePage from './Page/websites/home'
import Signin from './Page/websites/sign'

const Routers = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/admin'>
                        <AdminRoute>
                            <AdminLayout>
                                <Route exact path = '/admin/a'>
                                    
                                </Route>
                            </AdminLayout>
                        </AdminRoute>
                    </Route>
                    <Route path = '/signin'>
                        <Test></Test>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routers
