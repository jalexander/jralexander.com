import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import Nav from './components/Nav'
import NavLink from './components/NavLink'
import SubNav from './components/SubNav'
import Wrapper from './components/Wrapper'

import About from './views/About'
import Experiments from './views/Experiments'
import Ledgerx from './views/Ledgerx'
import More from './views/More'
import NoMatch from './views/NoMatch'
import Props from './views/Props'
import Squarespace from './views/Squarespace'

const title = 'Jim Alexander / Developer'

const routes = [
  {
    component: About,
    path: '/about',
    title: 'Jim Alexander',
  },
  {
    component: Squarespace,
    path: '/squarespace',
    title: 'Squarespace',
  },
  {
    component: Ledgerx,
    path: '/ledgerx',
    title: 'LedgerX',
  },
  {
    component: Props,
    path: '/props',
    title: 'Props',
  },
  {
    component: Experiments,
    path: '/experiments',
    title: 'Experiments',
  },
  {
    component: More,
    path: '/more-work',
    title: 'and more…',
  },
]

class App extends PureComponent {
  state = {
    animateNav: false,
  }

  componentDidMount = () => {
    this._animationTimeout = setTimeout(() => {
      this.setState({ animateNav: true })
    }, 200)
  }

  componentWillUnmount = () => {
    clearTimeout(this._animationTimeout)
  }

  render() {
    const { animateNav } = this.state
    return (
      <Router>
        <Route render={({ location }) => (
          <Wrapper>
            <Helmet defaultTitle={title} titleTemplate={`${title} / %s`} />
            <Nav>
              <NavLink
                animateNav={animateNav}
                animDelay="0ms"
                main
                path={routes[0].path}
                title={routes[0].title}
                uppercase
              />
              <SubNav {...{ animateNav }}>
                <a href="http://github.com/jalexander" target="blank">github</a>
                <a href="https://workingnotworking.com/jalexander" target="blank">working not working</a>
                <a href="https://www.linkedin.com/in/jralexander" target="blank">linkedin</a>
                <a href="mailto:jim@jralexander.com">email</a>
                <a href="/jimalexander-resume.pdf" target="blank">résumé</a>
              </SubNav>
              {routes.map((route, index) => {
                if (index === 0) {
                  return null;
                }
                return (
                  <NavLink
                    animateNav={animateNav}
                    animDelay={`${index}00ms`}
                    key={route.path}
                    path={route.path}
                    title={route.title}
                  />
                )
              })}
            </Nav>
            <CSSTransitionGroup
              transitionName="page"
              transitionEnterTimeout={250}
              transitionLeaveTimeout={250}
            >
              <Switch key={location.key} location={location}>
                {routes.map((route) => (
                  <Route
                    component={route.component}
                    exact
                    key={route.path}
                    path={route.path}
                  />
                ))}
                <Route exact path="/" />
                <Route path="*" component={NoMatch} />
              </Switch>
            </CSSTransitionGroup>
          </Wrapper>
        )}/>
      </Router>
    );
  }
}

export default App;
