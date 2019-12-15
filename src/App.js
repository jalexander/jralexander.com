import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Props from './views/Props'
import Experiments from './views/Experiments'
import About from './views/About'
import More from './views/More'
import Ledgerx from './views/Ledgerx'
import Squarespace from './views/Squarespace'
import Wrapper from './components/Wrapper'
import Nav from './components/Nav'
import NavLink from './components/NavLink'
import SubNav from './components/SubNav'

const title = 'Jim Alexander / Developer'

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
            <NavLink {...{ animateNav }} main animDelay="0ms" title="Jim Alexander" path="/about" />
            <SubNav {...{ animateNav }}>
              <a href="http://github.com/jalexander" target="blank">github</a>
              <a href="https://workingnotworking.com/jalexander" target="blank">working not working</a>
              <a href="https://www.linkedin.com/in/jralexander" target="blank">linkedin</a>
              <a href="mailto:jim@jralexander.com" target="blank">email</a>
              <a href="/jimalexander-resume.pdf" target="blank">résumé</a>
            </SubNav>
            <NavLink {...{ animateNav }} animDelay="100ms" title="Squarespace" path="/squarespace" notUppercase />
            <NavLink {...{ animateNav }} animDelay="200ms" title="LedgerX" path="/ledgerx" notUppercase />
            <NavLink {...{ animateNav }} animDelay="300ms" title="Props" path="/props" notUppercase />
            <NavLink {...{ animateNav }} animDelay="400ms" title="Experiments" path="/experiments" notUppercase />
            <NavLink {...{ animateNav }} animDelay="500ms" title="and more..." path="/more-work" notUppercase />
          </Nav>
          <CSSTransitionGroup
            transitionName="page"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            <Switch key={location.key} location={location}>
              <Route path="/about" component={About}/>
              <Route path="/squarespace" component={Squarespace}/>
              <Route path="/ledgerx" component={Ledgerx}/>
              <Route path="/props" component={Props}/>
              <Route path="/experiments" component={Experiments}/>
              <Route path="/more-work" component={More}/>
            </Switch>
          </CSSTransitionGroup>
        </Wrapper>
        )}/>
      </Router>
    );
  }
}

export default App;
