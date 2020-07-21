import dva from 'dva';
import createhistory from 'history/createBrowserHistory';

const app = dva({
  history: createhistory(),
});

app.router(require('./router').default);

app.start('#root');
