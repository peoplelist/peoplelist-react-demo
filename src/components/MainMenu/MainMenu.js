import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './MainMenu.css';

class MainMenu extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <nav className={css.mainMenu}>
            <div className={css.menuGroup}>
                {/*<Link to={{pathname:'/about', search: '?sort=name',hash:'#abchash', state:{is: true}}}>About me</Link>*/}
                <NavLink exact activeClassName={css.active} to="/">Home</NavLink>
                <NavLink activeClassName={css.active} to="/about">About</NavLink>
                {/*<NavLink activeClassName={css.active} to={{pathname: '/about', search: '?sort=name'}}>new About</NavLink>*/}
            </div>
            <div className={css.menuGroup}>
                <a className={css.button} onClick={() => window.location.replace("#/add/new")}>Add People</a>
            </div>
        </nav>
    }
}

export default MainMenu