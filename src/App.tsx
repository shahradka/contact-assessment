import * as React from "react";
import { Provider } from 'react-redux';
import "./css/styles.scss";
import { store } from "./redux/store";
import { Layout } from "@components/templates/layout";

const App = () => {

    return <Provider store={store}>
                <Layout title="home">
                    Contact App  Assessment!
                </Layout>    
        </Provider>
}

export default App;