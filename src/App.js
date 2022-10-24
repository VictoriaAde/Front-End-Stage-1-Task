import { render } from 'react-dom';
import { StrictMode } from 'react';
import profileImg from '../static/profile-img.svg';

const App = () => {
  return (
    <StrictMode>
      <header className="">
        <div>
          <img src={profileImg} alt="" />
        </div>
        <h1 className="">Annette Black</h1>
      </header>
      <section className="flex flex-col-reverse  bg-red-500">
        <a href="https://twitter.com/Vickish11">Twitter Link</a>
        <a href="https://training.zuri.team/">Zuri Team</a>
        <a href="http://books.zuri.team">Zuri Books</a>
        <a href="https://books.zuri.team/">Python Books</a>
        <a href="https://background.zuri.team">Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules">Design Books</a>
      </section>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));
