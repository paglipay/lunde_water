import React from 'react'
import {
    Table
} from 'semantic-ui-react'

function DynamicTable(props) {
    console.log('DynamicTable(props): ', props.data)
    return (
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Registration Date</Table.HeaderCell>
                    <Table.HeaderCell>E-mail address</Table.HeaderCell>
                    <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {props.data.map(e => {return(
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>)
                }
                )
                }
            </Table.Body>
        </Table>
    )
}

export default DynamicTable
