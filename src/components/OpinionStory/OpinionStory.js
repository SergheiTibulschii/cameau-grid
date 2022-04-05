import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar, className }) => {
  return (
    <a href={`/story/${id}`} className={className}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <OpinionContext>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </OpinionContext>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: "context avatar";
  gap: 10px;

  @media ${QUERIES.tabletOnly} {
    grid-template-columns: auto;
    grid-template-areas: 
    "avatar"
    "context";
  }
`;

const OpinionContext = styled.div`
  grid-area: context;
`

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  grid-area: avatar;

`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
