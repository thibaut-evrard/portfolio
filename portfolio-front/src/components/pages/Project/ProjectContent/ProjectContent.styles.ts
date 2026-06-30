import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  gap: 12rem;
  margin-top: 20rem;

  .markdown {
    white-space: pre-line;
    display: flex;
    flex-direction: column;
    gap: 0;

    h1 {
      font-size: 32rem;
      font-weight: 500;
    }

    h2 {
      font-size: 24rem;
      font-weight: 500;
    }

    p,
    ul,
    li {
      font-size: 18rem;
      font-weight: 300;
      line-height: 1.5;
    }

    ul {
      display: flex;
      flex-direction: column;
    }
  }

  img,
  video {
    min-width: 100%;
    border-radius: 12rem;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .size {
    &--s {
      grid-column: span 2;
    }

    &--m {
      grid-column: span 3;
    }

    &--m-l {
      grid-column: span 4;
    }

    &--l {
      grid-column: span 6;
    }
  }
`;
