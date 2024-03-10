import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const instance = axios.create({
  baseURL: 'https://65e8436b4bb72f0a9c4ec71a.mockapi.io/',
});

export const getAllAdvertsThunk = createAsyncThunk(
  'adverts/getAll',
  async (page = 1, thunkApi) => {
    try {
      const { data } = await instance.get(`/adverts?page=${page}&limit=12`);
      return data;
    } catch (error) {
      Notify.failure('Oops, something went wrong.');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
