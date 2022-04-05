import { SymbolIcon } from "@dynamic-devs/symbol-react";
import './styles.scss';

interface Props {
  title: string;
  type: string;
  onClick?: () => void;
}

export const Icon = ({ title, type, onClick }: Props) => {
  return (
    <div className="wrapped-icon" onClick={onClick}>
      <SymbolIcon
        name={title}
        iconClass="symbol-xl"
        type={type}
      />

      <span>{title}</span>
    </div>
  );
}

export default Icon;
