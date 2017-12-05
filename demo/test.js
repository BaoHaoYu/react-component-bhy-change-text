// 热加载
import React from 'react'
import ChangeText from '../src'

export default class Test extends React.Component {
    render() {
        return (
          <div>
              <h2> Change Text Test</h2>
              <ChangeText hover value={ 'ddd' }/>
          </div>
        )
    }
}