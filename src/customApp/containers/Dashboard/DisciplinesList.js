import React from 'react';
import axios from 'axios';
import '../DevelopStage.css';

const URL_API = 'http://127.0.0.1:8081';
const URL_FRONT = 'http://localhost:3000/dashboard';

export default class DisciplinesList extends React.Component {
    state = {
        disciplines: [],
    };

    componentDidMount() {
        axios.get(`${URL_API}/sciences/`)
            .then(res => {
                console.log(res);
                this.setState({ disciplines: res.data });
            })
    };

    toDisciplineTree(id) {
        window.location.assign(`${URL_FRONT}/sciences/${id}/tree-edit`);
    };

    toDisciplineEdit(id) {
        window.location.assign(`${URL_FRONT}/sciences/${id}/edit`);
    };

    render() {
        return (
            <table>
                {this.state.disciplines.map(dicsipline =>
                    <tr key={dicsipline.id}>
                        <td>{dicsipline.name}</td>
                        <td className="treeBtn"
                            onClick={() => {
                                this.toDisciplineTree(dicsipline.id)
                            }}
                        >
                            Древо
                        </td>
                        <td className="editBtn"
                            onClick={() => {
                                this.toDisciplineEdit(dicsipline.id)
                            }}
                        >
                            Редактировать
                        </td>
                    </tr>    
                )}
            </table>
        )
    }
}