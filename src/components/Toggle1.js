
import React, { Component } from 'react';
import Switch from './switch';
export class Toggle extends Component {
    static defaultProps = { onToggle : () => {}}
    state={on: false};
    toggle = () => {
        // console.log('Test');        
        this.setState(({on}) => ({on: !on}), () => {
            this.props.onToggle(this.state.on)
        } ) ;   
    }
  render() {
    const {on}  = this.state;
    return (
      <div onClick={this.toggle}>
        <Switch on={on}/>
      </div>
    )
  }
}

export default Toggle;
