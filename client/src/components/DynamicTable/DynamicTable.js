import React, { useState } from 'react'
import {
    Form,
    Table,
    Button
} from 'semantic-ui-react'

function DynamicTable({ data = [], headers=[] }) {
    console.log('DynamicTable(data): ', data)
    const headerProps = headers
    const tableData = data

    return (
        <>
            <Table>
                <Table.Header>
                    <Table.Row>
                        {/* <Table.HeaderCell>ID</Table.HeaderCell> */}
                        {/* <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Custom Details</Table.HeaderCell> */}
                        {headerProps.map(c => <Table.HeaderCell>{c}</Table.HeaderCell>)}
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {tableData.map(r => {
                        return (
                            <Table.Row key={r['_id']}>
                                {/* <Table.Cell><Button>Delete</Button></Table.Cell> */}
                                {/* <Table.Cell>{e.results['_id']}TEST</Table.Cell> */}
                                {/* <Table.Cell>{e.results['stuff'] && e.results['stuff'].map(e => <>{e.question}<br/>{e.answer}<br/><br/></>)}</Table.Cell>      */}
                                {headerProps.map(c => <Table.HeaderCell>{JSON.stringify(r[c])}</Table.HeaderCell>)}
                            </Table.Row>)
                    }
                    )
                    }
                    {/* {
                        (<Table.Row key={'last'}>
                            <Table.Cell><Button>Add</Button></Table.Cell>
                            {headerProps.map(c => <Table.HeaderCell>{[c]}
                                
                            </Table.HeaderCell>)}
                        </Table.Row>)
                    } */}
                </Table.Body>
            </Table>
            {/* <Button onClick={() => setTableData([...tableData, { '_id': 'ID', '2': '2', '3': '3', '4': '4' }])}>Add</Button> */}
        </>
    )
}

export default DynamicTable
