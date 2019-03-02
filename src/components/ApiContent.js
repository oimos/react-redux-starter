import React, { Component }  from 'react';

export class ApiContent extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <div>
        {
          this.props.apiContent && this.props.apiContent.map((data, index) => (
            <div key={`band_${index}`}>
              <div>name: {data.name}</div>
              <div>instrument: {data.instrument}</div>
              <hr/>
            </div>
          ))
        }
        <button onClick={() => this.props.getApiContent('/beatles')}>Get Beatles</button>
        <button onClick={() => this.props.getApiContent('/stones')}>Get Rolling Stones</button>
      </div>
    )
  }
}
