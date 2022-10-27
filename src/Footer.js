import zuriLogo from '../static/zuri-logo.svg';
import i4g from '../static/I4G.svg';

const Footer = () => {
  return (
    <footer className="grid md:grid-cols-3 md:justify-between mt-10  w-11/12">
      <img src={zuriLogo} alt="Zuri logo" className="md:mb-0 mb-4 w-36" />
      <p className="text-base text-gray md:justify-self-center md:mb-0 mb-5">
        HNG Internship 9 Frontend Task
      </p>
      <img src={i4g} alt="I4g logo" className="md:place-self-end w-28" />
    </footer>
  );
};
export default Footer;
