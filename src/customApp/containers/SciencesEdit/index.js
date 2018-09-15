import React, { Component } from "react";
import LayoutContentWrapper from "../../../components/utility/layoutWrapper.js";
import LayoutContent from "../../../components/utility/layoutContent";
import '../DevelopStage.css';
import MainHeader from "../MainHeader";
import ScienceEditForm from "./ScienceEditForm";
import NewLesson from "./NewLesson";

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: "100vh" }}>
        <LayoutContent>
          <MainHeader />
          <header className="App-header">
            <h1 className="App-title">Редактирование дисциплины</h1>
          </header>
          <ScienceEditForm />
          <NewLesson />
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
