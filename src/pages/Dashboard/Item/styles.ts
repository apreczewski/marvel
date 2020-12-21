import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Wapper = styled.button`
  text-decoration: none;
  border: none;
  width: 57.69rem;
  height: 13.366rem;
  margin: 2.75rem 3.185rem 0 3.125rem;
  padding: 1.688rem 15.86rem 1.679rem 1.914rem;
  border-radius: 4.7px;
  background-color: ${colors.whiteTwo};

  display: flex;

  > img {
    width: 18.313rem;
    height: 10rem;
    margin: 0 2.397rem 0 0;
    padding: 0 0.04rem 0rem 0;
    object-fit: contain;
  }
`;

export const Content = styled.div`
  width: 19.143rem;
  height: 2.438rem;
  margin: 1.438rem 0 0 0;
  text-align: left;

  > h3 {
    color: ${colors.darkIndigo};
  }

  > h4 {
    margin: 0.438rem 0;
    color: ${colors.warmGrey};
  }

  > h6 {
    color: ${colors.warmGrey};
  }
`;
