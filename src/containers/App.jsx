import React from 'react';
import '../styles/components/App.scss';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Loading from '../components/Loading';
import AppContext from '../context/AppContext';
import useInitialData from '../hooks/useInitialData';

const App = () => {

  const { appLoading, data } = useInitialData();
  const renderList = () => (
    <div>
      {appLoading ? (
        <Loading />
      ) : (
          <AppContext.Provider value={data}>
            <Header>
              <About />
            </Header>
            <div id='container'>
              <Profile />
              <Experience />
              <Academic />
              <Skills />
              <Interest />
              <Languages />
            </div>
          </AppContext.Provider>
        )
      }
    </div>
  );
  return <>{renderList()}</>;
};

export default App;
