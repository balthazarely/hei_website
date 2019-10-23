import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from './HOC/footer/Footer'
import ResAppBar from './HOC/header/ResAppBar';
import Fruitdale from './components/Projects/Fruitdale';
import About from './components/About';
import ScrollToTop from './components/ulilities/ScrollToTop'


const App = () => {


    return (
        <div className="App">
            <BrowserRouter>
                <ResAppBar />
                <ScrollToTop />
                <Switch>
                    <Route exact path='/' component={Routes} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/fruitdale' component={Fruitdale} />

                </Switch>
                <Footer />
            </BrowserRouter>

        </div>
    )
}





ReactDOM.render(<App />, document.getElementById('root'));
