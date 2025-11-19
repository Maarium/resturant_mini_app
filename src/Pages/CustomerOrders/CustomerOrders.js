import React from 'react'
import './CustomerOrders.css'
const CustomerOrders = () => {
  return (
    <div className='customer-orders-page'>
      <div className='page-name'><img src='images/corders/back.svg'/>My Orders</div>
      <div className='order-type-buttons'>
        <button id='orders-all'>All</button>
        <button id='order-to-receive'>To Recieve</button>
        <button>Completed</button>
      </div>
      <div className='customer-orders-status-container'>
        <div className='customer-order-status-card'>
            <div className='order-status-card-left'>
            <p id='order-product-title'>Beef Burger<p>Rs. 999</p></p>
            </div>
            <div className='order-status-card-right'>
                <p>On its way</p>
                <button>Track</button>
            </div>

        </div>
        <div className='customer-order-status-card'>
            <div className='order-status-card-left'>
            <img src='images/corders/burger.svg'/>
            <p id='order-product-title'>Beef Burger<p>Rs. 999</p></p>
            </div>
            <div className='order-status-card-right'>
                <p>Packed</p>
                <button>Track</button>
            </div>

        </div>
        <div className='customer-order-status-card'>
            <div className='order-status-card-left'>
            <img src='images/corders/burger.svg'/>
            <p id='order-product-title'>Beef Burger<p>Rs. 999</p></p>
            </div>
            <div className='order-status-card-right'>
                <p id='order-status-card-date'>11, Sep 2024</p>
                <button>Review</button>
            </div>

        </div>
        <div className='customer-order-status-card'>
            <div className='order-status-card-left'>
            <img src='images/corders/burger.svg'/>
            <p id='order-product-title'>Beef Burger<p>Rs. 999</p></p>
            </div>
            <div className='order-status-card-right'>
                <p id='order-status-card-date'>11, Sep 2024</p>
                <button>Review</button>
            </div>

        </div>
        <div className='customer-order-status-card'>
            <div className='order-status-card-left'>
            <img src='images/corders/burger.svg'/>
            <p id='order-product-title'>Beef Burger<p>Rs. 999</p></p>
            </div>
            <div className='order-status-card-right'>
                <p id='order-status-card-date'>11, Sep 2024</p>
                <button>Review</button>
            </div>

        </div>
        <div className='customer-order-status-card'>
            <div className='order-status-card-left'>
            <img src='images/corders/burger.svg'/>
            <p id='order-product-title'>Beef Burger<p>Rs. 999</p></p>
            </div>
            <div className='order-status-card-right'>
                <p id='order-status-card-date'>11, Sep 2024</p>
                <button id='order-card-reviewed'>Reviewed</button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default CustomerOrders
