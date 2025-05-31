import ReactDOM from 'react-dom/client';

import * as PXUI from '../dist/px-ui.es.js';
const { Button } = PXUI;

const App = () => {
   return (
      <div>
         <h1>Test PX UI</h1>
         <Button>Hello PX UI</Button>
      </div>
   );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
