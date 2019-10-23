import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from './HOC/footer/Footer'
import ResAppBar from './HOC/header/ResAppBar';

import Fruitdale from './components/Projects/Fruitdale';
import SteamPlantRowHomes from './components/Projects/SteamPlantRowHomes';
import Eiber from './components/Projects/Eiber';
import Hanger2 from './components/Projects/Hanger2';
import Pancratia from './components/Projects/Pancratia';
import SteamPlant from './components/Projects/SteamPlant';

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
                    <Route exact path='/eiber' component={Eiber} />
                    <Route exact path='/hanger2' component={Hanger2} />
                    <Route exact path='/pancratia' component={Pancratia} />
                    <Route exact path='/steamplant' component={SteamPlant} />
                    <Route exact path='/steamplantrowhomes' component={SteamPlantRowHomes} />
                </Switch>
                <Footer />
            </BrowserRouter>

        </div>
    )
}





ReactDOM.render(<App />, document.getElementById('root'));
