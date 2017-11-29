// 热加载
import React from 'react'
import ChangeText from '../src'

export default class Test extends React.Component {
    render() {
        return (
          <div>
              <ChangeText hover value={ 'ddd' }/>
          </div>
        )
    }
}