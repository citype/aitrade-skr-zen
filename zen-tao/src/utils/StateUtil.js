
import React from 'react';
import Loader from 'react-loaders'

export function changeState(component, field, newVal) {

    let state = { ...component.state }
    state[field] = newVal
    component.setState(state)
}

// 根据字段更新修改 Component 的状态
// component, 字段, newVal, 字段, newVal ......
export function changeStateFields(component, ...params) {

    let state = { ...component.state }
    const count = params.length / 2
    for (let index = 0; index < count; index++) {
        state[params[2 * index]] = params[2 * index + 1]
    }
    component.setState(state)
}

export function toggleState(component, field) {

    let flag = component.state[field] === true
    changeState(component, field, !flag)
}


export function overlay(active) {
    if (!active) {
        return null
    }
    return (<div className="full-screen-overlay"> <div className="full-screen-center "><Loader type="pacman" active /></div></div>)
}