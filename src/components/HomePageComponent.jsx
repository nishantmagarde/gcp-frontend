import React, { Component } from 'react'

class HomePageComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div style={{
                backgroundImage: 'url("office.jpg")'
              }}>
                <h1> HELLO </h1>
              </div>
        )
    }
}

export default HomePageComponent
