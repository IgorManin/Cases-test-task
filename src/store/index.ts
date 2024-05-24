import { createEffect, createEvent, createStore, sample } from 'effector';
import axios from 'axios';
import { ApiResponse } from '../models';

export const fetchCases = createEvent();

const getData = async () => {
  const response = await axios.get('https://services.it-cron.ru/api/cases', {
    headers: {
      Accept: 'text/plain',
      'Accept-language': 'ru',
    },
  });
  return response.data;
};

const fetchCasesFx = createEffect(getData);

export const $cases = createStore<ApiResponse>({ Error: null, Data: [] })
  .on(fetchCasesFx.doneData, (_, data) => data)
  .on(fetchCasesFx.failData, () => ({ Error: null, Data: [] }));

export const $isLoading = fetchCasesFx.pending;

sample({
  source: fetchCases,
  target: fetchCasesFx,
});
