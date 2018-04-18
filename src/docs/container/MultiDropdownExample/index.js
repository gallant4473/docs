import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { MultiSelectDropdown } from 'reusable-react-components'
import { multiselectConst } from '../../constants'

const options = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven'
]

class MultiDropdownExample extends Component {
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
    return multiselectConst.map((item, i) => (
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
          <Link className='paragraph u-margin-bottom-big' to='/dropdown'>&#x21E6; Dropdown</Link>
          <Link className='paragraph u-margin-bottom-big' to='/modal'>Modal &#x21E8;</Link>
        </div>
        <h3 className='heading-primary'>Multi Select Dropdown</h3>
        <h4 className='heading-secondary'>Example for simple Multi Select Dropdown</h4>
        <div className='u-margin-bottom-small' >
          <MultiSelectDropdown id='multi-select-example' title='Select Option' options={options} active={this.state.active} onChange={value => this.onChange(value, 'active')} />
        </div>
        <div className='code u-margin-bottom-medium' >
          <pre>
            {`
  import React, { Component } from 'react'
  import { MultiSelectDropdown } from 'reusable-react-components'
  
  const options = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven'
  ]
  
  class MultiSelectDropdownExample extends Component {
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
        <div>
          <MultiSelectDropdown id='multi-select-example' title='Select Option' options={options} active={this.state.active} onChange={(value) => this.onChange(value, 'active')} />
        </div>
      )
    }
  }
  
  export default MultiSelectDropdownExample
            `}
          </pre>
        </div>
        <h4 className='heading-secondary'>Example for Multi Select Dropdown with search</h4>
        <div className='u-margin-bottom-small' >
          <MultiSelectDropdown id='multi-select-search-example' searchOptions={this.state.searchOptions} onSearch={value => this.onSearch(value)} minLength={1} title='Select Option' options={options} active={this.state.active} onChange={value => this.onChange(value, 'active')} />
        </div>
        <div className='code u-margin-bottom-medium' >
          <pre>
            {`
  import React, { Component } from 'react'
  import { MultiSelectDropdown } from 'reusable-react-components'
  
  const options = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven'
  ]
  
  class MultiSelectDropdownSearchExample extends Component {
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
          <MultiSelectDropdown id='multi-select-search-example' searchOptions={this.state.searchOptions} onSearch={(value) => this.onSearch(value)} minLength={1} title='Select Option' options={options} active={this.state.active} onChange={(value) => this.onChange(value, 'active')} />
        </div>
      )
    }
  }
  
  export default MultiSelectDropdownSearchExample
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

export default withRouter(MultiDropdownExample)
