import React from 'react';
import css from './AboutMenu.css';
import {NavLink} from 'react-router-dom';


class AboutMenu extends React.Component {
    // constructor (props) {
    //     super(props);
    // }

    render () {
        return <div className={css.aboutMenu}>
            <li>
                <NavLink exact activeClassName={css.active} to="/about">
                    Company
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={css.active} to="/about/services">
                    Services
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={css.active} to="/about/location">
                    Location
                </NavLink>
            </li>
        </div>
    }
}

export default AboutMenu;