import styled from 'styled-components';
import { scrollbarThin } from '../../../styles/scrollbar';
export const Wrapper = styled.div`
  position: relative;
  height: 275px;
  width: 230px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(105px, auto));
  grid-template-rows: repeat(auto-fill, minmax(25px, 25px));
  grid-gap: 5px;
  justify-content: flex-start;
  padding: 5px 0 5px 5px;

  overflow: auto;
  grid-template-areas: "avalue avalue";

  ${scrollbarThin};
`;
