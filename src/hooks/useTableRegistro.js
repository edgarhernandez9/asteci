import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { consultaId, getDataApi } from '../store/reducer';


export const useTableRegistro = () => {

    const stateDatos = useSelector(state => state);
    const [datosRecibidos, setDatosRecibidos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentePage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(10);


    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getDataApi())
    }, []);

    useEffect(() => {
        if (stateDatos.datos.isLoading === false) {
            setDatosRecibidos(stateDatos.datos.datos.results);
            setIsLoading(stateDatos.datos.isLoading);
            
        } else {
            setDatosRecibidos([]);
            setIsLoading(stateDatos.datos.isLoading);
        }
    }, [stateDatos]);

    const indexOflastData = currentPage * dataPerPage;
    const indexOfFirtsData = indexOflastData - dataPerPage;
    const data = datosRecibidos.slice(indexOfFirtsData, indexOflastData);
    const totalPage = Math.ceil(datosRecibidos.length / dataPerPage);

    const handleClick = (pageNumber) => {

        setCurrentePage(pageNumber);

        if (pageNumber < 1) {
            setCurrentePage(1);
        } else if( pageNumber > totalPage){
            setCurrentePage(pageNumber);
        }else{
            setCurrentePage(pageNumber)
        }
    }

    const actionBtn = (id) => {
        dispatch(consultaId(id));

        navigate('/detalles');
    }

    return{

        data,
        isLoading,
        totalPage,
        currentPage,
        handleClick,
        actionBtn
    }
    
}