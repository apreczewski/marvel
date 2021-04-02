import styled from 'styled-components';
import { scrollbarThin } from '../../../styles/scrollbar';
export const Wrapper = styled.div`
  margin: none;
`;

export const TagList = styled.div`
  height: 156px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(115px, auto));
  grid-template-rows: repeat(auto-fill, minmax(27px, 27px));
  grid-gap: 5px;
  justify-content: flex-start;
  padding: 5px;
  overflow: auto;
  grid-template-areas: "avalue avalue";

  ${scrollbarThin};

  margin: none;
`;
