import React, { Component } from 'react'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import DropdownExample from '../DropdownExample'
import MultiDropdownExample from '../MultiDropdownExample'
import CheckboxExample from '../CheckboxExample'
import ModalExample from '../ModalExample'
import RadioExample from '../RadioExample'
import GettingStarted from '../GettingStarted'
import LazyLoadBodyExample from '../LazyLoadBodyExample'
import LazyLoadDivExample from '../LazyLoadDivExample'

const ROUTES = [
  {
    name: 'Getting Started',
    route: '/'
  }, {
    name: 'Checkbox Group',
    route: '/checkbox'
  }, {
    name: 'Radio Group',
    route: '/radio'
  }, {
    name: 'Dropdown',
    route: '/dropdown'
  }, {
    name: 'Multi Select Dropdown',
    route: '/multiselect'
  }, {
    name: 'Modal',
    route: '/modal'
  }, {
    name: 'Lazy Load On Body',
    route: '/lazybody'
  }, {
    name: 'Lazy Load On Div',
    route: '/lazydiv'
  }
]

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      links: ROUTES
    }
  }
  renderLinks () {
    return this.state.links.map((item, i) => (
      <li className='side__bar-list-item' key={i} >
        <Link className={item.route === this.props.location.pathname ? 'link active' : 'link'} to={item.route}>{item.name}</Link>
      </li>
    ))
  }
  render () {
    return (
      <div>
        <header className='header' >
          <Link className='link' to='/'>Reusable React Components</Link>
        </header>
        <div className='disp-flex' >
          <div className='side__bar' >
            <div className='side__bar-content' >
              <ul className='side__bar-list' >
                {this.renderLinks()}
              </ul>
            </div>
          </div>
          <div className='main__content' >
            <Switch>
              <Route path='/' exact component={GettingStarted} />
              <Route path='/checkbox' component={CheckboxExample} />
              <Route path='/dropdown' component={DropdownExample} />
              <Route path='/multiselect' component={MultiDropdownExample} />
              <Route path='/modal' component={ModalExample} />
              <Route path='/radio' component={RadioExample} />
              <Route path='/lazybody' component={LazyLoadBodyExample} />
              <Route path='/lazydiv' component={LazyLoadDivExample} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Main)
