import * as React from "react";
import { Provider as ReduxProvider } from 'react-redux';
import "./css/styles.scss";
import { store } from "./redux/store";
import { Layout } from "@components/templates/layout";
import {RouterProvider} from "react-router-dom";
import { router } from "./routes";

const App = () => {

    return <ReduxProvider store={store}>
                    <Layout title="home">
                        <RouterProvider router={router} />
                    </Layout>
        </ReduxProvider>
}

export default App;