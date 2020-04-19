import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Chat extends Component{
  constructor(props){
    super(props)

    this.state = {
      view:false, 
    };
  }
  
  async componentWillMount(){
  }

  ToggleView(){
    if(this.state.view)
      this.setState({view:false})
    else{
      this.setState({view:true}) 
    }  
  }

  render(){
    return(
    <div class="Chat">
      {!this.state.view ? (
        <Button onClick={()=> this.ToggleView()}>Need Help?</Button>
      ):(
        <div>
          <div>
          </div>
          <div>
            <input 
              type='text' />
          </div>
        </div>
      )}
    </div>
  );
  }
}

export default Chat;
