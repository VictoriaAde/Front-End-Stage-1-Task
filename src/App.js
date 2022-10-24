import { render } from 'react-dom';
import { StrictMode } from 'react';
import profileImg from '../static/profile-img.svg';
import githubIcon from '../static/github.svg';
import slackIcon from '../static/slack.svg';
import zuriLogo from '../static/zuri-logo.svg';
import i4g from '../static/I4G.svg';
import shareBtn from '../static/share-button.svg';
import hamburgerBtn from '../static/hamburger-button.svg';

const App = () => {
  return (
    <StrictMode>
      <div className="flex flex-col items-center py-12 bg-milk">
        <div className="absolute top-9 right-9">
          <img
            src={hamburgerBtn}
            alt="Hamburger / menu button"
            className=" md:hidden "
          />
        </div>
        <div className="absolute top-9 right-44	">
          <img
            src={shareBtn}
            alt="Click on this icon to share this profile"
            className="hidden md:block "
          />
        </div>
        <header className="relative">
          <div className="mt-5">
            <img
              src={profileImg}
              alt="The profile"
              id="profile__img"
              className="mx-auto"
            />
          </div>
          <h1 className="mt-4 mb-12 text-gray-dark font-bold text-lg lg:text-xl">
            Vickish11
          </h1>
          <h2 id="slack" className="hidden">
            vickish
          </h2>
        </header>
        <main className="flex flex-col gap-6 text-center w-11/12 lg:w-9/12">
          <a
            href="https://twitter.com/Vickish11"
            id="twitter"
            className="py-6 px-6 text-gray-dark font-medium bg-gray-light hover:bg-hover-gray rounded-lg text-sm lg:text-lg"
          >
            Twitter Link
          </a>
          <a
            href="https://training.zuri.team/"
            id="btn__zuri"
            className="py-6 px-6 text-gray-dark font-medium bg-gray-light hover:bg-hover-gray rounded-lg text-sm lg:text-lg"
          >
            Zuri Team
          </a>
          <a
            href="http://books.zuri.team"
            id="books"
            className="py-6 px-6 text-gray-dark font-medium bg-gray-light hover:bg-hover-gray rounded-lg text-sm lg:text-lg"
          >
            Zuri Books
          </a>
          <a
            href="https://books.zuri.team/"
            id="book__python"
            className="py-6 px-6 text-gray-dark font-medium bg-gray-light hover:bg-hover-gray rounded-lg text-sm lg:text-lg"
          >
            Python Books
          </a>
          <a
            href="https://background.zuri.team"
            id="pitch"
            className="py-6 px-6 text-gray-dark font-medium bg-gray-light hover:bg-hover-gray rounded-lg text-sm lg:text-lg"
          >
            Background Check for Coders
          </a>
          <a
            href="https://books.zuri.team/design-rules"
            id="book__design"
            className="py-6 px-6 text-gray-dark font-medium bg-gray-light hover:bg-hover-gray rounded-lg text-sm lg:text-lg"
          >
            Design Books
          </a>
          <div className="flex justify-center gap-6 my-9">
            <a href="https://github.com/VictoriaAde">
              <img src={githubIcon} alt="github icon" />
            </a>
            <a href="#">
              <img src={slackIcon} alt="slack icon" />
            </a>
          </div>
        </main>

        <footer className="grid justify-center md:grid-cols-3 md:justify-between my-10  w-11/12">
          <img src={zuriLogo} alt="Zuri logo" className="md:mb-0 mb-10" />
          <p className="text-base text-gray justify-self-center md:mb-0 mb-5">
            HNG Internship 9 Frontend Task
          </p>
          <img src={i4g} alt="I4g logo" className="place-self-end" />
        </footer>
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));
