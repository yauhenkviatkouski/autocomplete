import styled from 'styled-components';

const DevelopmentPage = () => {
  return (
    <StyledDevelopmentPage>
      <section>
        <textarea id="prompt-textarea" />
      </section>
    </StyledDevelopmentPage>
  );
};

export default DevelopmentPage;

const StyledDevelopmentPage = styled.div`
  padding-top: 400px;
`;
