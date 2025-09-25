import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// FETCH ALL COUNTRIES
const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const res = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population,currencies,maps,capital'
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  }
);

const initialState = {
  allCountries: [],
  status: 'idle',
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCountries.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allCountries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default countriesSlice.reducer;
export { fetchCountries };
