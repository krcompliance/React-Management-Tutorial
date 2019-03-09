import React, { Component } from 'react';
import './App.css';
import Customers from './components/Customers'

const customer = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Tony Han',
  'birthday': '691114',
  'gender': 'Male',
  'job': 'Developer'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Elena Han',
  'birthday': '701114',
  'gender': 'Female',
  'job': 'Student'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Edward Han',
  'birthday': '791114',
  'gender': 'Female',
  'job': 'HouseWife'
}]
class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return ( 
                <Customers
                key = {c.id}
                id = {c.id}
                name = {c.name}
                image = {c.image}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job}
                />
            )
          })
        }
      </div>
    )
  }
}

export default App;
