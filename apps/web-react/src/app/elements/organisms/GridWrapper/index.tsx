import { FC } from 'react';

type Props = {
  className?: string;
  notVerticalGap?: boolean;
  hasInherit?: boolean;
};

const GridWrapper: FC<Props> = ({
  className,
  hasInherit,
  children,
  notVerticalGap,
}) => (
  <div className={className}>
    <div
      className={`container ${hasInherit ? 'h-[inherit]' : ''}`}
    >
      <div
        className={`symbol-grid ${hasInherit ? 'h-[inherit]' : ''} ${
          notVerticalGap
            ? 'gap-y-0 sm:gap-y-0 md:gap-y-0 lg:gap-y-0 xl:gap-y-0 2xl:gap-y-0'
            : ''
        }`}
      >
        {children}
      </div>
    </div>
  </div>
);

export default GridWrapper;
