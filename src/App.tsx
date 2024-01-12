import React from "react";
import "./App.css";
import { IonRouterOutlet, IonTabBar, IonTabs } from "@ionic/react";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/" component={MainPage} exact />
        <div>예시</div>
      </IonRouterOutlet>
      <IonTabBar></IonTabBar>
    </IonTabs>
  );
}

export default App;
