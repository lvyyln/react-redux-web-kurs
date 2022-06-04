import React, {Component} from 'react';
import {FilmPage, PeoplePage, Profile} from '../pages'
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import {SwapiServiceProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import './app.css';
import StarshipPage from "../pages/starship-page";
import PlanetPage from "../pages/planets-page";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import StarshipDetails from "../sw-components/starship-details";
import Redirect from "react-router-dom/es/Redirect";
import Footer from "../footer"
import { ContactUs } from '../pages';
import HomePage from '../pages/home-page';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: false,
        isShowDisabled: true
    };

    onLogin = () => {
        this.setState({isLoggedIn: true})
    };

    onChangeShowPlanet = (showRandomPlanet) => {
        this.setState({showRandomPlanet})
    };

    onDisableShowPlanet = (isShowDisabled) => {
        this.setState({isShowDisabled})
    };

    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        return (
            <div>
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <BrowserRouter>
                        <div className="stardb-app">
                            <Header useDisable={(disable) => this.onDisableShowPlanet(disable)}  useShowRandom={(use) => this.onChangeShowPlanet(use)}/>
                            {planet}
                            <Switch>
                                <Route component={PeoplePage} path="/people/:id?"/>
                                <Route component={FilmPage} path= "/films/:id?"></Route>
                                <Route component={PlanetPage} path="/planets/"/>
                                <Route component={StarshipPage} exact path="/starships/"/>
                                <Route component={Profile} path="/profile/"/>
                                <Route component={ContactUs} path= "/contactUs"></Route> 
                                <Route component={HomePage} exact path= "/"></Route>          
                                <Route
                                    render={({match, location, history}) => <StarshipDetails itemId={match.params.id}/>}
                                    path="/starships/:id"/>
                                <Redirect to="/"/>
                            </Switch>
                        </div>
                        <Footer></Footer>
                    </BrowserRouter>
                </SwapiServiceProvider>
            </ErrorBoundry>
            </div>
        );
    }
}
