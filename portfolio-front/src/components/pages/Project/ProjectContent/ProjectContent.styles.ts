import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  gap: 12rem;

  .markdown {
    white-space: pre;
    grid-column: 1 / -1;

    h1 {
      font-size: 48rem;
      font-weight: 500;
    }

    h2 {
      font-size: 32rem;
      font-weight: 500;
    }

    p {
      font-size: 18rem;
      font-weight: 400;
    }
  }

  img,
  video {
    border-radius: 12rem;
    max-width: 100%;
  }

  .size {
    &--s {
      grid-column: span 2;
    }

    &--m {
      grid-column: span 3;
    }

    &--l {
      grid-column: span 6;
    }
  }
`;
