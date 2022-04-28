import GridWrapper from "../GridWrapper";
import { ReactComponent as Logo } from '../../../../assets/svg/logo.svg';
import { ReactComponent as LogoFull } from '../../../../assets/svg/logo-full.svg';
import useAnalyticsEventTracker from "../../../hooks/useAnalytics";

const Footer = () => {
  const gaEventTracker = useAnalyticsEventTracker();
  
  return (
  <GridWrapper className="fixed top-0 z-10 w-full h-16 py-4 border-b-2 border-b-primary-grey-500 bg-primary-grey-600 md:py-7 md:h-20 lg:h-28 lg:py-10">
    <div className="flex justify-between col-span-4 md:col-span-8 lg:col-span-12">
      <a href="/">
        <Logo className="md:hidden" />
        <LogoFull className="hidden md:block lg:w-[157px] lg:h-8" />
      </a>

      <a 
        href={`https://ko-fi.com/${process.env['NX_KEY_KO_FI']}`} 
        className="cursor-pointer" 
        target="_blank"
        rel="noreferrer"
        onClick={() => gaEventTracker('Click', 'Donación')}
      >
        <img src='https://symbols-assets.azureedge.net/web/button-ko-fi.png' alt='Buy Me a Coffee at ko-fi.com' />
      </a>
    </div>
  </GridWrapper>
  )
};

export default Footer;
