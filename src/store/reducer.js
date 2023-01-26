import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getDataApi = createAsyncThunk('obtenerDatosApi', async () => {

    const response = await fetch('https://api.datos.gob.mx/v1/condiciones-atmosfericas')
        .then((res) => res.json())
        .then(( data ) => data);
    return response;
});


export const crearDatos = createSlice(({
    name: 'condicionAtmosferica',
    initialState: {
        datos: null,
        isLoading: true,
        datosFiltrados: []
    },
    reducers: {
        consultaId: (state, action) => {

            if (state.datos) {
                const filtrado = state.datos.results.filter( detalles => detalles._id === action.payload);
                state.datosFiltrados = filtrado;
            } else {
                state.datosFiltrados = []
            }
        }
        
    },
    extraReducers: (builder) => {
        builder.addCase(getDataApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.datos = action.payload;
        })
    }
}));

export const { consultaId } = crearDatos.actions;
export default crearDatos;