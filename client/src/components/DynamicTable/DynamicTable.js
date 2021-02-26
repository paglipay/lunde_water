import React from 'react'
import {
    Table
} from 'semantic-ui-react'

function DynamicTable(props) {
    console.log('DynamicTable(props): ', props.data)
    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Custom Details</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {props.data.map(e => {
                    return (
                        <Table.Row>
                            <Table.Cell>{e.results['_id']}TEST</Table.Cell>
                            <Table.Cell>{e.results['stuff'] && e.results['stuff'].map(e => <>{e.question}<br/>{e.answer}<br/><br/></>)}</Table.Cell>

                        </Table.Row>)
                }
                )
                }
            </Table.Body>
        </Table>
    )
}

export default DynamicTable
