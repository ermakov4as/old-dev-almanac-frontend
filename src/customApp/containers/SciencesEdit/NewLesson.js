import React from 'react';
import axios from 'axios';
import '../DevelopStage.css';
import Button from '../../../components/uielements/button';

const URL_API = 'http://127.0.0.1:8081';
const base_id = '1';

export default class NewLesson extends React.Component {
    handleAdd() {      
        axios
            .post(`${URL_API}/sciences/${base_id}/lessons/`, {})
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.toLessonEdit(res.data.id);
            })
    };

    toLessonEdit(id) {
        window.location.assign(`${URL_API}/sciences/${base_id}/lessons/${id}/edit`);
    };

    render() {
        return (
            <Button
                className="newLesson"
                onClick={() => {
                    this.handleAdd();
                    this.toLessonEdit('1');
                }}
            >
                +
            </Button>
        )
    }
}
