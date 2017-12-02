import React from 'react';
import propTypes from 'prop-types'
import { fromJS, is } from 'immutable'
import { from } from 'immutable/contrib/cursor'

// 基础类，封装了一些基本方法，为immutable数据服务
class Base extends React.Component {
    constructor(props) {
        super(props);
        this.initData = {
            data: this._initData()
        };

        this.state = {
            $$s: fromJS(this.initData)
        };
    }

    // 通用
    componentWillReceiveProps(nextProps) {
        // flagInit 从非true 变成 true 重新执行初始化
        // changeInit 发生改变，触发Init
        if ((this.props.flagInit !== true && nextProps.flagInit === true) || (this.props.changeInit !== nextProps.changeInit))
            this.setState({ $$s: fromJS({ data: this._initData(nextProps) }) })
    }

    // 优化
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.watchUpdate ? !is(this.state.$$s, nextState.$$s) : true
    }

    // 通用
    _getData() {
        return from(this.state.$$s, ['data'], ($$newS) => {
            this._changeData($$newS)
        });
    }

    // 通用
    _changeData($$newS) {
        this.setState({ $$s: $$newS })
    }

    // 需要重构，初始化数据
    _initData(props = this.props) {

    }
}

Base.defaultProps = {
    flagInit: false,
    watchUpdate: false,
    changeInit: null,
};

Base.propTypes = {
    flagInit: propTypes.bool,             // 初始化
    watchUpdate: propTypes.bool,          // 监视更新
    changeInit: propTypes.any             // 发生改变，触发初始化函数
};

export default Base;