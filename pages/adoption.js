import React, { PureComponent } from 'react'
import sortBy from 'lodash.sortby'
import Link from 'next/link'
import Layout from '../components/layout'
import Title from '../components/title'
import { Select, Table } from 'semantic-ui-react'

const dateOptions = [
  {
    key: 'today',
    value: 'today',
    text: 'Today',
    availability: null
  }, {
    key: 'firstweek',
    value: 'firstweek',
    text: 'First day of next week',
    availability: null
  }, {
    key: 'firstmonth',
    value: 'firstmonth',
    text: 'First day of next month',
    availability: null
  }
]

const tableData = [
  { type: 'John', name: 15, description: 'Male' },
  { type: 'Amber', name: 40, description: 'Female' },
  { type: 'Leslie', name: 25, description: 'Female' },
  { type: 'Ben', name: 70, description: 'Male' }
]

export default class extends PureComponent {
  state = {
    column: null,
    data: tableData,
    direction: null
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: sortBy(data, [clickedColumn]),
        direction: 'ascending'
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    })
  }

  render () {
    const { column, data, direction } = this.state

    return (
      <Layout>
        <Title name="Adoption Options" />

        <Select placeholder="Please select start date" options={ dateOptions } />

        <Table sortable celled fixed style={{ maxWidth: '700px' }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell sorted={column === 'type' ? direction : null} onClick={this.handleSort('type')}>
                Type
              </Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'name' ? direction : null} onClick={this.handleSort('name')}>
                Name
              </Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'description' ? direction : null} onClick={this.handleSort('description')}>
                Description
              </Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'availability' ? direction : null} onClick={this.handleSort('availability')}>
                Availability
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { data.map(({ type, name, description }) => (
              <Table.Row key={name}>
                <Table.Cell>{type}</Table.Cell>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{description}</Table.Cell>
                <Table.Cell>Button Here</Table.Cell>
              </Table.Row>
            )) }
          </Table.Body>
        </Table>
      </Layout>
    )
  }
}
