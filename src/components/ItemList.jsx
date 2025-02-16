import React from 'react'
import SingleItems from './SingleItems';
import { artistArray } from '../assets/database/artists';

const ItemList = ({ title, items }) => {

  return (
      <div className='item-list'>

        <div className='item-list__header'>
            <h2>{title} Populares</h2>
            <a href='/' className='item-list__link'>Mostrar tudo</a>
        </div>

            <div className='item-list__container'>
                {artistArray
                  .filter((currentObj, index) => index < items)
                  .map((currentObj, index) => (
                    <SingleItems key= {`${title}-${index}`} />
              ))}
            </div>
      </div>
  );
};

export default ItemList;
