import React, { Component } from 'react';
import api from '../../api';


class AddMaterial extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      capitals: "",
      area: "",
      description: "",
      techs: "",
      time: "",
      creationDate: "",
      message: null
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value

    this.setState(newState)
  }

  handleClick(e) {
    e.preventDefault()
    console.log(this.state.name, this.state.description)
    let data = {
      name: this.state.name,
      source: this.state.source,
      type: this.state.type,
      description: this.state.description,
      techs: this.state.techs,
      time: this.state.time,
      creationDate: this.state.creationDate,
    }
    api.postMaterials(data)
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
          name: "",
          source: "",
          type: "",
          description: "",
          techs: "",
          time: "",
          creationDate: "",
          message: `Your material '${this.state.name}' has been created`
        })
        setTimeout(() => {
          this.setState({
            message: null
          })
        }, 2000)
      })
      .catch(err => this.setState({ message: err.toString() }))
  }
  render() {
    return (
      <div className="AddMaterial">
        <h2>Add material</h2>
        <form>
          Name: <input type="text" value={this.state.name} onChange={(e) => { this.handleInputChange("name", e) }} /> <br />
          Source: <input type="text" value={this.state.source} onChange={(e) => { this.handleInputChange("source", e) }} /> <br />
          Type: <input type="text" value={this.state.type} onChange={(e) => { this.handleInputChange("type", e) }} /> <br />
          TL;DR: <textarea value={this.state.description} cols="30" rows="10" onChange={(e) => { this.handleInputChange("description", e) }} ></textarea> <br />
          Techs: <input type="text" value={this.state.techs} onChange={(e) => { this.handleInputChange("techs", e) }} /> <br />
          Time: <input type="text" value={this.state.time} onChange={(e) => { this.handleInputChange("time", e) }} /> <br />
          Material Creation date: <input type="text" value={this.state.creationDate} onChange={(e) => { this.handleInputChange("creationDate", e) }} /> <br />
          <button onClick={(e) => this.handleClick(e)}>Create material</button>
        </form>
        {this.state.message && <div className="info">
          {this.state.message}
        </div>}
      </div>
    );
  }
}

export default AddMaterial;
