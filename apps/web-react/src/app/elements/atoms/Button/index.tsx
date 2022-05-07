import { SymbolIcon } from "@dynamic-devs/symbol-react";

interface Props {
  color?: 'primary',
  className: string;
  url?: string,
  isDisabled?: boolean;
  icon?: string;
  iconType?: 'solid' | 'outline',
  iconClass?: string,
  target?: '_blank' | '_self';
  onClick?: () => void;
  download?: string;
  children: React.ReactNode;
}

export const Button = ({ className, icon, url, iconType, iconClass, onClick, target, isDisabled, download, children }: Props) => {
  return (
    <a href={url || ''}
      onClick={() => (onClick && !isDisabled ? onClick() : null)}
      target={target}
      className={
        `flex items-center justify-center w-fit cursor-pointer
        ${isDisabled ? '!text-primary-grey-400 !bg-primary-grey-500 !cursor-default' : ''}
        ${className}`
      }
      download={download}
    >
      { !!icon &&
        <SymbolIcon className={iconClass} name={icon} type={!iconType ? 'solid' : iconType}/>
      }
      <span>{children}</span>
    </a>
  );
}

export default Button;
