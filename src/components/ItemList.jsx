import React from 'react'
import SingleItems from './SingleItems';

const ItemList = ({ title }) => {

    console.log(title);

  return (
    <div className='item-list'>

        <div className='item-list__header'>
            <h2>{title} Populares</h2>
            <a href='/'>Mostrar tudo</a>
        </div>

            <div className='item-list__container'>
                <SingleItems /> 
                <SingleItems /> 
                <SingleItems /> 
                <SingleItems /> 
                <SingleItems /> 
            </div>
     </div>
  )
}

export default ItemList
