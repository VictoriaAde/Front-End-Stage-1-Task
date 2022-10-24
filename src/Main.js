import githubIcon from '../static/github.svg';
import slackIcon from '../static/slack.svg';

const Main = () => {
  return (
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
      <div className="flex justify-center gap-6 mb-20 mt-5">
        <a href="https://github.com/VictoriaAde">
          <img src={githubIcon} alt="github icon" />
        </a>
        <a href="#">
          <img src={slackIcon} alt="slack icon" />
        </a>
      </div>
    </main>
  );
};

export default Main;
