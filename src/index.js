import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './app.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import registerServiceWorker from './registerServiceWorker';

const muiTheme = getMuiTheme({
    floatingLabelFocusStyle: {
        color: "red"
    }
});

ReactDOM.render((
    <BrowserRouter>  
        <MuiThemeProvider muiTheme={ muiTheme }>    
            <App />
        </MuiThemeProvider>      
    </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
