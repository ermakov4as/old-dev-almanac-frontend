import React from 'react';
import './DevelopStage.css';

export default class NewDiscipline extends React.Component {
    render() {
        return (
            <header className="App-header">
                <table classname="headTable">
                    <tr className="headTr">
                        <td className="headTableTd">Дисциплины</td>
                        <td></td>
                        <td className="headTableTd">Я пользователь</td>
                    </tr>
                </table>
            </header>
        )
    }
}