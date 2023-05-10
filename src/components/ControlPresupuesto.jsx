import { useState, useEffect } from "react"
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import { CircularProgress, 
    CircularProgressLabel,  
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription} from '@chakra-ui/react'
import 'react-circular-progressbar/dist/styles.css'


const ControlPresupuesto = ({gastos, 
    presupuesto,
    setGastos,
    setPresupuesto,
    setIsValidPresupuesto
}) => {
    
    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastado;
        
        //Calcular el procentaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);

        
        setDisponible(totalDisponible)
        setGastado(totalGastado)
        
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1200);

    }, [gastos])
    


    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style:'currency',
            currency:'USD'
        })
    }
  
  const handleResetApp = () => {
    const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?')

    if(resultado) {
        setGastos([])
        setPresupuesto(0)
        setIsValidPresupuesto(false)
    
    }
  }
  
    return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgress value={porcentaje} size='120px' color='#3B82F6'>
                    <CircularProgressLabel>{porcentaje}% Gastado</CircularProgressLabel>
                    </CircularProgress>
            </div>
            <div className="contenido-presupuesto">
                <button
                    className="reset-app"
                    type='button'
                    onClick={handleResetApp}
                >
                    Resetear app
                </button>
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
                <p
                    className="{`${disponible <= 0 ? 'negativo' : ''}`"
                >
                    <span>Disponible: </span> {formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearCantidad(gastado)}
                </p>
            </div>
    </div>
  )
}

export default ControlPresupuesto