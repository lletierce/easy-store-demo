import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import Icon from '../../../reusable-ui/Icon';

export default function NavbarIconsContainer() {
    return (
        <NavbarIconsContainerStyled>
            <Icon icon={<BsSearch />} className='search'/>
            <Icon icon={<AiOutlineUser />} className='account'/>
            <Icon icon={<HiOutlineShoppingBag />} className='cart'/>
        </NavbarIconsContainerStyled>
    )
}


const NavbarIconsContainerStyled = styled.div`
    display: flex;
    justify-content: center;

    .search{
        font-size: 18px;
    }

    .account, .cart{
        font-size: 24px;
    }
`;