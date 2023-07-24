// import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import Nav from './nav';

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
        SwiftMart           
        </NavLink>
        <Nav/>

    </MainHeader>
  )

  
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
  a {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
`;

export default Header
