import React from 'react'
import styled from 'styled-components';
import Logo from './Logo';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';

export default function Navbar() {
  return (
    <NavbarStyled>
        <div className='heading'><Logo /></div>
        <div className='icons'>
          <span className='search'><BsSearch className='icon'/></span>
          <span className='account'><AiOutlineUser className='icon'/></span>
          <span className='cart'><HiOutlineShoppingBag className='icon'/></span>
        </div>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  border: 2px solid red;
  font-size: 24px;
  width: 1100px;

  display: grid;
  grid-template-areas: "heading icons";
  grid-template-columns: 1fr 120px;
  column-gap: 1.5rem;
  
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
  margin: 0 auto;



  .heading{
    border: 1px solid yellow;
    display: flex;
    align-items: center;
  }
  .icons{
    border: 1px solid yellow;
    display: flex;
    justify-content: center;

    .search{
      height: 44px;
      width: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
        .icon{
          font-size: 18px;
          cursor: pointer;
        &:hover {
            color: #FFFFFF;
            transform: scale(1.2);
        }
        }
    }

    .account{
      height: 44px;
      width: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon{
        font-size: 24px;
        cursor: pointer;
        &:hover {
            color: #FFFFFF;
            transform: scale(1.2);
        }
      }
    }

    .cart{
      height: 44px;
      width: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon{
        font-size: 24px;
        cursor: pointer;
        &:hover {
            color: #FFFFFF;
            transform: scale(1.2);
        }
      }
    }

    
  }
`;