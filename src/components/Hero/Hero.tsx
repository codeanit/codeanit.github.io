import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from '../../utils/styled';

const HeroImgWrapper = styled.div`
  @media (max-width: 700px) {
    position: relative;
    left: calc(-50vw + 50%);
    position: a;
    width: 100vw;
  }
  max-width: 880px;
  margin-bottom: 30px;
`;

interface HeroImgProps {
  className?: string;
  fluid: FluidObject;
  imgStyle: Record<string, string>;
}

const HeroImg: React.FC<HeroImgProps> = (props) => (
  <HeroImgWrapper>
    <Img
      className={props.className}
      imgStyle={props.imgStyle}
      fluid={props.fluid}
    />
  </HeroImgWrapper>
);

const HeroInfo = styled.div`
  margin-bottom: 30px;
  p {
    color: #8a8a90;
    font-size: 16px;
    font-weight: 500;
  }
`;

const HeroSubtitle = styled.h3``;

const HeroTitle = styled.h1``;

const HeroWrapper = styled.div`
  @media (max-width: 600px) {
    padding-left: 15px;
  }

  padding-left: 76px;
`;

class Hero extends React.Component<{ id?: string }> {
  public static Img = HeroImg;
  public static Info = HeroInfo;
  public static Subtitle = HeroSubtitle;
  public static Title = HeroTitle;

  render() {
    const { id, children } = this.props;
    return (
      <HeroWrapper data-testid="hero" id={id}>
        {children}
      </HeroWrapper>
    );
  }
}

export { Hero };
