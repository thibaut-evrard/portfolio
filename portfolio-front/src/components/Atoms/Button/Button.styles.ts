import styled, { css } from 'styled-components';
import { IButton } from './Button.types';
import { COLORS } from '@/constants/style';

export const Button = styled.button<IButton>(
  ({ $highlight = false }) => css`
    // behavior
    cursor: pointer;

    // position
    position: relative;
    width: fit-content;

    // display
    display: flex;
    padding: 10rem 20rem;

    // cosmetics
    border: none;
    font-size: 18rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${COLORS.WHITE};
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 24rem;

    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
    }
    ${
          $highlight &&
          css`
            background-color: rgba(0, 0, 0, 0.6);
          `
        }
    transition: background-color 0.3s ease-in-out;
  `
);
