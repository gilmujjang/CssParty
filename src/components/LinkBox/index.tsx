import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cssData from "../../Assets/cssData";

const LinkBox = () => (
  <>
    {cssData.map((item) => (
      <Link to={item.link} key={`key_of_${item.link}`}>
        {item.title}
        <Image src={item.image} alt="????" />
      </Link>
    ))}
  </>
);

const Image = styled.img`
  width: 256px;
  height 160px;
`;

export default LinkBox;
