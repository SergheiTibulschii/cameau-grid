import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { css } from 'styled-components';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <Story key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionsList>
          {OPINION_STORIES.map((story, index) => (
            <Opinion key={story.id} {...story} />
          ))}
        </OpinionsList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    gap: 48px 16px;
    grid-template-columns: minmax(350px, 518px) minmax(200px, 1fr);
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
  }

  @media ${QUERIES.desktopAndUp} {
    gap: 16px;
    grid-template-columns: minmax(350px, 40%) 1fr 1fr;
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const Story = styled(SecondaryStory)``

const Opinion = styled(OpinionStory)``

const bottomLineCss = css`
  --m: 16px;
  padding-bottom: var(--m);
  margin-bottom: var(--m);
  border-bottom: 1px solid #D0CDC8;
`
const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const StoryList = styled(ItemsList)`
  & ${Story} {
      &:not(:last-child) {
        ${bottomLineCss};
      }
    }

    @media ${QUERIES.tabletAndUp} {
      padding: 0 16px;
      border-left: 1px solid #D0CDC8;
    }
`

const OpinionsList = styled(ItemsList)`
 & ${Opinion} {
    ${bottomLineCss};
  }

  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;
    & ${Opinion} {
      flex: 1;
      padding-bottom: 0;
      margin-bottom: 0;
      border-bottom: 0;
    }
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
