import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  text-align: center;
  background-color: #000000;
  color: var(--white);
  padding: 1.5rem 0;
  font-size: 13px;
`;

function Footer() {
  return (
    <StyledFooter>2024 © Desenvolvido por João Pedro Amaral | Projeto fictício sem fins comerciais.</StyledFooter>
  )
}

export default Footer