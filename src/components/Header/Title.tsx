import { motion } from 'framer-motion';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from '../../utils/styled';
import { HeaderContext } from './Context';

export const TitleWrapper = styled.h3`
  @media (max-width: 900px) {}

  @media (max-width: 600px) {
    padding-left: 15px;
  }

  @media (max-width: 300px) {}
  
  padding-left: 76px;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  color: ${(props) => props.theme.fontColor};
  a {
    color: ${(props) => props.theme.fontColor};
    text-decoration: none;
  }
`;

export const SlideUp: React.FC<{}> = (props) => (
  <motion.div
    initial={{ y: 40 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {props.children}
  </motion.div>
);

export const SlideDown: React.FC<{}> = (props) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: 150 }}
    transition={{ duration: 1 }}
  >
    {props.children}
  </motion.div>
);

export interface HeaderTitleProps {}

export const Title: React.FC<HeaderTitleProps> = (props) => {
  const { collapsed, sticky } = React.useContext(HeaderContext);

  const [wasMounted, setWasMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (collapsed) {
      setWasMounted(true);
    }
  }, [collapsed]);

  return (
    <TitleWrapper>
      {props.children ? (
        <div data-testid="header-title">
          {sticky && collapsed ? (
            <SlideUp>
              <AnchorLink offset="150" href="#top">
                {props.children}
              </AnchorLink>
            </SlideUp>
          ) : wasMounted ? (
            <SlideDown>{props.children}</SlideDown>
          ) : null}
        </div>
      ) : null}
    </TitleWrapper>
  );
};
