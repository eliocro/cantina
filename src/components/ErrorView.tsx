import styled from 'styled-components';

export default function ErrorView({ err }: { err: Error }) {
  return (
    <StyledSection>
      <strong>Error:</strong> {err.message}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  margin-top: 2rem;
  padding: 1.5rem;

  border-radius: 0.5rem;
  background-color: #ffe0e1;
  color: #000;
`;
