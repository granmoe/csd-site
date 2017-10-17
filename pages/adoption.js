import React, { PureComponent } from 'react'
import sortBy from 'lodash.sortby'
import Link from 'next/link'
import Layout from '../components/layout'
import Title from '../components/title'
import AvailabilityModal from '../components/availability-modal'
import { Select, Table, Button } from 'semantic-ui-react'

const DATE_OPTIONS = [
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

const TABLE_DATA = [
  { type: 'Lion', name: 'Bob', description: 'Just a typical lion' },
  { type: 'Monkey', name: 'George', description: 'A monkey with a criminal mind' }
]

export default class extends PureComponent {
  state = {
    column: null,
    direction: null,
    data: TABLE_DATA
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
      direction: direction === 'ascending' ? 'descending' : 'ascending',
      showModal: false
    })
  }

  render () {
    const { column, direction, data, showModal } = this.state

    return (
      <Layout>
        <Title name="Adoption Options" />

        <Select placeholder="Please select start date" options={ DATE_OPTIONS } />

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
            { data.map(({ type, name, description }, idx) => (
              <Table.Row key={name}>
                <Table.Cell>{type}</Table.Cell>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{description}</Table.Cell>
                <Table.Cell>
                  <AvailabilityModal text="Check Availability" />
                </Table.Cell>
              </Table.Row>
            )) }
          </Table.Body>
        </Table>
      </Layout>
    )
  }
}
