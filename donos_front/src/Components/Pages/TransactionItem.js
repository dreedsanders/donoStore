import React from 'react'

export default function TransactionItem(props) {
    return (
        <div>
            <h3>Buyer Id</h3>
            <h5>{props.item.buyer_id}</h5>
            
        </div>
    )
}
