import { render } from 'react-dom';
import { StrictMode } from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <StrictMode>
      <div className="flex flex-col items-center py-12 bg-milk">
        <Header />
        <Main />
        <Footer />
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));
