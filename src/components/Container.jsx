import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const StyledContainer = styled(motion.div)`

  width: 100%;
  min-width: 21rem;
  max-width: 21rem;
  height: 100%;
  min-height: 23rem;
  max-height: 23rem;
  border-radius: 15px;
  background-color: ${props => {return props.theme.darkGrayishBlue}};
  @media (min-width: 420px) {
    min-width: 21rem;
    max-width: 35rem;
  }

`

function Container() {
  return (
    <StyledContainer></StyledContainer>
  )
}

export default Container
