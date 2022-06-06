import React, { Component } from 'react'
import '../About/About.css'
import CardPost from './Component/CardPost'

export default class Post extends Component {
    render() {
        return (
            <div className='Post'>
                <CardPost/>
                <CardPost/>
                <CardPost/>
                <CardPost/>
                <CardPost/>
                <CardPost/>
                <CardPost/>
                <CardPost/>
            </div>
        )
    }
}
