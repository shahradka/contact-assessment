import * as React from "react";
import { Provider as ReduxProvider } from 'react-redux';
import "./css/styles.scss";
import { store } from "./redux/store";
import {RouterProvider} from "react-router-dom";
import { router } from "./routes";

const App = () => {
    return <ReduxProvider store={store}>
                <RouterProvider router={router} />
        </ReduxProvider>
}

export default App;