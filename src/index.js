import React from 'react';
import s from './style/index.styl'
import propTypes from 'prop-types'
import {fromJS} from 'immutable'
import {from} from 'immutable/contrib/cursor'

class ChangeText extends React.Component {
    constructor(props) {
        super(props);
        const p = this.props;

        this.initData = {
            data: {
                value: p.value,
                openChange: false,
                hover: false,
            }
        };

        this.state = {
            $$s: fromJS(this.initData)
        };

        this.$$beforeChange = null;
    }

    _getData() {
        return from(this.state.$$s, ['data'], ($$newS) => {
            this._changeData($$newS)
        });
    }

    _changeData($$newS) {
        this.setState({$$s: $$newS})
    }

    // 点击确定
    _clickYes($$data, value) {
        $$data
          .set('openChange', false)
          .set('value', $$data.get('value'));
        this.props.onYes({value: $$data.get('value')});
    }

    // 点击取消
    _clickCancle($$data) {
        var $$mapData = this.$$beforeChange._rootData.getIn(this.$$beforeChange._keyPath);
        this.setState({$$s: fromJS({data: $$mapData})});
        this.props.onCancle({value: $$data.get('value')})
    }

    // 修改值
    _changeText($$data, value) {
        $$data.set('value', value);
        this.props.onChange({value});
    }

    // 点击修改
    _openChange($$data) {
        this.$$beforeChange = $$data;

        $$data
          .set('openChange', true)
          .set('value', $$data.get('value'));
    }

    // 去顶按钮
    yesButton() {
        const $$data = this._getData();
        const p = this.props;
        var btn = (
          <button
            onClick={ e => {
                e.stopPropagation();
                this._openChange($$data);
                p.onOpenChange({e});
            } }>
              { p.openChangeText }
          </button>
        );

        var openChange = $$data.get('openChange');

        if (!p.hover) {
            if (p.showOpenChange && !openChange) {
                return btn
            }
        }
        else {
            if (p.showOpenChange && !openChange && $$data.get('hover')) {
                return btn;
            }
        }
    }

    render() {
        const p = this.props;
        const $$data = this._getData();
        var openChange = $$data.get('openChange');

        return (
          <div
            className={ `${ s['ChangeText'] } ${ p.className } ${ openChange ? p.openRootClassName : p.closeRootClassName }` }
            style={ p.style }
            onMouseEnter={ e => {
                p.hover && !openChange && $$data.set('hover', true);
            } }
            onMouseLeave={ e => {
                p.hover && !openChange && $$data.set('hover', false);
            } }
            onClick={ e => {
                if (openChange)
                    e.stopPropagation();
                p.onClickRoot({e, open: openChange})
            } }
          >
              { p.showValue && !openChange && (
                <p className={ s['ChangeText-value'] } onClick={ e => { p.onClickTitle({}) } }>
                    { $$data.get('value') }
                </p>
              ) }

              { this.yesButton() }

              { openChange && (
                <div className={ s['ChangeText-open'] }>
                    {/*修改文本*/}
                    <input
                      style={ {width: p.inputWith} }
                      value={ $$data.get('value') }
                      placeholder={ p.placeholder }
                      onChange={ (e) => {
                          this._changeText($$data, e.target.value)
                      } }
                    />

                    {/*确定*/}
                    <button onClick={ e => { this._clickYes($$data) } }> { p.yesText } </button>

                    {/*取消*/}
                    <button onClick={ e => { this._clickCancle($$data) } }> { p.cancleText } </button>
                </div>
              ) }
          </div>
        );
    }
}
ChangeText.defaultProps = {
    onYes(){ return false },
    onCancle(){},
    onChange(){},
    onOpenChange(){},
    onClickTitle(){},
    onClickRoot(){},
    textField: {},
    inputWith: 150,
    cancleText: '取消',
    yesText: '确定',
    openChangeText: '修改',
    type: 'add',
    showValue: true,
    showOpenChange: true,
    openRootClassName: '',
    closeRootClassName: '',
    hover: false,
};

ChangeText.propTypes = {
    yesText: propTypes.string,            // 确定按钮文字
    cancleText: propTypes.string,         // 取消按钮文字
    openChangeText: propTypes.string,     // 修改按钮文字
    onYes: propTypes.func,                // 确定按钮文字
    onCancle: propTypes.func,             // 点击取消
    onChange: propTypes.func,             // 修改值
    onOpenChange: propTypes.func,         // 修改值
    onClickTitle: propTypes.func,         // 点击文本
    onClickRoot: propTypes.func,          // 点击文本
    value: propTypes.any,                 // 初始值
    inputWith: propTypes.any,             // 文本框宽
    placeholder: propTypes.any,           // 文本框提示
    className: propTypes.string,          // 根部className
    style: propTypes.object,              // 根部样式
    showValue: propTypes.object,          // 显示默认值
    showOpenChange: propTypes.bool,       // 显示修改按钮
    flagInit: propTypes.bool,             // 初始化
    openRootClassName: propTypes.string,  // 出现文本框的时候，根目录className
    closeRootClassName: propTypes.string, // 没有出现文本框的时候，根目录className
    hover: propTypes.bool,                // 鼠标移过去才显示修改按钮

};
export default ChangeText;

