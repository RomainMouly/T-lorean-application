import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
  Table,
} from 'reactstrap';
import classnames from 'classnames';
import PostModal from './PostModal';
import PutModal from './PutModal';
import DeleteModal from './DeleteModal';
import PostModalUsers from './PostModalUsers';
import PutModalUsers from './PutModalUsers';
import DeleteModalUsers from './DeleteModalUsers';
import PostModalBooking from './PostModalBooking';
import PutModalBooking from './PutModalBooking';
import DeleteModalBooking from './DeleteModalBooking';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [travels, setTravels] = useState([]);
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [isFilterPrice, setIsFilterPrice] = useState(false);
  const [isFilterTitle, setIsFilterTitle] = useState(false);
  const [isFilterEra, setIsFilterEra] = useState(false);
  const [isFilterLevel, setIsFilterLevel] = useState(false);
  const [isFilterCountry, setIsFilterCountry] = useState(false);

  const useForceUpdateAdmin = () => useState()[1];

  const forceUpdate = useForceUpdateAdmin();

  const handleAxios = () => {
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
  };

  useEffect(() => {
    handleAxios();
  }, []);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleFilterPrice = () => {
    setIsFilterPrice(!isFilterPrice);
    if (!isFilterPrice) {
      setTravels(travels.sort((a, b) => a.price - b.price));
    } else {
      handleAxios();
    }
  };

  const handleFilterLevel = () => {
    setIsFilterLevel(!isFilterLevel);
    if (!isFilterLevel) {
      setTravels(travels.sort((a, b) => a.level - b.level));
    } else {
      handleAxios();
    }
  };

  const handleFilterTitle = () => {
    setIsFilterTitle(!isFilterTitle);
    if (!isFilterTitle) {
      setTravels(
        travels.sort((a, b) => {
          const A = a.title.toLowerCase();
          const B = b.title.toLowerCase();
          if (A < B) return -1;
          if (A > B) return 1;
          return 0;
        })
      );
    } else {
      handleAxios();
    }
  };

  const handleFilterEra = () => {
    setIsFilterEra(!isFilterEra);
    if (!isFilterEra) {
      setTravels(
        travels.sort((a, b) => {
          const A = a.era.toLowerCase();
          const B = b.era.toLowerCase();
          if (A < B) return -1;
          if (A > B) return 1;
          return 0;
        })
      );
    } else {
      handleAxios();
    }
  };

  const handleFilterCountry = () => {
    setIsFilterCountry(!isFilterCountry);
    if (!isFilterCountry) {
      setTravels(
        travels.sort((a, b) => {
          const A = a.country.toLowerCase();
          const B = b.country.toLowerCase();
          if (A < B) return -1;
          if (A > B) return 1;
          return 0;
        })
      );
    } else {
      handleAxios();
    }
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
                    <th>
                      {' '}
                      <Button color="info" onClick={handleFilterTitle}>
                        {isFilterTitle ? 'Titre filtré' : 'Titre'}
                      </Button>
                    </th>
                    <th>description</th>
                    <th>
                      <Button color="info" onClick={handleFilterLevel}>
                        {isFilterLevel ? 'Sensation filtré' : 'Sensation'}
                      </Button>
                    </th>
                    <th>
                      <Button color="info" onClick={handleFilterPrice}>
                        {isFilterPrice ? 'Prix filtré' : 'Prix'}
                      </Button>
                    </th>
                    <th>
                      <Button color="info" onClick={handleFilterEra}>
                        {isFilterEra ? 'Epoque filtré' : 'Epoque'}
                      </Button>
                    </th>
                    <th>
                      {' '}
                      <Button color="info" onClick={handleFilterCountry}>
                        {isFilterCountry ? 'Pays filtré' : 'Pays'}
                      </Button>
                    </th>
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
                      <td>
                        <PutModal
                          refresh={forceUpdate}
                          travelId={travel.id}
                          travelTitle={travel.title}
                          travelDescription={travel.description}
                          travelLevel={travel.level}
                          travelPrice={travel.price}
                          travelEra={travel.era}
                          travelCountry={travel.country}
                        />
                      </td>
                      <td>
                        <DeleteModal travelId={travel.id} />
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
                <PostModalUsers />
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
                        <PutModalUsers
                          userId={user.id}
                          userFirstname={user.firstname}
                          userLastname={user.lastname}
                          userEmail={user.email}
                        />
                      </td>
                      <td>
                        <DeleteModalUsers userId={user.id} />
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
                <PostModalBooking />
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
                        <PutModalBooking
                          bookingId={booking.id}
                          bookingDateB={booking.date_begin}
                          bookingDateE={booking.date_end}
                          bookingTravel={booking.id_travel}
                          bookingUser={booking.id_user}
                          bookingPax={booking.numberPerson}
                        />
                      </td>
                      <td>
                        <DeleteModalBooking bookingId={booking.id} />
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
