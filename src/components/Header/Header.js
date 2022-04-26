import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { FAMILIES, QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {

  return (
    <Container>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <UserGroup>
            <button>
              <User size={24} />
            </button>
          </UserGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <SubscribeContainer>
        <Button>Subscriber</Button>
        <SubscriberLink>Already a subscriber?</SubscriberLink>
      </SubscribeContainer>
    </Container>
  );
};

const Container = styled.header`
  display: grid;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: auto 1fr auto;
    box-sizing: content-box;
    padding: 0 32px;
  }
`

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  grid-row: 1 / -1;

  @media ${QUERIES.laptopAndUp} {
    width: auto;
    background: none;
    color: var(--color-gray-900);
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;

  @media ${QUERIES.laptopAndUp} {
    padding: 0;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const UserGroup = styled(ActionGroup)`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const SubscribeContainer = styled.div`
  display: none;
  flex-direction: column;
  gap: 8px;
  text-align: center;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`

//TODO:  extract
const SubscriberLink = styled.a`
  font-family: ${FAMILIES.serif};
  font-size: 14px;
  line-height: 22px;
  text-decoration: underline;
`

export default Header;
