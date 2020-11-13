import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  //   Card,
  Button,
  //   CardTitle,
  //   CardText,
  Row,
  Col,
  Table,
} from 'reactstrap';
import classnames from 'classnames';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [travels, setTravels] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api-airbnb-node.herokuapp.com/api/travels/`)
      .then((result) => result.data)
      .then((data) => setTravels(data));
    axios
      .get(`https://api-airbnb-node.herokuapp.com/api/users/`)
      .then((result) => result.data)
      .then((data) => setUsers(data));
  }, []);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
          >
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
          >
            Trips
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => {
              toggle('3');
            }}
          >
            Users
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Welcome Marty!</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <div className="text-center">
                <Button>Ajouter un voyage</Button>
              </div>
              <Table hover>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>titre</th>
                    <th>description</th>
                    <th>sensation</th>
                    <th>prix</th>
                    <th>époque</th>
                    <th>pays</th>
                    <th>photos</th>
                    <th>modifier</th>
                    <th>supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  {travels.map((travel) => (
                    <tr>
                      <th scope="row">{travel.id}</th>
                      <td>{travel.title}</td>
                      <td>{travel.description}</td>
                      <td>{travel.level}</td>
                      <td>{travel.price}</td>
                      <td>{travel.era}</td>
                      <td>{travel.country}</td>
                      <td>{travel.id.url}</td>
                      <td>hello</td>
                      <td>goodbye</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <Table hover>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>nom</th>
                    <th>prénom</th>
                    <th>e-mail</th>
                    <th>modifier</th>
                    <th>supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr>
                      <th scope="row">{user.id}</th>
                      <td>{user.lastname}</td>
                      <td>{user.firstname}</td>
                      <td>{user.email}</td>
                      <td>hello</td>
                      <td>goodbye</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Admin;
