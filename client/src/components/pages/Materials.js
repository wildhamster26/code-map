import React, { Component } from 'react';
import api from '../../api';

class Materials extends Component {
  constructor(props) {
    super(props)
    this.state = {
      materials: []
    }
  }
  render() {
    return (
      <div className="Materials">
        <h2>List of materials</h2>
        {this.state.materials.map(c => <li key={c._id}>{c.name}</li>)}
      </div>
    );
  }
  componentDidMount() {
    api.getMaterials()
      .then(materials => {
        console.log(materials)
        this.setState({
          materials: materials
        })
      })
      .catch(err => console.log(err))
  }
}

export default Materials;
