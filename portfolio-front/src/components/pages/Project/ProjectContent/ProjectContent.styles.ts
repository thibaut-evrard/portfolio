import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  gap: 12rem;

  .markdown {
    white-space: pre-line;
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-block: 50rem;
    max-width: 600px;

    h1 {
      font-size: 34rem;
      font-weight: 300;
      line-height: 1.5;
      margin-block: 15rem;
    }

    h2 {
      font-size: 24rem;
      font-weight: 300;
      line-height: 1.5;
      margin-block: 20rem;
    }

    h3 {
      font-size: 24rem;
      font-weight: 500;
      line-height: 1.5;
    }

    p,
    a,
    ul,
    li {
      font-size: 17rem;
      font-weight: 300;
      letter-spacing: 2%;
      line-height: 1.5;
    }

    p {
      margin-block: 10rem;
    }

    a {
      color: #95f0fc;
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
