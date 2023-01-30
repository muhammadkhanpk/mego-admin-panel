import React, { useState } from "react";
import "./dashboard.scss";
import { Divider, Select, Tabs } from "antd";
import { FaLayerGroup, FaListUl, FaUsers } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { useGetAllSubServicesQuery } from "../../redux/apis/subServicesApis";
import { useGetAllServicesQuery } from "../../redux/apis/servicesApis";
import { useGetAllUsersQuery } from "../../redux/apis/usersApis";
import { BiUserCircle } from "react-icons/bi";
import Map from "../../components/map/mapmodel/Map";
function Dashboard() {
  const { data: services = [] } = useGetAllServicesQuery();
  const { data: users = [], refetch } = useGetAllUsersQuery();
  const countries = {
    UAE: { lat: 23.4241, lon: 53.8478 },
    PK: { lat: 30.3753, lon: 69.3451 },
  };
  const [val, setVal] = useState(countries["PK"]);

  const onChange = (key) => {
    console.log(key);
  };
  const handleChange = (value) => {
    setVal(countries[value]);
  };

  console.log("values is ", val);
  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      <div className="top-row">
        <div className="main-item">
          <p>Total Services</p>
          <p>
            <b>{services.length}</b>
          </p>
          <br />
          <Divider />
          <div className="bottom">
            <IoMdRefresh className="icon" /> Just updated
          </div>
          <div className="main-child box-orange">
            <FaLayerGroup className="icon" />
          </div>
        </div>
        <div className="main-item">
          <p>Total Booking</p>
          <p>
            <b>{services.length}</b>
          </p>
          <br />
          <Divider />
          <div className="bottom">
            <IoMdRefresh className="icon" /> Just updated
          </div>
          <div className="main-child box-green">
            <FaListUl className="icon" />
          </div>
        </div>
        <div className="main-item">
          <p>Total Provider</p>
          <p>
            <b>{services.length}</b>
          </p>
          <br />
          <Divider />
          <div className="bottom">
            <IoMdRefresh className="icon" /> Just updated
          </div>
          <div className="main-child box-red">
            <FaUsers className="icon" />
          </div>
        </div>
        <div className="main-item">
          <p>Total Users</p>
          <p>
            <b>{users.length}</b>
          </p>
          <br />
          <Divider />
          <div className="bottom">
            <IoMdRefresh className="icon" /> Just updated
          </div>
          <div className="main-child box-blue">
            <BiUserCircle className="icon" />
          </div>
        </div>
      </div>
      <div className="tabs-row">
        <Tabs
          defaultActiveKey="1"
          type="card"
          items={[
            {
              key: "1",
              label: `All`,
              children: <Map user={val} />,
            },
            {
              key: "2",
              label: `Users`,
              children: <Map user={val} />,
            },
            {
              key: "3",
              label: `Providers`,
              children: <Map user={val} />,
            },
          ]}
          onChange={onChange}
        />
        <div className="select-country">
          <Select
            defaultValue="Pakistan"
            style={{
              width: 200,
            }}
            onChange={handleChange}
            options={[
              {
                value: "PK",
                label: "Pakistan",
              },
              {
                value: "UAE",
                label: "United Arab Emirates",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
