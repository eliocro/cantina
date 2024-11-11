import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <StyledDiv>
      <header>
        <img src="/logo.svg" alt="Star Wars" />
      </header>
      <main>{children}</main>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 0 1.5rem 2rem;
  height: 100%;
  overflow: auto;

  background-color: #000;
  background-image: url(/stars.jpg);
  background-size: cover;

  > header,
  main {
    margin: 2rem auto;
    max-width: calc(1024px - 3rem);
  }

  > header img {
    max-width: 80%;
  }

  main {
    padding: 2rem 1.5rem;
    border-radius: 0.5rem;
    color: var(--fg);
    background-color: var(--bg);
  }
`;
