import shareBtn from '../static/share-button.svg';
import hamburgerBtn from '../static/hamburger-button.svg';
import profileImg from '../static/profile-img.svg';

const Header = () => {
  return (
    <div>
      <div className="absolute top-9 right-9">
        <img
          src={hamburgerBtn}
          alt="Hamburger / menu button"
          className=" md:hidden cursor-pointer"
        />
      </div>
      <div className="absolute top-9 right-44	">
        <img
          src={shareBtn}
          alt="Click on this icon to share this profile"
          className="hidden md:block cursor-pointer"
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
          @vickish11
        </h1>
        <h2 id="slack" className="hidden">
          vickish
        </h2>
      </header>
    </div>
  );
};
export default Header;
