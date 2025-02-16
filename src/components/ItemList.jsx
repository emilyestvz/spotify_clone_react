import React from 'react';
import SingleItems from './SingleItems';
import { Link } from 'react-router-dom';

const ItemList = ({ title, items, itemsArray, path, idPath }) => {

  return (
      <div className='item-list'>

        <div className='item-list__header'>
            <h2>{title} Populares</h2>
            <Link to={path} className='item-list__link'>Mostrar tudo</Link>
        </div>

            <div className='item-list__container'>
                {itemsArray
                  .filter((currentObj, index) => index < items)
                  .map((currentObj, index) => (
                    <SingleItems
                    idPath={idPath}
                    {...currentObj} 
                    key= {`${title}-${index}`} />
              ))}
            </div>
      </div>
  );
};

export default ItemList;
