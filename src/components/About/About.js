import React from 'react';
import css from './About.css';
import AboutMenu from './AboutMenu';
import Company from './Company';
import Services from './Services';
import Location from './Location';
import {Route} from 'react-router-dom';


class About extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <div className={css.aboutContainer}>
            <Route component={AboutMenu}/>
            <Route exact path="/about" component={Company}/>
            <Route path="/about/services" component={Services}/>
            <Route path="/about/location" component={Location}/>

        </div>
    }
}

export default About;