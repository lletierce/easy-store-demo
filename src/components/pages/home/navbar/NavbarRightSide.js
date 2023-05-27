import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Icon from '../../../reusable-ui/Icon'
import { theme } from '../../../../theme/index'
import { Link } from 'react-router-dom'

export default function NavbarRightSide() {
    return (
        <NavbarRightSideStyled>
            <Icon icon={<BsSearch />} className='search-right'/>
            <Link to={"/account/login"}>
                <Icon icon={<AiOutlineUser />} className='account'/>
            </Link>
            <Icon icon={<HiOutlineShoppingBag />} className='cart'/>
        </NavbarRightSideStyled>
    )
}


const NavbarRightSideStyled = styled.div`
    display: flex;
    justify-content: flex-end;

    .search-right{
        font-size: ${theme.fonts.size.P1};
        
        @media screen and (max-width: 989px) {
            display: none;
        }
    }

    .account, .cart{
        font-size: ${theme.fonts.size.P3};
    }

    a{
        color: inherit;
        text-decoration: none;
    }
`;