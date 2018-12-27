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
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Source</th>
              <th>Type</th>
              <th>Description</th>
              <th>Techs</th>
              <th>Field</th>
              <th>Time</th>
              <th>Creation date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.materials.map(c => <tr key={c._id}><td>{c.name}</td><td>{c.source}</td><td>{c.type}</td><td>{c.description}</td><td>{c.techs}</td><td>{c.field}</td><td>{c.time}</td> <td>{c.materialCreationDate}</td></tr>)}
          </tbody>
        </table>
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
