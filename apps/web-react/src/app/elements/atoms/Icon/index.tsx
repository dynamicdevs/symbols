import { SymbolIcon } from "@dynamic-devs/symbol-react";

interface Props {
  title: string;
  type: 'solid' | 'outline' | '';
  onClick?: () => void;
}

export const Icon = ({ title, type, onClick }: Props) => {
  return (
    <div className="flex flex-col items-center" onClick={onClick}>
      <div className="flex items-center justify-center w-10 h-10 rounded hover:bg-secondary-blue-300 group">
        <SymbolIcon
          name={title}
          iconClass="symbol-md text-primary-dynamic-900 group-hover:text-primary-grey-600"
          type={type}
        />
      </div>
      <span className="font-normal text-caption-01 text-primary-neutral-300 lg:text-paragraph-04">{title}</span>
    </div>
  );
}

export default Icon;
