import GridWrapper from "../GridWrapper";
import { ReactComponent as Logo } from '../../../../assets/svg/logo.svg';
import { ReactComponent as LogoFull } from '../../../../assets/svg/logo-full.svg';

const Footer = () => (
  <GridWrapper className="fixed top-0 w-full h-16 py-4 border-b-2 border-b-primary-grey-500 bg-primary-grey-600">
    <div className="col-span-4">
      <Logo className="md:hidden" />
      <LogoFull className="hidden md:block" />
    </div>
  </GridWrapper>
);

export default Footer;
