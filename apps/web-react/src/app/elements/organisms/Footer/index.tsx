import { SymbolIcon } from "@dynamic-devs/symbol-react";

import GridWrapper from "../GridWrapper";
import { ReactComponent as LogoFull } from '../../../../assets/svg/logo-full.svg';

const Footer = () => (
  <GridWrapper className="py-6 bg-primary-grey-600">
    <div className="col-span-4">
      <div className="md:hidden">
        <div className="flex justify-center">
          <a href="/" className="mx-3 font-bold text-button-05 text-primary-neutral-200">About Dynamic Devs</a>
          <a href="https://www.dynamicdevs.io/" className="mx-3 font-bold text-button-05 text-primary-neutral-200">Contact</a>
        </div>
        <div className="flex justify-center py-4">
          <SymbolIcon
            name="linkedin"
            type="outline"
            iconClass="symbol-md"
            className="mx-2 icon-color-inherit fill-primary-neutral-200"
          />
        </div>
        <div className="flex items-center justify-center">
          <LogoFull className="w-[78.5px] h-4" />
          <p className="ml-4 text-caption-01 text-primary-grey-400">© Copyright 2022</p>
        </div>
      </div>

    </div>
  </GridWrapper>
);

export default Footer;
