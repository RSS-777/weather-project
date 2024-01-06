import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWeatherData = createAsyncThunk(
    'weather/fetchWeatherData',
    async (nameCity) => {
        const apiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;
        const weatherApi = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${nameCity}&days=7&lang=uk`);
        const resp = await weatherApi.json();
        if (!weatherApi.ok) {
            throw 'Error fetching data'
        }
        return resp;
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: [],
        indexCard: 0,
        status: '',
        error: null,
    },
    reducers: {
        setIndexCard: (state, action) => {
            state.indexCard = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchWeatherData.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchWeatherData.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
                state.data = [];
            });
    },
});

export const { setIndexCard } = weatherSlice.actions;
export default weatherSlice.reducer;


