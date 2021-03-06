import React from 'react';
import LogoImage from '../Logo';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { Title } from './Title';
import { Wrapper } from './Wrapper';
import { Flex, Heading, Link } from '@primer/components'
import { SwitchTheme } from '../SwitchTheme';
// import { useTheme } from '../../context/ThemeContext';

// const TwitterIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//   >
//     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//   </svg>
// );

// const TwitterLinkWrapper = styled('div')`
//   svg {
//     margin-top: 4px;
//     fill: ${(p) => p.theme.blue};
//   }
// `;

interface HeaderProps {
  sticky?: boolean;
  slim?: boolean;
  collapsableOnScroll?: boolean;
}
class Header extends React.Component<HeaderProps> {
  public static Wrapper = Wrapper;
  public static Logo = Logo;
  public static Title = Title;
  public static Navigation = Navigation;

  render() {
    const { children, collapsableOnScroll, sticky, slim, title } = this.props;

    return (
      <Wrapper title={title} collapsableOnScroll={collapsableOnScroll} sticky={sticky} slim={slim}>
        {children}
      </Wrapper>
    );
  }
}

export interface MainHeaderProps {
  sticky?: boolean;
  slim?: boolean;
  collapsableOnScroll?: boolean;
  title?: string;
  themeSwitcher?: boolean;
}

const DefaultHeader: React.FC<MainHeaderProps> = (props) => {
  // const theme = useTheme();
  return (
    <Header
      slim={props.slim}
      sticky={props.sticky}
      collapsableOnScroll={props.collapsableOnScroll}
    >
      <Flex>
        <Header.Logo alt="codeanit.com logo" aria-label="codeanit.com blog">
          <LogoImage/>
        </Header.Logo>

        {/* <Heading fontSize={6} mb={1}><Link style={{ textDecoration: `none`, color: theme.dark ? `white` : `black`}} to={`/`}>codeanit</Link></Heading> */}

        
      </Flex>
      <Flex>
        {/* <TwitterLinkWrapper>
          <OutboundLink
            className="h-card"
            data-testid="twitter-link"
            aria-label="Follow me on Twitter"
            title="Follow me on Twitter"
            rel="me"
            href="https://twitter.com/codeanit"
            style={{ textDecoration: 'underline' }}
          >
            <LinkButton
              aria-label="Follow me on Twitter"
              title="Follow me on Twitter"
            >
              <TwitterIcon />
            </LinkButton>
          </OutboundLink>
        </TwitterLinkWrapper> */}
        <SwitchTheme />
      </Flex>
      
    </Header>
  );
};
export default Header;
export { DefaultHeader, Logo, Navigation, Title, Wrapper };
