import React, {Component} from 'react';

import axios from 'axios';

class BasicResponse extends Component {
  state = {
    response: null,
    loading: true
  }


  componentDidMount() {
    axios.get('http://localhost:3012/')
      .then((response) => {
        console.log('RESPONSE', response.data);
        this.setState({ response: response.data, loading: false });
      })
      .catch((error) => {
        console.log('EERR', error);
      })
  }


  render() {
    const {response, loading} = this.state;
    if(loading) {
      return (
        <p>Loading ...</p>
      )
    }
    return (
      <div class="basic-response">
        <div>
          <h1>{response.name}</h1>
          <p>{response.alias} / {response.email}</p>
          <div className="age-container">
            {response.isMarried ? 'Married' : 'Single'} / {response.age}
          </div>
          {response.hobbies
          .map(hobby => {
            return <p className="tag">{hobby}</p>
          })
          }
        </div>
      </div>
    )
  }
}

export default BasicResponse;