import { render } from 'react-dom';
import { StrictMode } from 'react';
import profileImg from '../static/profile-img.svg';

const App = () => {
  return (
    <StrictMode>
      <div className="flex flex-col items-center py-12 bg-milk">
        <header className="">
          <div className="mt-5">
            <img src={profileImg} alt="" />
          </div>
          <h1 className="mt-4 mb-14 text-gray-dark font-bold">Annette Black</h1>
        </header>
        <main className="flex flex-col gap-6 text-center w-11/12 lg:w-9/12">
          <a
            href="https://twitter.com/Vickish11"
            className="py-6 px-6 text-gray-dark font-medium bg-gray-light hover:bg-hover-gray rounded-lg"
          >
            Twitter Link
          </a>
          <a
            href="https://training.zuri.team/"
            className="py-6 px-6 text-gray-dark font-medium bg-gray-light hover:bg-hover-gray rounded-lg"
          >
            Zuri Team
          </a>
          <a
            href="http://books.zuri.team"
            className="py-6 px-6 text-gray-dark font-medium bg-gray-light hover:bg-hover-gray rounded-lg"
          >
            Zuri Books
          </a>
          <a
            href="https://books.zuri.team/"
            className="py-6 px-6 text-gray-dark font-medium bg-gray-light hover:bg-hover-gray rounded-lg"
          >
            Python Books
          </a>
          <a
            href="https://background.zuri.team"
            className="py-6 px-6 text-gray-dark font-medium bg-gray-light hover:bg-hover-gray rounded-lg"
          >
            Background Check for Coders
          </a>
          <a
            href="https://books.zuri.team/design-rules"
            className="py-6 px-6 text-gray-dark font-medium bg-gray-light hover:bg-hover-gray rounded-lg"
          >
            Design Books
          </a>
        </main>
      </div>

      <footer></footer>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));
