import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './HOC/header/Header'
import Footer from './HOC/footer/Footer'

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact component={Routes} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    )
}





ReactDOM.render(<App />, document.getElementById('root'));
