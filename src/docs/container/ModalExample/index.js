import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Modal } from 'reusable-react-components'
import { modalConst } from '../../constants'

class ModalExample extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }
  onClose () {
    this.setState({
      open: false
    })
  }
  renderProps () {
    return modalConst.map((item, i) => (
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
          <Link className='paragraph u-margin-bottom-big' to='/multiselect'>&#x21E6; Multi Select Dropdown</Link>
          <Link className='paragraph u-margin-bottom-big' to='/lazybody'> Lazy Load on Body &#x21E8;</Link>
        </div>
        <h3 className='heading-primary'>Modal</h3>
        <h4 className='heading-secondary'>Example for Modal</h4>
        <div className='u-margin-bottom-small' >
          <button className='btn btn-primary' onClick={() => this.setState({ open: true })} >Open</button>
          <p className='paragraph' >Click on Open to open modal box</p>
          <Modal dialog open={this.state.open} onClose={() => this.onClose()} size='large'>
            <h3 className='heading-primary' >Hello there</h3>
          </Modal>
        </div>
        <div className='code u-margin-bottom-medium' >
          <pre>
            {`
  import React, { Component } from 'react'
  import { Modal } from 'reusable-react-components'
  
  class ModalExample extends Component {
    constructor (props) {
      super(props)
      this.state = {
        open: false
      }
    }
    onClose () {
      this.setState({
        open: false
      })
    }
    render () {
      return (
        <div>
          <button className='btn btn-primary' onClick={() => this.setState({ open: true })} >Open</button>
          <Modal dialog open={this.state.open} onClose={() => this.onClose()} size='large'>
            Hello there
          </Modal>
        </div>
      )
    }
  }
  
  export default ModalExample
            
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

export default withRouter(ModalExample)
