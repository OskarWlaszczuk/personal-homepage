import styled from "styled-components";

export const StyledCaption = styled.header`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.slateGray || theme.colors.white};
`;
