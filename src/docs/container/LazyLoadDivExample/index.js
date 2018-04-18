import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import { LazyLoadOnDiv } from 'reusable-react-components'
import { lazybodyConst } from '../../constants'

const Loader = () => (
  <div style={{
    display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, fontSize: 25
  }}
  >
    Loading...
  </div>
)

class LazyLoadDivExample extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      from: 0,
      total: 100
    }
  }
  componentDidMount () {
    this.callApi()
  }
  loadMoreRows () {
    this.setState({
      from: this.state.from + 10
    }, () => this.callApi())
  }
  callApi () {
    axios.get(`https://api.mlab.com/api/1/databases/reusable/collections/list?apiKey=NfffJPK4idTah_JmhYQk_AQ6SOMdRi34&l=10&sk=${this.state.from}`)
      .then((response) => {
        this.setState({
          data: [...this.state.data, ...response.data]
        })
      })
  }
  renderProps () {
    return lazybodyConst.map((item, i) => (
      <div key={i} className='table-list' >
        <div className='table-list-item' >{item.prop}</div>
        <div className='table-list-item' >{item.desc}</div>
      </div>
    ))
  }
  renderList () {
    return this.state.data.map(listItem => (
      <div key={listItem.id} style={{ padding: 20 }} >
        <div>Name: {listItem.name}</div>
        <div>Email: {listItem.email}</div>
        <div>Comment: {listItem.body}</div>
      </div>
    ))
  }
  render () {
    return (
      <div>
        <div className='has-space-btwn' >
          <Link className='paragraph u-margin-bottom-big' to='/lazybody'>&#x21E6; Lazy Load on Body</Link>
        </div>
        <h3 className='heading-primary'>Lazy Load on Div</h3>
        <h4 className='heading-secondary'> Example of Lazy Load on Div</h4>
        <div className='u-margin-bottom-medium' >
          <LazyLoadOnDiv id='lazy-load' loader={<Loader />} total={this.state.total} currentTotal={this.state.data.length} loadMoreRows={() => this.loadMoreRows()} >
            {this.renderList()}
          </LazyLoadOnDiv>
        </div>
        <div className='code u-margin-bottom-medium' >
          <pre>
            {`
  import React, { Component } from 'react'
  import axios from 'axios'
  import { LazyLoadOnDiv } from 'reusable-react-components'
  
  const Loader = () => (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50}} >
      Loading...
    </div>
  )
  
  class ListDivExample extends Component {
    constructor (props) {
      super(props)
      this.state = {
        data: [],
        from: 0,
        total: 100
      }
    }
    componentDidMount () {
      this.callApi()
    }
    loadMoreRows () {
      this.setState({
        from: this.state.from + 10
      }, () => this.callApi())
    }
    callApi () {
      axios.get('https://api.mlab.com/api/1/databases/reusable/collections/list?apiKey=NfffJPK4idTah_JmhYQk_AQ6SOMdRi34&l=10&sk=' + this.state.from)
      .then((response) => {
        this.setState({
          data: [...this.state.data, ...response.data]
        })
      })
    }
    renderList () {
      return this.state.data.map((listItem) => (
        <div key={listItem.id} style={{ padding: 20 }} >
          <div>Name: {listItem.name}</div>
          <div>Email: {listItem.email}</div>
          <div>Comment: {listItem.body}</div>
        </div>
      ))
    }
    render () {
      return (
        <LazyLoadOnDiv id='list' loader={<Loader />} total={this.state.total} currentTotal={this.state.data.length} loadMoreRows={() => this.loadMoreRows()} >
          {this.renderList()}
        </LazyLoadOnDiv>
      )
    }
  }
  
  export default ListDivExample
            `}
          </pre>
        </div>
        <h4 className='heading-secondary u-margin-bottom-small'>Props available</h4>
        <div className='table u-margin-bottom-medium' >
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

export default withRouter(LazyLoadDivExample)
