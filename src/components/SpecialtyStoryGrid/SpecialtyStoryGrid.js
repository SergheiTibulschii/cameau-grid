import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
  }
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(180px, 100%), 1fr));
  gap: 12px;
`;

const SportsSection = styled.section`
  overflow: hidden;
`;

const SportsStories = styled.div`
  --gap: 12px;
  display: flex;
  gap: var(--gap);
  overflow: auto;

  & > * {
    flex: 1 0 100%;

    @media ${QUERIES.tabletAndUp} {
      flex: 1 0 calc(50% - var(--gap) / 2);
  }

    @media ${QUERIES.laptopAndUp} {
      flex: 1 0 calc(33% - var(--gap) / 2);
  }
  }
`;

export default SpecialtyStoryGrid;
