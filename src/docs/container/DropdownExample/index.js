import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Dropdown } from 'reusable-react-components'
import { dropdownConst } from '../../constants'

const options = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven'
]

class DropdownExample extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: 'one'
    }
  }
  onChange (value, key) {
    this.setState({
      [key]: value
    })
  }
  onSearch (text) {
    const searchOptions = []
    // any filter function and return array of options or get array of options from API
    options.map((item) => {
      if (item.indexOf(text) >= 0) {
        searchOptions.push(item)
      }
      return null
    })
    this.setState({
      searchOptions
    })
  }
  renderProps () {
    return dropdownConst.map((item, i) => (
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
          <Link className='paragraph u-margin-bottom-big' to='/radio'>&#x21E6; Radio Group</Link>
          <Link className='paragraph u-margin-bottom-big' to='/multiselect'>Multi select dropdown &#x21E8;</Link>
        </div>
        <h3 className='heading-primary'>Dropdown</h3>
        <h4 className='heading-secondary'>Example for simple Dropdown</h4>
        <div className='u-margin-bottom-small' >
          <Dropdown title='Select Option' options={options} active={this.state.active} onChange={value => this.onChange(value, 'active')} />
        </div>
        <div className='code u-margin-bottom-medium' >
          <pre>
            {`
  import React, { Component } from 'react'
  import { Dropdown } from 'reusable-react-components'
  
  const options = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven'
  ]
  
  class DropdownExample extends Component {
    constructor (props) {
      super(props)
      // null incase if you don't want any option to be selected at the beginning otherwise, any one of the option
      this.state = {
        active: null
      }
    }
    onChange (value, key) {
      this.setState({
        [key]: value
      })
    }
    render () {
      return (
        <div>
          <Dropdown title='Select Option' options={options} active={this.state.active} onChange={(value) => this.onChange(value, 'active')} />
        </div>
      )
    }
  }
  
  export default DropdownExample
            `}
          </pre>
        </div>
        <h4 className='heading-secondary'>Example for Dropdown with search</h4>
        <div className='u-margin-bottom-small' >
          <Dropdown
            searchOptions={this.state.searchOptions}
            onSearch={value => this.onSearch(value)}
            minLength={1}
            title='Select Option'
            options={options}
            active={this.state.active}
            onChange={value => this.onChange(value, 'active')}
          />
        </div>
        <div className='code u-margin-bottom-medium' >
          <pre>
            {`
  import React, { Component } from 'react'
  import { Dropdown } from 'reusable-react-components'
  
  const options = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven'
  ]
  
  class DropdownSearchExample extends Component {
    constructor (props) {
      super(props)
      this.state = {
        active: 'one'
      }
    }
    onChange (value, key) {
      this.setState({
        [key]: value
      })
    }
    onSearch (text) {
      let searchOptions = []
      // any filter function and return array of options or get array of options from API
      options.map((item) => {
        if (item.indexOf(text) >= 0) {
          searchOptions.push(item)
        }
      })
      this.setState({
        searchOptions
      })
    }
    render () {
      return (
        <div>
          <Dropdown searchOptions={this.state.searchOptions} onSearch={(value) => this.onSearch(value)} minLength={1} title='Select Option' options={options} active={this.state.active} onChange={(value) => this.onChange(value, 'active')} />
        </div>
      )
    }
  }
  
  export default DropdownSearchExample
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

export default withRouter(DropdownExample)
