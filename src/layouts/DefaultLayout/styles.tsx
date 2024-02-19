import { styled } from 'styled-components'

export const Container = styled.div`
  margin: 5rem auto;
  max-width: 74rem;
  height: calc(100vh - 10rem);

  .card {
    margin: 0 1.5rem;
    padding: 2.5rem;

    background-color: ${({ theme }) => theme['gray-800']};
    border-radius: 8px;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    height: 100vh;
    margin: 1.5rem;
  }
`
