'use client';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: auto;
  margin-block: 50rem;
  padding-inline: 40rem;

  p {
    font-size: 17rem;
    font-weight: 300;
    letter-spacing: 2%;
    line-height: 1.5;
  }

  .markdown {
    white-space: pre-line;
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-block: 50rem;
    max-width: 700px;
    width: 100%;

    h1 {
      font-size: 34rem;
      font-weight: 300;
      line-height: 1.5;
      margin-block: 30rem;
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
`;
