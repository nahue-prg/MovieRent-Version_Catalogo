import React from 'react'
import { TbMovie } from 'react-icons/tb';
import Logo from '../Logo/Logo';

const DescripcionPagina = () => {
  return (
    <div className='container'>
        <p style={{
        textAlign:'center',
        marginTop:'60px',
        fontWeight:'bolder'
        }}>
                    ¡Bienvenidos a  <Logo dark={true} />, la nueva forma de ver tus películas y series favoritas sin compromiso! 
        </p>
        <p style={{
                textAlign:'justify',
                marginTop:'10px',
                lineHeight:'2rem'
                }}>
                  Con nuestra aplicación web, puedes alquilar tus títulos favoritos de manera eficiente y sin costos adicionales. 
                  <b>No más suscripciones mensuales que pagas sin importar si ves o no los contenidos.</b>
                  Nuestra plataforma cuenta con una amplia variedad de títulos, desde clásicos hasta estrenos recientes. 
                  Además, nuestro catálogo se actualiza constantemente para asegurar que siempre tengas algo nuevo y emocionante para ver.
                  Con "MovieRent", puedes alquilar una película o serie por un precio razonable y verlos durante un período de tiempo específico. 
                  Puedes seleccionar solo lo que realmente quieres ver y no tener que preocuparte por pagar por contenido adicional que no utilizaras. Además, nuestra plataforma ofrece una excelente calidad de reproducción, para que puedas disfrutar de tu contenido favorito en alta definición.
        </p>
        <p style={{
                textAlign:'center',
                marginTop:'20px',
                lineHeight:'2rem'
                }}>
                  ¡Únete a nosotros hoy y descubre la comodidad y flexibilidad de alquilar tus películas y series favoritas en línea!
        </p>
</div>
  )
}

export default DescripcionPagina