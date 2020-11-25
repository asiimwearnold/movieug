import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justfy-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;
  

  @media (max-width: 100px) {
    flex-direction: column;
  }
`;
