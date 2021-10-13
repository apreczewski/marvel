import styled from 'styled-components';

// import { Tooltip } from '../../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  height?: string,
  width?: string,
  position?: string
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  font-style: normal;
  display: flex;
  align-items: center;
  text-decoration: none;
  border: none;

  > input {
    text-decoration: none;
    width: 100%;
    height: 40px;

    font-size: 12px;
    padding: 0 45px 0 20px;
    border-radius: 25px;
    border: 1px solid #F2F2F2;
  }
`;

// export const Error = styled(Tooltip)`
//   height: 20px;
//   margin-left: 16px;
//   svg {
//     margin: 0;
//   }

//   span {
//     background: #15a38a;
//     color: #fff;

//     &::before {
//       border-color:  #15a38a transparent;
//     }
//   }
// `;
