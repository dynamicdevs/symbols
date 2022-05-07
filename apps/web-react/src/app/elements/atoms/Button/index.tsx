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
  children: React.ReactNode;
}

export const Button = ({ className, icon, url, iconType, iconClass, onClick, target, isDisabled, children }: Props) => {
  return (
    <a href={url || '##'}
      onClick={() => (onClick && !isDisabled ? onClick() : null)}
      target={target}
      className={
        `flex items-center w-fit cursor-pointer
        ${isDisabled ? '!text-primary-neutral-400 !bg-primary-grey-500 !cursor-default' : ''}
        ${className}`
      }
    >
      { !!icon &&
        <SymbolIcon className={iconClass} name={icon} type={!iconType ? 'solid' : iconType}/>
      }
      <span>{children}</span>
    </a>
  );
}

export default Button;
