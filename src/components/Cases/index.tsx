import React, { FC } from 'react';
import { Case } from '../../models';
import { Grid } from '@mui/material';
import { Cards } from '../Cards';
import './style.scss';

interface CasesProps {
  cases: Case[];
}

export const Cases: FC<CasesProps> = ({ cases }) => {
  return (
    <Grid container className="cases" spacing={3}>
      {cases?.map((caseItem) => (
        <Grid item key={caseItem.Id} xs={12} sm={6} className="cases__item">
          <Cards
            caseColor={caseItem.CaseColor}
            image={caseItem.Image}
            title={caseItem.Title}
            filters={caseItem.Filters}
          />
        </Grid>
      ))}
    </Grid>
  );
};
