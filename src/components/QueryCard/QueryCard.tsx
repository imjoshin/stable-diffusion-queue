import { Accordion, AccordionDetails, AccordionSummary, TextField, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Query } from "../../types"
import './QueryCard.css'
import { useQueries } from "../../contexts/useQueries";

interface QueryCardProps {
  query: Query
}

export const QueryCard = ({ query }: QueryCardProps) => {
  const {updateQuery} = useQueries()

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{query.prompt.length ? query.prompt : "New Query"}, Status: {query.status || 'Not Started'}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TextField
          id="prompt"
          label="Prompt"
          value={query.prompt}
          onChange={(e) => {
            const newQuery = {...query}
            newQuery.prompt = e.target.value
            updateQuery(newQuery)
          }}
        />
      </AccordionDetails>
    </Accordion>
  )
}