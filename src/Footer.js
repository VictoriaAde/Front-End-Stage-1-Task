import zuriLogo from '../static/zuri-logo.svg';
import i4g from '../static/I4G.svg';

const Footer = () => {
  return (
    <footer className="grid justify-center md:grid-cols-3 md:justify-between my-10  w-11/12">
      <img src={zuriLogo} alt="Zuri logo" className="md:mb-0 mb-10" />
      <p className="text-base text-gray justify-self-center md:mb-0 mb-5">
        HNG Internship 9 Frontend Task
      </p>
      <img src={i4g} alt="I4g logo" className="place-self-end" />
    </footer>
  );
};
export default Footer;
