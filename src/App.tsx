import React, { useEffect } from 'react';
import { $cases, $isLoading, fetchCases } from './store';
import { useUnit } from 'effector-react';
import { Cases, Footer, Header } from './components';
import Box from '@mui/material/Box';
import { CircularProgress, Stack, Typography } from '@mui/material';
import './style.scss';

export const App = () => {
  const isLoading = useUnit($isLoading);
  const { Data } = useUnit($cases);

  useEffect(() => {
    fetchCases();
  }, []);

  if (isLoading) {
    return <CircularProgress className="app__loading" />;
  }

  return (
    <Box className="app">
      <Header />
      <Stack className="app__header">
        <Typography className="app__title">Кейсы</Typography>
        <Typography className="app__filters">Фильтры</Typography>
      </Stack>

      <Cases cases={Data} />
      <Footer />
    </Box>
  );
};
