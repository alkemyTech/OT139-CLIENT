import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

export const AdminMenu = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item to="/backoffice">Backoffice</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
