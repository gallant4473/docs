import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { CheckboxGroup } from 'reusable-react-components'
import { checkboxConst } from '../../constants'

const options = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven'
]

class CheckboxExample extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: []
    }
  }
  onChange (value, key) {
    this.setState({
      [key]: value
    })
  }
  renderProps () {
    return checkboxConst.map((item, i) => (
      <div key={i} className='table-list' >
        <div className='table-list-item' >{item.prop}</div>
        <div className='table-list-item' >{item.desc}</div>
      </div>
    ))
  }
  render () {
    return (
      <div>
        <div className='has-space-btwn' >
          <Link className='paragraph u-margin-bottom-big' to='/'>&#x21E6; Getting started</Link>
          <Link className='paragraph u-margin-bottom-big' to='/radio'>Radio group &#x21E8;</Link>
        </div>
        <h3 className='heading-primary'>Check Box Group</h3>
        <h4 className='heading-secondary'>Example for checkbox group</h4>
        <div className='u-margin-bottom-small' >
          <CheckboxGroup inline id='checkbox-example' options={options} active={this.state.active} onChange={value => this.onChange(value, 'active')} />
        </div>
        <div className='code u-margin-bottom-medium' >
          <pre>
            {`
  import React, { Component } from 'react'
  import { CheckboxGroup } from 'reusable-react-components'

  const options = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven'
  ]

  class CheckboxExample extends Component {
    constructor (props) {
      super(props)
      this.state = {
        active: []
      }
    }
    onChange (value, key) {
      this.setState({
        [key]: value
      })
    }
    render () {
      return (
        <CheckboxGroup inline id='checkbox-example' options={options} active={this.state.active} onChange={(value) => this.onChange(value, 'active')} />
      )
    }
  }

  export default CheckboxExample
            `}
          </pre>
        </div>
        <h4 className='heading-secondary u-margin-bottom-small'>Props available</h4>
        <div className='table' >
          <div className='table-header' >
            <div className='table-list' >
              <div className='table-list-item bold' >Props</div>
              <div className='table-list-item bold' >Description</div>
            </div>
          </div>
          <div className='table-body' >
            {this.renderProps()}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CheckboxExample)
