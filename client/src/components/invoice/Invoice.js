import React, { useEffect } from 'react';
import {

    Button
} from 'semantic-ui-react'

function Invoice({ loadInvoices }) {

    // useEffect(() => {
    //     props.load()

    // }, []);

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

