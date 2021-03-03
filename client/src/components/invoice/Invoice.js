import React, { useEffect } from 'react'

function Invoice({ loadInvoices }) {

    // useEffect(() => {
    //     props.load()

    // }, []);

    return (
        <div>
            Invoice
            <button onClick={() => {
                console.log('LOAD')
                loadInvoices({})
            }}>Load</button>
        </div>
    )
}

export default Invoice

