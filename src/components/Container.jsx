import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import axios from 'axios'

const StyledContainer = styled(motion.div)`

  width: fit-content;
  min-width: 21rem;
  max-width: 21rem;
  height: fit-content;
  min-height: 15rem;
  max-height: 100%;
  border-radius: 15px;
  background-color: ${props => {return props.theme.darkGrayishBlue}};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 2.5rem 2.5rem 4rem 2.5rem;
  gap: 1.5rem;
  @media (min-width: 420px) {
    min-width: 15rem;
    max-width: 35rem;
  }
  > .advice-id {
    font-size: 50%;
    color: ${props => {return props.theme.neonGreen}};
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 700;
  }
  > .advice-content {
    text-align: center;
    color: white;
    font-size: 90%;
    font-weight: 500;
  }
  > .advice-devider {
    background-image: url('/src/assets/pattern-divider-mobile.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 1rem;
    @media (min-width: 420px) {
      background-image: url('/src/assets/pattern-divider-desktop.svg');
    }
  }
  > .advice-button {
    position: absolute;
    top: 100%;
    left: 50%;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: ${props => {return props.theme.neonGreen}};
    background-image: url('/src/assets/icon-dice.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    cursor: pointer;
  }

`

function Container() {

  const [advice, setAdvice] = useState(undefined)

  const getAdvice = () => {
    axios.get('https://api.adviceslip.com/advice').then(async (result) => await setAdvice(result.data.slip))
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <StyledContainer 
      initial={{ opacity: 0, scale: 0 }} 
      animate={{ opacity: 1, scale: 1, rotate: 360 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {advice &&
        <>
          <h4 className='advice-id'>Advice #{advice.id}</h4>
          <p className='advice-content'>"{advice.advice}"</p>
          <div className='advice-devider'></div>
          <motion.div 
            className='advice-button' 
            onClick={() => {getAdvice()}}
            initial={{ translate: "-50% -50%" }}
            whileHover={{ scale: 1.1, rotate: 360 }}>
          </motion.div>
        </>
      }
    </StyledContainer>
  )
}

export default Container
