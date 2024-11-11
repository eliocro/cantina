import styled from 'styled-components';

const Spinner = styled.div`
  display: inline-block;
  width: 0.75em;
  height: 0.75em;

  border: 5px solid var(--fg);
  border-bottom-color: transparent;
  border-radius: 50%;

  opacity: 0.5;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
