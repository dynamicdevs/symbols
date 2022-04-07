import { SymbolIcon } from "@dynamic-devs/symbol-react";

interface Props {
  title: string;
  type: 'solid' | 'outline' | '';
  onClick?: () => void;
}

export const Icon = ({ title, type, onClick }: Props) => {
  return (
    <div className="flex flex-col items-center" onClick={onClick}>
      <SymbolIcon
        name={title}
        iconClass="symbol-md"
        type={type}
        className="my-2 text-primary-dynamic-900"
      />
      <span className="font-normal text-caption-01 text-primary-neutral-300">{title}</span>
    </div>
  );
}

export default Icon;
