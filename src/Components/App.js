import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Styles/App.css';
import '../Styles/hover.css';
import Content from '../Components/Content.js'
// -----------------------------------------------------------------------------
class App extends Component {
  constructor () {
    super()
    this.state = {
      pictures: [],
    }
  }

  componentDidMount() {

    fetch('https://randomuser.me/api/?results=900')
    //retrieve the name of the data that we want, in this case it was prenamed results, and we want it in json format
    .then(results => {
      return results.json();
    })
    //store the map/looped data as pictures variable,
    //in this example the pic variable represents each time we are checking for a new picture from the api
    //The then function returns a promise, to allow chaining multiple calls.
    .then(data => {
      let pictures = data.results.map((pic) => {
        return(
          //The key attribute is used by react to ensure that dom elements correspond with data objects
          <div key={pic.results} className="results p-5">
            <img src={pic.picture.medium} className="results hvr-wobble-to-top-right" />
          </div>
          // created an image tag, with a source that’s set to the data we want to pull
        )
      })
      //MOST importantly we update the global state so that our inital state "pictures" is replaced by our new variable "pictures", which holds the new picture.
      this.setState({
        pictures: pictures
      });
      console.log("state", this.state.pictures);
    })
  }
// -----------------------------------------------------------------------------
  render() {
    return (
      <div className="container-fluid">
      <Content />
        <div className="row">
          <div className="col-md-12">
            {this.state.pictures}
          </div>
        </div>
      </div>
    )
  }
}
// -----------------------------------------------------------------------------
export default App;
