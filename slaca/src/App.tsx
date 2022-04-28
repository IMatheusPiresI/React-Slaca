import { Fragment } from 'react';
import { Discussions } from './componets/Discussions';
import { Footer } from './componets/Footer';
import { Header } from './componets/Header/Index';
import { Resume } from './componets/Resume';
import { TopicSession } from './componets/TopicSession';
import { VideoDetails } from './componets/VideoDetails';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <VideoDetails/>
        <Resume/>
        <Discussions/>
        <TopicSession/>
        <Footer/>
      </main>
      <GlobalStyle/>
    </Fragment>
  );
}

export default App;
