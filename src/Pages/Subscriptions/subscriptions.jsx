import React, { useContext } from 'react';
import Subscription from '../../Components/Subscription/subscription';
import { productContext } from '../../Context/productContext';
import './subscriptions.css';

function Subscriptions() {
  const {subscriptions} = useContext(productContext);
  return (
    <div className='subs-page'>
      <p className='subs-heading'>Become the Member of Tyagi Fitness Club</p>
      <div className="subs-container">
      {subscriptions.map((item, i) => {
            return (
              <Subscription name={item.name} desc={item.description} features={item.features} price={item.price} bg={item.bg} img={item.image} bgBtn={item.bgBtn}/>
            );
          })}
      </div>
    </div>
  )
}

export default Subscriptions
