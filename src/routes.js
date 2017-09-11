import {History} from './components/pages/History';
import FormContainer from './components/pages/Record/FormContainer';
import App from './components/App';

export const routes = [{
    path: '/record/',
    component: FormContainer
}, {
    path: '/history/',
    component: History
},{
    path: '/',
    component: App
}];

