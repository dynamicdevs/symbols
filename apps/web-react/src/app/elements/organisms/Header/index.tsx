import GridWrapper from "../GridWrapper";
import { ReactComponent as Logo } from '@assets/svg/logo.svg';
import { ReactComponent as LogoFull } from '@assets/svg/logo-full.svg';
import useAnalyticsEventTracker from "@/hooks/useAnalytics";
import { SymbolIcon } from "@dynamic-devs/symbol-react";

const Footer = () => {
  const gaEventTracker = useAnalyticsEventTracker();
  
  return (
  <GridWrapper className="fixed top-0 z-10 w-full h-16 py-4 border-b-2 border-b-primary-grey-500 bg-primary-grey-600 md:py-7 md:h-20 lg:h-28 lg:py-10">
    <div className="flex justify-between col-span-4 md:col-span-8 lg:col-span-12">
      <a href="/">
        <Logo className="md:hidden" />
        <LogoFull className="hidden md:block lg:w-[157px] lg:h-8" />
      </a>

      <button className="button-md bg-secondary-blue-300 w-28 hover:bg-secondary-blue-200">
        <a 
          href={`https://ko-fi.com/${process.env['NX_KEY_KO_FI']}`} 
          target="_blank"
          rel="noreferrer"
          className="flex justify-center"
          onClick={() => gaEventTracker('Click', 'Donación')}
        >
          <SymbolIcon
            name="kofi"
            type="solid"
            iconClass="symbol-sm text-primary-grey-600"
            className="icon-color-inherit"
          />
          <span className="ml-1 font-bold text-button-05 text-primary-grey-600">Support us</span>
        </a>
      </button>
    </div>
  </GridWrapper>
  )
};

export default Footer;
