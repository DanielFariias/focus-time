import { styled } from 'styled-components'

export const Countdown = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  ${({ theme }) => theme['gray-100']};

  display: flex;

  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const NumberCard = styled.section`
  display: flex;
  gap: 1rem;

  span {
    background-color: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
export const Separator = styled.div`
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  color: ${({ theme }) => theme['green-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 1rem 0;
  }
`
