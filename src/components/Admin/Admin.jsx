import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  //   Card,
  // Button,
  //   CardTitle,
  //   CardText,
  Row,
  Col,
  Table,
} from 'reactstrap';
import classnames from 'classnames';
import PostModal from './PostModal';
import PutModal from './PutModal';
import DeleteModal from './DeleteModal';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [travels, setTravels] = useState([]);
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api-airbnb-node.herokuapp.com/api/travels/`)
      .then((result) => result.data)
      .then((data) => setTravels(data));
    axios
      .get(`https://api-airbnb-node.herokuapp.com/api/users/`)
      .then((result) => result.data)
      .then((data) => setUsers(data));
    axios
      .get(`https://api-airbnb-node.herokuapp.com/api/reservations/`)
      .then((result) => result.data)
      .then((data) => setBookings(data));
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
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => {
              toggle('4');
            }}
          >
            Bookings
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
                <PostModal />
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
                    <th colSpan="2">actions</th>
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
                      <td>
                        <PutModal travel={travel} travel_id={travel.id} />
                      </td>
                      <td>
                        <DeleteModal travel={travel} travel_id={travel.id} />
                      </td>
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
              <div className="text-center">
                <PostModal />
              </div>
              <Table hover>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>nom</th>
                    <th>prénom</th>
                    <th>e-mail</th>
                    <th colSpan="2">actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr>
                      <th scope="row">{user.id}</th>
                      <td>{user.lastname}</td>
                      <td>{user.firstname}</td>
                      <td>{user.email}</td>
                      <td>
                        <PutModal />
                      </td>
                      <td>
                        <DeleteModal />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <div className="text-center">
                <PostModal />
              </div>
              <Table hover>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>départ</th>
                    <th>retour</th>
                    <th>voyage</th>
                    <th>user</th>
                    <th>pax</th>
                    <th colSpan="2">actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr>
                      <th scope="row">{booking.id}</th>
                      <td>{booking.date_begin}</td>
                      <td>{booking.date_end}</td>
                      <td>{booking.id_travel}</td>
                      <td>{booking.id_user}</td>
                      <td>{booking.numberPerson}</td>
                      <td>
                        <PutModal />
                      </td>
                      <td>
                        <DeleteModal />
                      </td>
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
