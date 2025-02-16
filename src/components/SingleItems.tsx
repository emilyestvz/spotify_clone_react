import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SingleItems = () => {
  return (
      <div className='single-item'>
      
            <div className='single-item__div-image-button'>
                <div className='single-item__div-image'>
                    <img 
                    className='single-item__image' 
                    src='https://i.scdn.co/image/ab67616100005174668a5535093f4cc53b1fef45'
                    alt='Imagem artista X' />
                </div>
                          
                    <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
            </div>
      
            <div className='single-item__texts'>
                <div className='single-item__2lines'>
                    <p className='single-item__title'>Oruam</p>
                    <p className='single-item__type'>Artista</p>   
                </div>
            </div>
        </div>
  );
};

export default SingleItems;
