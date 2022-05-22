import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Ul = styled.ul`
  position: relative;
  transform: skewY(-15deg);
`;

const Li = styled.li`
  position: relative;
  list-style: none;
  width: 200px;
  background: #3e3f46;
  padding: 15px;
`;

const A = styled.a`
  text-decoration: none;
  display: block;
`;

function D3Menu() {
  return (
    <Background>
      <Ul>
        <Li>
          <A>HOME</A>
        </Li>
        <Li>
          <A>ABOUT</A>
        </Li>
        <Li>
          <A>LOREM</A>
        </Li>
        <Li>
          <A>IPSUM</A>
        </Li>
        <Li>
          <A>PORTFOLIO</A>
        </Li>
        <Li>
          <A>MONEY</A>
        </Li>
      </Ul>
    </Background>
  );
}

export default D3Menu;
