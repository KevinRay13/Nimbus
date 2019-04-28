import React, { Component } from 'react';
import { Button, ButtonIcon } from '@rmwc/button';
import { TextField } from '@rmwc/textfield';
import '../App.scss';
//import { CircularProgress } from "@rmwc/circular-progress";
import '@material/button/dist/mdc.button.css';
import '@material/textfield/dist/mdc.textfield.css';

class Form extends Component {
  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.props.loadWeather} className='formContainer'>
        <TextField id='form' outlined label='City...' name='city' />
        <div className='spacer' />
        <TextField id='form' outlined label='Country...' name='country' />
        {/* <input type="text" name="city" placeholder="City..." /> */}
        {/* <input type="text" name="country" placeholder="Country..." /> */}
        <Button id='button' label='Get Weather' outlined />
      </form>
    );
  }
}
export default Form;
