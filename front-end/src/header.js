<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> a2fcde0ddd93c3d33fccce272f42e97d9e11503c
import './header.css';


import React from 'react'
import {useState} from 'react'
import * as ReactBootStrap from "react-bootstrap"; 
import  ExpenseAction from './addExpenseModal';
import SettleUp from './settleUpModal';
import './friends.js';
import Friends from './friends.js'

function Title() {
  const [showAddExpense, setAddExpense] = useState(false);
  const [showSettleUp, setSettleUp] = useState(false);
  return (
      <div className="Title">
<<<<<<< HEAD
        
        
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="medium" variant="light">
=======
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="medium" variant="light" href="/#home">
>>>>>>> a2fcde0ddd93c3d33fccce272f42e97d9e11503c
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="/CreateGroup">Create A Group</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/allGroups">All Groups</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/Friends">Friends</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="Current Group" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/AddExpense" onClick={() => setAddExpense(true)}>Add Expense</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/SettleUp" onClick={() => setSettleUp(true)}>  Settle up</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/CurrentGroupMembers">Group members</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    <ReactBootStrap.Nav.Link href="#AllGroups">Account</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  <ReactBootStrap.Navbar.Brand href="/">TripSplit</ReactBootStrap.Navbar.Brand>
</ReactBootStrap.Navbar>
<ExpenseAction show={showAddExpense} setModal={setAddExpense}/>
<SettleUp show={showSettleUp} setModal={setSettleUp}/>





=======
import "./header.css";
import React from "react";
import { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import ExpenseAction from "./addExpenseModal";
import SettleUp from "./settleUpModal";
import "./friends.js";
import "./accountInfo.js";

function Title(props) {
  const [showAddExpense, setAddExpense] = useState(false);
  const [showSettleUp, setSettleUp] = useState(false);
  return (
    <div className="Title">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="medium"
        variant="light"
        href="/#home"
      >
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="me-auto">
            <ReactBootStrap.Nav.Link href="/CreateGroup">
              Create A Group
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/allGroups">
              All Groups
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/Friends">
              Friends
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown
              title="Current Group"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item
                href="#action/AddExpense"
                onClick={() => setAddExpense(true)}
              >
                Add Expense
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item
                href="#action/SettleUp"
                onClick={() => setSettleUp(true)}
              >
                {" "}
                Settle up
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/CurrentGroupMembers">
                Group members
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.Nav.Link href="/Account">
              Account
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav></ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
        <ReactBootStrap.Navbar.Brand href="/Home">
          TripSplit
        </ReactBootStrap.Navbar.Brand>
      </ReactBootStrap.Navbar>
      <ExpenseAction show={showAddExpense} setModal={setAddExpense} />
      <SettleUp show={showSettleUp} setModal={setSettleUp} />
>>>>>>> 6c93d4df029dc56d16e4c73becc6e3fbe4814962
    </div>
  );
}

export default Title;
