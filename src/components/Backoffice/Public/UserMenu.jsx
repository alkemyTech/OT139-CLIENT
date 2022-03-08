import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

export const UserMenu = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item to="/auth/perfil">Perfil</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}