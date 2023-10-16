import React from 'react';

const CommentBoxFooter = ({ style, children, props }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export { CommentBoxFooter };
