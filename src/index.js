import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Switch, Route, BrowserRouter } from 'react-router-dom';


const App = () => {
    return (
        <div className="App">
            {/* <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact component={Routes} />
                    
                </Switch>
                <Footer />
            </BrowserRouter> */}
            <Routes />
        </div>
    )
}





ReactDOM.render(<App />, document.getElementById('root'));
