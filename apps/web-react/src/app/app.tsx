import Layout from './elements/organisms/Layout';
import Home from './page/Home';

import ReactGA from 'react-ga';
const TRACKING_ID = `${process.env['NX_TRACKING_ID']}`;
ReactGA.initialize(TRACKING_ID);

export function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
