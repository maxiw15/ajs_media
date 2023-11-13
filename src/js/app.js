import API from './api';
import Controller from './сontroller';
import Layout from './layout';

const app = new Controller(new Layout(), new API());
app.init();
app.renderArticle();
