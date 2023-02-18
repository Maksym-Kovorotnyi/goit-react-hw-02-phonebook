import { Component } from 'react';
import {Input} from './Input'


export default class App extends Component{
state = {
  contacts: [],
  name: ''
  }
  
  render() {
    return <>
      <Input />
      </>
  }
}
