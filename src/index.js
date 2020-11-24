import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';

class ButtonClicked extends React.Component {
    constructor() {
        super();
        this.state = {clic:0};
        this.countClic = this.countClic.bind(this);
    }
    countClic() {
        this.setState(prevState => ({
            clic: prevState.clic + 1
        }));
    }
render(){
  return(
    <div>
      <h3 class="is-size-1 has-text-centered has-text-black">React Js - Fewd_lab_9</h3>
        <div className="media is-justify-content-center mt-5">
          <div className="media-one">
            <figure className="image is-128x128">
                <img class="is-rounded" src="https://www.denofgeek.com/wp-content/uploads/2019/08/star-wars-obi-wan-kenobi-1-scaled.jpg?fit=2560%2C1707" 
                type="button" onClick={this.countClic} alt="description"/>
            </figure>
          </div>
        <div className="media-one-content">
          <div className="content">
            <h3>How many fan of Obi-wan: {this.state.clic}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
}
ReactDOM.render(
    <ButtonClicked />,
    document.getElementById('root')
);