import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-gap: 72px;
  grid-template-columns: auto 1fr;
  justify-self: baseline;

  @media (max-width: ${({ theme }) => theme.breakPoints.smallLaptop}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
    width: 100%;
  };

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    grid-template-columns: 100%;
    grid-gap: 16px;
  };
`;

export const SectionWithoutImage = styled(Section)`
  grid-gap: 0px;
`;

export const Content = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileXl}px) {
    grid-gap: 12px;
  }
`;

export const Image = styled.img`
  max-width: 398px;
  max-height: 398px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakPoints.smallLaptop}px) {
    margin: auto;
  };

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileXl}px) {
    max-width: 230px;
    margin: 0;
  };

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    max-width: 135px;
    max-height: 135px;
  }
`;

export const Header = styled.h1`
    color: ${({ theme }) => theme.colors.lightThemeMineShaft || theme.colors.white};
    font-size: 38px;
    font-weight: 900;
    margin: 0;
    transition: 0.5s;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileXl}px) {
      font-size: 19px;
    };
`;

export const HeaderWithoutImage = styled(Header)`
  &:hover {
    color:${({ theme }) => theme.colors.dodgerBlue || theme.colors.scienceBlue};
  };
`;

export const Description = styled.p`
  width: 50%;
  margin: 0;
  font-size: 20px;
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.slateGray || theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileXl}px) {
    font-size: 17px;
    width: unset;
  }
`;
