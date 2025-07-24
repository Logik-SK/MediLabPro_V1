
import React from 'react';
import clsx from 'clsx'; 

function ContentWrapper({ children, className = '', padding = 'p-4', spacing = 'space-y-6' }) {
  return (
    <div className={clsx(padding, spacing, className)}>
      {children}
    </div>
  );
}

export default ContentWrapper;
