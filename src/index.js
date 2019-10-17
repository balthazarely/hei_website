import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from './HOC/footer/Footer'
import ResAppBar from './HOC/header/ResAppBar';
import Fruitdale from './components/Projects/Fruitdale';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <ResAppBar />
                <Switch>
                    <Route exact path='/' component={Routes} />
                    <Route exact path='/fruitdale' component={Fruitdale} />
                </Switch>
                <Footer />
            </BrowserRouter>

        </div>
    )
}





ReactDOM.render(<App />, document.getElementById('root'));
