import React, { useState } from 'react'
import { Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
 } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const MuiAccordion = () => {
  const [expanded, setExpanded] = useState(false)
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <>
      <Accordion expanded={expanded === 'panel1'} onChange={(event, isExpanded) => {handleChange(isExpanded, 'panel1')}}>
        <AccordionSummary 
          id='pane1-header' 
          aria-controls='panel1-content'
          expandIcon={<ExpandMoreIcon />}
          >
          <Typography>Open Me</Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography variant='subtitle1' component='p' color='textSecondary'>
              Don't give up.
            </Typography>
          </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={(event, isExpanded) => {handleChange(isExpanded, 'panel2')}}>
        <AccordionSummary 
          id='pane2-header' 
          aria-controls='panel1-content'
          expandIcon={<ExpandMoreIcon />}
          >
          <Typography>Open Me</Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography variant='subtitle1' component='p' color='textSecondary'>
              Don't give up.
            </Typography>
          </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={(event, isExpanded) => {handleChange(isExpanded, 'panel3')}}>
      <AccordionSummary 
        id='panel3-header' 
        aria-controls='panel1-content'
        expandIcon={<ExpandMoreIcon />}
        >
        <Typography>Open Me</Typography>
      </AccordionSummary>
        <AccordionDetails>
          <Typography variant='subtitle1' component='p' color='textSecondary'>
            Don't give up.
          </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel4'} onChange={(event, isExpanded) => {handleChange(isExpanded, 'panel4')}}>
      <AccordionSummary 
        id='panel4-header' 
        aria-controls='panel1-content'
        expandIcon={<ExpandMoreIcon />}
        >
        <Typography>Open Me</Typography>
      </AccordionSummary>
        <AccordionDetails>
          <Typography variant='subtitle1' component='p' color='textSecondary'>
            Don't give up.
          </Typography>
        </AccordionDetails>
    </Accordion>
    </>
  )
}
