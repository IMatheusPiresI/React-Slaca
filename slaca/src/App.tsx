import { Fragment } from 'react';
import { Footer } from './componets/Footer';
import { Header } from './componets/Header/Index';
import { Resume } from './componets/Resume';
import { VideoDetails } from './componets/VideoDetails';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <VideoDetails/>
        <Resume/>
        <Footer/>
      </main>
      <GlobalStyle/>
    </Fragment>
  );
}

export default App;
