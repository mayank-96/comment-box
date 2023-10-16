import React from 'react';

const CommentBoxBody = ({ style, children, props }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export { CommentBoxBody };
