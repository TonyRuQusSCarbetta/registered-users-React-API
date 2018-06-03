import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Styles/Content.css';
import '../Styles/hover.css';
// -----------------------------------------------------------------------------
class App extends Component {
  constructor () {
    super()
    this.state = {
      firstName: 'Tony',
    }
    // this.createAnyNewMethod = this.createAnyNewMethod.bind(this)
  }
// -----------------------------------------------------------------------------

  render() {
    return (
      <Row>
        <Col md="12" className="hvr-grow">

          <h1 className="flex-container">
          <i class="fas fa-user-circle fa-1x p-3"> </i>Registered Users<i class="fas fa-users p-3 fa-1x"></i></h1>
        </Col>
      </Row>
    )
  }
}
// -----------------------------------------------------------------------------
export default App;
