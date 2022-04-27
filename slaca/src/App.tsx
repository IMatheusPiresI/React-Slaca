import { Fragment } from 'react';
import { Header } from './componets/Header/Index';
import { VideoDetails } from './componets/VideoDetails';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <VideoDetails/>
      </main>
      <GlobalStyle/>
    </Fragment>
  );
}

export default App;
