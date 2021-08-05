import React from 'react'
import './Brief.css'
import { PortfolioButton } from './PortfolioButton'

function Brief(props) {
  return (
    <div className='project__container'>
      <div className='brief__wrapper'>
        <div className='brief__content'>
          <h3>Project Brief</h3>
          <p>{props.projectBrief}</p>
          <h3>Skill Used</h3>
          <p>{props.skills}</p>
        </div>
      </div>
      <div className='site__wrapper'>
        <div className='site__content'>
          <h3>{props.name}</h3>
          <p>{props.companyInfo} </p>
          <PortfolioButton
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            href={props.href}>
            View Website
          </PortfolioButton>
        </div>
      </div>
    </div>
  )
}

export default Brief
