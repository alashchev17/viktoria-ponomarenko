import styled from 'styled-components'

export const ScrollableElement = styled.div`
  scrollbar-width: thin;
  scrollbar-color: #445ddb rgba(255, 255, 255, 0.05);

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05); // /* Uncomment if needed */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #445ddb;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: hsl(230, 68%, 46%);
  }
`
