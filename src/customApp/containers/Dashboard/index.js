import React, { Component } from "react";
import LayoutContentWrapper from "../../../components/utility/layoutWrapper.js";
import LayoutContent from "../../../components/utility/layoutContent";
import DisciplinesList from "./DisciplinesList";
import NewDiscipline from "./NewDiscipline";
import MainHeader from "../MainHeader";
import '../DevelopStage.css';

export default class extends Component {
    render() {
        return (
            <LayoutContentWrapper style={{ height: "100vh" }}>
                <LayoutContent>
                    <MainHeader />
                    <header className="App-header">
                        <h1 className="App-title">Список дисциплин</h1>
                    </header>
                    <DisciplinesList />
                    <NewDiscipline />
                </LayoutContent>
            </LayoutContentWrapper>
        );
    }
}