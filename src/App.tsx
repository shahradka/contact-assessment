import * as React from "react";
import { Provider } from 'react-redux';
import "./css/styles.scss";
import { store } from "./redux/store";
import {Text} from '@components/atoms/text';

const App = () => {

    return <Provider store={store}>
                <div>
                    Contact App  Assessment!
                </div>    
        </Provider>
}

export default App;