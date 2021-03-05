import React from 'react'
import Field from '../unit/Field'
import CKEditor from 'react-ckeditor-component'
import ImageLoader from '../../utils/ImageLoader'
import getUnique from '../../utils/getUnique'
import { request } from '../../utils/request'


export default function (props) {

    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState('')
    const [image, setImage] = React.useState('')
    const [message, setMessage] = React.useState('')

    const submitNews = async (e) => {

        e.target.disbaled = true;

        let res = await request({
            route: 'news',
            method: 'POST',
            credentials: 'include',
            body: {
                highlight: title,
                body: content,
                image,
            }
        });

        if (res.status == 'success') {
            setMessage('News added successfully')
        }
        else {
            setMessage(res.message)
        }

        e.target.disbaled = false;

    }

    return (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 10}}>Edit Match</h3>

            <div style={{width: '50%'}}>
                <h4 style = {{margin: 0, marginBottom: 10}}>Add Summary</h4>
                <div style = {{display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                    <p>Action</p>
                    <select className = 'form-control'>
                        <option>Goal</option>
                        <option>Foul</option>
                        <option>Break</option>
                    </select>
                </div>
                <div style = {{display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                    <p>Team</p>
                    <select className = 'form-control'>
                        <option>None</option>
                        <option>Team A</option>
                        <option>Team B</option>
                    </select>
                </div>
                <div style = {{display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                    <p>Player</p>
                    <select className = 'form-control'>
                        
                    </select>
                </div>
                <div style = {{display: 'inline-block', width: 'calc(50% - 20px)', marginRight: 20}}>
                    <button
                        type = 'button' 
                        value = 'Done'
                        className = 'btn btn-success'
                        onClick = {submitNews}
                    >
                        <i class="glyphicon glyphicon-ok" style = {{marginRight: 5}}></i>
                        Add to Summary
                    </button>
                    
                </div>
            </div>
            
            <p>{message}</p>
            <div style = {{marginTop: 15}}>
            <button
                        type = 'button' 
                        value = 'Done'
                        className = 'btn btn-success'
                        onClick = {submitNews}
                    >
                        <i class="glyphicon glyphicon-ok" style = {{marginRight: 5}}></i>
                        Done
                    </button>
                    <button
                        type = 'button' 
                        value = 'Done'
                        className = 'btn btn-warning'
                        style = {{marginLeft: 10}}
                    >
                        <i class="glyphicon glyphicon-ban-circle" style = {{marginRight: 5}}></i>
                        Cancel
                    </button>
            </div>
        </div>
    );
}