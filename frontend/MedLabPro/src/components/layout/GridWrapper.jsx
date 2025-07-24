
import React from 'react';

const GridWrapper = ({
  children,
  cols = 'grid-cols-1',
  mdCols = 'md:grid-cols-2',
  gap = 'gap-4',
  className = ''
}) => {
  const baseClasses = `grid ${cols} ${mdCols} ${gap} ${className}`.trim();

  return <div className={baseClasses}>{children}</div>;
};

export default GridWrapper;
