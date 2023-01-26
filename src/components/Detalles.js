import React from 'react'
import { useSelector } from 'react-redux'

export const Detalles = () => {

    const stateDatos = useSelector(state => state)
    return (
        <div>
            {
                stateDatos.datos && stateDatos.datos.datosFiltrados ?
                <table>
                    <thead>
                        <tr>
                            <th className='table'>_id</th>
                            <th className='table'>cityid</th>
                            <th className='table'>validdateutc</th>
                            <th className='table'>winddirectioncardinal</th>
                            <th className='table'>probabilityofprecip</th>
                            <th className='table'>relativehumidity</th>
                            <th className='table'>relativehumidity</th>
                            <th className='table'>name</th>
                            <th className='table'>date-insert</th>
                            <th className='table'>longitude</th>
                            <th className='table'>state</th>
                            <th className='table'>lastreporttime</th>
                            <th className='table'>skydescriptionlong</th>
                            <th className='table'>stateabbr</th>
                            <th className='table'>tempc</th>
                            <th className='table'>latitude</th>
                            <th className='table'>iconcode</th>
                            <th className='table'>windspeedkm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stateDatos.datos.datosFiltrados.map(value => (
                                <tr key={ value._id}>
                                    <td className='table'>{value._id}</td>
                                    <td className='table'>{value.cityid}</td>
                                    <td className='table'>{value.validdateutc}</td>
                                    <td className='table'>{value.winddirectioncardinal}</td>
                                    <td className='table'>{value.probabilityofprecip}</td>
                                    <td className='table'>{value.relativehumidity}</td>
                                    <td className='table'>{value.relativehumidity}</td>
                                    <td className='table'>{value.name}</td>
                                    <td className='table'>{value['date-insert']}</td>
                                    <td className='table'>{value.longitude}</td>
                                    <td className='table'>{value.state}</td>
                                    <td className='table'>{value.lastreporttime}</td>
                                    <td className='table'>{value.skydescriptionlong}</td>
                                    <td className='table'>{value.stateabbr}</td>
                                    <td className='table'>{value.tempc}</td>
                                    <td className='table'>{value.latitude}</td>
                                    <td className='table'>{value.iconcode}</td>
                                    <td className='table'>{value.windspeedkm}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table> :
                <div>Sin datos</div>
            }
            
        </div>
    )
}
