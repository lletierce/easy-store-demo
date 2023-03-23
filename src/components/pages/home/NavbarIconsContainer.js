import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';

export default function NavbarIconsContainer() {
    return (
        <NavbarIconsContainerStyled>
            <span className='search'><BsSearch className='icon' /></span>
            <span className='account'><AiOutlineUser className='icon' /></span>
            <span className='cart'><HiOutlineShoppingBag className='icon' /></span>
        </NavbarIconsContainerStyled>
    )
}


const NavbarIconsContainerStyled = styled.div`
    border: 1px solid green;
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
`;