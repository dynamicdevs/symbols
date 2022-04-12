import { FC } from 'react';

type Props = {
  className?: string;
};

const GridWrapper: FC<Props> = ({
  className,
  children,
}) => (
  <div className={className}>
    <div className="mx-auto w-[calc(100%-3rem)] md:w-[calc(100%-5rem)] lg:w-[calc(100%-120px)] xl:w-[calc(100%-240px)]">
      <div className="symbol-grid">
        {children}
      </div>
    </div>
  </div>
);

export default GridWrapper;
