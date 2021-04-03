import styled from 'styled-components';
import { scrollbarThin } from '../../../styles/scrollbar';
export const Wrapper = styled.div`
  margin: none;
  background: rgb(99, 130, 147, 0.09);
  border-left: 1px solid #638293;
  border-right: 1px solid #638293;
`;

export const TagList = styled.div`
  height: 176px;
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
