import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const GettingStarted = () => (
  <div>
    <div className='disp-flex hend' >
      <Link className='paragraph u-margin-bottom-big' to='/checkbox'>Checkbox Group &#x21E8;</Link>
    </div>
    <h3 className='heading-primary'>Getting started</h3>
    <p className='paragraph' >Contains groups of common components</p>
    <h4 className='heading-secondary'>How to install</h4>
    <div className='code' >
      <pre>
        yarn add reusable-react-components<br />
        or<br />
        npm install reusable-react-components
      </pre>
    </div>
    <p className='paragraph bold'>Import CSS from reusable-react-components/build/main.css</p>
    <h4 className='heading-secondary'>How to install locally</h4>
    <div className='code' >
      <pre>
        git clone https://github.com/gallant4473/reusable-react-components.git or download zip from https://github.com/gallant4473/reusable-react-components <br />
        cd **reusable-react-components** <br />
        npm install or yarn install <br />
        npm run build or yarn build <br />
        yarn link or npm link <br />
        Open up the project you want to install, yarn link reusable-react-components or npm link reusable-react-components. <br />
        import and use it. <br />
        If you want to make changes in reusable-react-components, For continuous watching the changes yarn start or npm start in reusable-react-components.
      </pre>
    </div>
  </div>
)

export default withRouter(GettingStarted)
