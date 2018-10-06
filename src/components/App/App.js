import React, {Component} from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router, Route, withRouter, Switch, Redirect} from 'react-router-dom';
// import logo from '../../assets/logo.svg';
import css from './App.css';

// import MyLabel from "../MyLabel/MyLabel";
// import MyForm from "../MyForm/MyForm";
// import C from "../../constants";
// import FilterPeople from "../FilterPeopleList/FilterPeopleList";
// import {createStore} from 'redux';

import PeopleList from "../PeopleList/PeopleList";
import AddPeople from "../AddPeople/AddPeople";
import Page404 from "../Page404/Page404";
import MainMenu from '../MainMenu/MainMenu';
import About from '../About/About';
import {initStore} from '../../actions/index';

class App extends Component {

    constructor (props) {
        super(props);
        var data = localStorage.getItem('store');
        data = JSON.parse(data);
        console.log('localStorate:')
        console.log(data);
        this.props.initStore(data);
    }

    render() {
        return (
            <div className={css.App}>
                <header className={css.AppHeader}>
                    <h1 className={css.AppTitle}>Address Book</h1>
                </header>
                <Router>
                    <div className={css.main}>
                        {/*<Link to={{pathname:'/about', search: '?sort=name',hash:'#abchash', state:{is: true}}}>About me</Link>*/}
                        <MainMenu/>
                        <Switch>
                            <Route exact path="/" component={withRouter(PeopleList)}/>
                            <Route path="/add/:id" component={withRouter(AddPeople)}/>
                            <Route path="/about" component={About}/>
                            <Redirect from="/services" to="/about/services"/>
                            <Redirect from="/company" to="/about/comany"/>
                            <Redirect from="/location" to="/about/location"/>
                            <Route component={Page404}/>
                        </Switch>
                    </div>
                </Router>
                <footer className={css.footer}>
                    <div> <span>©2018 by Lisper Li </span><span> (Email: leyapin@gmail.com).</span><span>All Rights Reserved</span></div>
                </footer>
            </div>
        );
    }
}

export default connect(null, (dispatch) => ({
    initStore: (store) => {
        dispatch(initStore(store));
        // dispatch({type: 'INIT_STORE', store});
    }
}))(App);
