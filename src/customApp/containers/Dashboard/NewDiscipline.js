import React from 'react';
import axios from 'axios';
import '../commonStyle.css';
import Button from '../../../components/uielements/button';

const URL_API = 'http://127.0.0.1:8081';
const URL_FRONT = 'http://localhost:3000/dashboard';

export default class NewDiscipline extends React.Component {
    handleAdd() {      
        axios
            .post(`${URL_API}/sciences/`, {})
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.toDisciplineEdit(res.data.id);
            })
    };

    toDisciplineEdit(id) {
        window.location.assign(`${URL_FRONT}/sciences/${id}/edit`);
    };

    render() {
        return (
            <Button
                className="newDicsipline"
                onClick={() => {
                    this.handleAdd();
                    this.toDisciplineEdit('1');
                }}
            >
                Создать новую
          </Button>
        )
    }
}