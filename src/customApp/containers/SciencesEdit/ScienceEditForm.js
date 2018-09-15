import React from 'react';
import axios from 'axios';
import '../DevelopStage.css';
import Button from '../../../components/uielements/button';
import { Input } from 'antd';
//import Editor from '../../../components/uielements/editor';

const URL_API = 'http://127.0.0.1:8081';
const URL_FRONT = 'http://localhost:3000/dashboard';
const base_id = '1';

export default class ScienceEditForm extends React.Component {
    state = {
        sciences: [],
        sc_lessons: [],
        isShowed: false,
        /*editorState: null,
        loading: false,
        iconLoading: false*/
    };

    componentDidMount() {
        axios.get(`${URL_API}/sciences/${base_id}/edit`)
            .then(res => {
                console.log(res);
                this.setState({ sciences: res.data });
                this.setState({ sc_lessons: res.data[0].lessons})
            })
    };

    handleCancel() {
        window.location.assign(`${URL_FRONT}/sciences`);
    };

    handleSave() {
        const sc = {
            name: this.state.name,
            desc: this.state.desc,
        };

        axios.put(`${URL_API}/sciences/${base_id}/`, {sc})
            .then(res => {
                alert('Saved!');
                console.log(res);
                this.setState({ sciences: res.data });
            });
    };

    handleChangeName = event => {
        this.setState({ name: event.target.value});
    };

    handleChangeDesc = event => {
        this.setState({ desc: event.target.value});
    };

    handleChangeContent = event => {
        this.setState({ content: event.target.value});
    };

    handleChangeVideo = event => {
        this.setState({ video: event.target.value});
    };

    toLessonEdit(id) {
        window.location.assign(`${URL_FRONT}/sciences/${base_id}/edit/${id}/edit`);
    };

    changeShowed = event => {
        this.setState(prevState => ({
            isShowed: !prevState.isShowed
        }));
    };

    render() {
        /*const onEditorStateChange = editorState => {
            this.setState({ editorState });
          };
        let editorOption = {
            style: { width: '90%', height: '70%' },
            editorState: this.state.editorState,
            toolbarClassName: 'home-toolbar',
            wrapperClassName: 'home-wrapper',
            editorClassName: 'home-editor',
            onEditorStateChange: onEditorStateChange,
            uploadCallback: uploadCallback,
            toolbar: { image: { uploadCallback: uploadCallback } },
            onChange: this.handleChangeContent,
            placeholder: science.name
            };*/
        
        return (
            <div>
                {this.state.sciences.map(science =>
                    <div key={science.id}>
                        <span className="formTitle">Название</span>
                        <form>
                            <Input
                                size="large"
                                onChange={this.handleChangeName}
                                placeholder={science.name}
                                className="nameInput"
                            />
                            <Button
                                className="save"
                                onClick={() => {
                                    this.handleSave();
                                }}
                            >
                                save
                            </Button>
                            <Button
                                className="cancel"
                                onClick={() => {
                                    this.handleCancel();
                                }}
                            >
                                cancel
                            </Button>
                        </form>
                        <span className="formTitle">Описание</span>
                        <textarea
                            className="descInput"
                            type="text"
                            name="desc"
                            onChange={this.handleChangeDesc}
                            placeholder={science.desc}    
                        />
                        
                        <span className="formTitle">Содержимое</span>
                        <textarea
                            className="contentInput"
                            type="text"
                            name="content"
                            onChange={this.handleChangeContent}
                            placeholder={science.content}    
                        />
                        <span className="formTitle">Ссылка на видео</span>
                        <Input
                            size="large"
                            onChange={this.handleChangeVideo}
                            placeholder={science.video}
                            className="videoInput"
                        />
                        <div className="extraMargin">
                            <span className="formTitleAdd">
                                Список уроков
                            </span>
                            <span 
                                className="showHideButton"
                                onClick={this.changeShowed}    
                            >
                                {this.state.isShowed ? 'Скрыть' : 'Показать'}
                            </span>
                        </div>
                    </div>
                )}
                {this.state.isShowed ?    
                    <div>
                        {this.state.sc_lessons.map(lesson => 
                            <table 
                                className="sciencesTable" 
                                key={lesson.id}
                            >
                                <tr>
                                    <td>{lesson.name}</td>
                                    <td className="editBtn"
                                        onClick={() => {
                                            this.toLessonEdit(lesson.id)
                                        }}
                                    >
                                        Редактировать
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">{lesson.desc}</td>
                                </tr>
                            </table>
                        )}
                    </div>
                : null}
            </div>
        )
    }
}


/*
<input
    className="nameInput"
    type="text"
    name="name"
    onChange={this.handleChangeName}
    placeholder={science.name}    
/>



<Editor {...editorOption} />

*/