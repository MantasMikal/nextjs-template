import React from 'react'

import styles from './Footer.module.scss'

import Container from '@/component/Primitive/Container'
import TextAlign from '@/component/Primitive/TextAlign'
import Type from '@/component/Primitive/Type'

const Footer = () => (
  <footer className={styles.Footer}>
    <Container center gutter size="wide">
      <TextAlign center>
        <Type as="small" size="small">
          © Example Name
        </Type>
      </TextAlign>
    </Container>
  </footer>
)

export default Footer
