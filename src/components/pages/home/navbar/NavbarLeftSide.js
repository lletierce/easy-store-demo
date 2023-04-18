import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import Icon from '../../../reusable-ui/Icon';
import { theme } from '../../../../theme';

export default function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled>
      <Icon icon={<BsSearch />} className='search-left'/>
    </NavbarLeftSideStyled>
  )
}

const NavbarLeftSideStyled = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (min-width: 990px) {
      display: none;
  }

  .search-left{
        font-size: ${theme.fonts.size.P1};
    }
`;
