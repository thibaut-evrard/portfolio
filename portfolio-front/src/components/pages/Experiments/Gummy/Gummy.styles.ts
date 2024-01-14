import { WHITE } from '@/constants/style';
import styled from 'styled-components';

export const Container = styled.div({
  width: '100%',
  height: '100%',
  maxHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black'
});

export const Headline = styled.h1({
  fontFamily: 'gummy',
  color: WHITE,
  fontSize: '300rem'
});

export const ContentContainer = styled.div({
  position: 'absolute'
});
