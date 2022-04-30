import { Fragment } from 'react';
import { Discussions } from './componets/Discussions';
import { Footer } from './componets/Footer';
import { Header } from './componets/Header/Index';
import { Resume } from './componets/Resume';
import { TopicSession } from './componets/TopicSession';
import { VideoDetails } from './componets/VideoDetails';
import { ChangeLanguageProvider } from './context/ChangeLanguege';
import { TopicContextProvider } from './context/CreateTopics';
import { EditTopicContextProvider } from './context/EditTopic';
import { RemoveTopicContextProvider } from './context/RemoveTopics';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Fragment>
      
      <ChangeLanguageProvider>
          <Header/>
          <main>
            <VideoDetails/>
            <Resume/>
            <TopicContextProvider>
              <Discussions/>
              <RemoveTopicContextProvider>
                <EditTopicContextProvider>
                  <TopicSession/>
                </EditTopicContextProvider>
              </RemoveTopicContextProvider>
            </TopicContextProvider>
            <Footer/>
          </main>
      </ChangeLanguageProvider>
          <GlobalStyle/>
    </Fragment>
  );
}

export default App;
