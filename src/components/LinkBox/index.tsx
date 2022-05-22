import React from 'react';
import { Link } from 'react-router-dom';
import cssData from '../../Assets/cssData';

const LinkBox = () => (
  <>
    {cssData.map((item) => (
      <Link to={item.link} key={`key_of_${item.link}`}>
        {item.title}
      </Link>
    ))}
  </>
);

export default LinkBox;
