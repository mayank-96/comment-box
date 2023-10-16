import React from 'react';

const CommentBoxHeader = ({ style, children, props }: any) => {
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

export { CommentBoxHeader };
