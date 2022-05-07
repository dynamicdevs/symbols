import GridWrapper from "../GridWrapper";
import { ReactComponent as Logo } from '@assets/svg/logo.svg';
import { ReactComponent as LogoFull } from '@assets/svg/logo-full.svg';
import useAnalyticsEventTracker from "@/hooks/useAnalytics";
import Button from "@elements/atoms/Button";

const Footer = () => {
  const gaEventTracker = useAnalyticsEventTracker();

  return (
  <GridWrapper className="fixed top-0 z-10 w-full h-16 py-4 border-b-2 border-b-primary-grey-500 bg-primary-grey-600 md:py-7 md:h-20 lg:h-28 lg:py-10">
    <div className="flex justify-between col-span-4 md:col-span-8 lg:col-span-12">
      <a href="/">
        <Logo className="md:hidden" />
        <LogoFull className="hidden md:block lg:w-[157px] lg:h-8" />
      </a>

      <Button
        className="btn-md btn-primary-solid"
        icon="kofi" iconClass="symbol-sm"
        target="_blank"
        url={`https://ko-fi.com/${process.env['NX_KEY_KO_FI']}`}
        onClick={() => gaEventTracker('Click', 'Donación')}
      >
        Support us
      </Button>
    </div>
  </GridWrapper>
  )
};

export default Footer;
