import React from 'react'
import './style.css'
import { Nav } from "react-bootstrap"

export default function NavBarAbout() {
    return (
       
        <Nav className="justify-content-center mt-5" >
          <Nav.Item>
            <Nav.Link href="/about" className="active_class">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  href="/passion" className="active_class">Passion</Nav.Link>
          </Nav.Item>
        </Nav>
     
    )
}