import React from 'react';
import md5 from 'md5';

const Gravatar = ({ name }) => {
  const hash = md5(name);
  return (
    <img
      className="shoes__container--image"
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
    />
  );
};

export default Gravatar;
