import React from 'react';
import {

    Button
} from 'semantic-ui-react'

function Invoice({ loadInvoices }) {

    return (
        <div>
            Invoice
            <Button onClick={() => {
                console.log('LOAD')
                loadInvoices({})
            }}>Load</Button>
        </div>
    )
}

export default Invoice

