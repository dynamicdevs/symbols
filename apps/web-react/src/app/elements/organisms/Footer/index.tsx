import { SymbolIcon } from "@dynamic-devs/symbol-react";

import GridWrapper from "../GridWrapper";
import { ReactComponent as LogoFull } from '../../../../assets/svg/logo-full.svg';

const Footer = () => (
  <GridWrapper className="py-6 bg-primary-grey-600">
    <div className="flex flex-col col-span-4 md:col-span-8 lg:col-span-12 md:flex-row md:justify-between md:mr-5 lg:mr-0">
      <div className="flex flex-col md:order-2 md:flex-row md:items-center">
        <div className="flex justify-center">
          <a href="https://www.dynamicdevs.io" target="_blank" className="mr-6 font-bold text-button-05 text-primary-neutral-200" rel="noreferrer">About Dynamic Devs</a>
          <a href="https://www.dynamicdevs.io/#contactSection" target="_blank" className="font-bold text-button-05 text-primary-neutral-200" rel="noreferrer">Contact</a>
        </div>
        <div className="flex justify-center py-4 md:py-0 md:ml-6">
          <a href="https://www.linkedin.com/company/dynamic-devs/" target="_blank" rel="noreferrer" className="h-6">
            <SymbolIcon
              name="linkedin"
              type="outline"
              iconClass="symbol-md text-primary-neutral-200"
              className="icon-color-inherit"
            />
          </a>
          <a href="https://gitlab.com/dynamicdevs/startup/symbol/sym-front-nx-component" target="_blank" rel="noreferrer" className="h-6 ml-4">
            <SymbolIcon
              name="gitlab"
              type="outline"
              iconClass="symbol-md text-primary-neutral-200"
              className="icon-color-inherit"
            />
          </a>
          <a href="https://www.figma.com/file/trj9OcnB8vAdKWZH0WasBE/Design-System-%7C-Symbols" target="_blank" rel="noreferrer" className="h-6 ml-4">
            <SymbolIcon
              name="figma"
              type="outline"
              iconClass="symbol-md text-primary-neutral-200"
              className="icon-color-inherit"
            />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center md:order-1 md:flex-col md:justify-start">
        <a href="/">
          <LogoFull className="w-[78.5px] h-4 md:w-[157px] md:h-8" />
        </a>
        <p className="ml-4 text-caption-01 text-primary-grey-400 md:ml-0">© Copyright 2022</p>
      </div>
    </div>
  </GridWrapper>
);

export default Footer;
