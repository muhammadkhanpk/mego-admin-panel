import { Tabs } from "antd";
import React, { useState } from "react";
import AllBookingTable from "../../components/tables/AllBookingTable";
import "./allbookinglists.scss";

let bookings = [
  { id: 1, name: "xyz", location: "lhr", provider: "X", status: "Pending" },
  {
    id: 2,
    name: "yasir",
    location: "lhr",
    provider: "khan",
    status: "Completed",
  },
  {
    id: 3,
    name: "fill",
    location: "lhr",
    provider: "Zee",
    status: "Cancelled",
  },
  { id: 4, name: "gill", location: "lhr", provider: "Mk", status: "Pending" },
  {
    id: 5,
    name: "love",
    location: "lhr",
    provider: "Amir",
    status: "Cancelled",
  },
  { id: 6, name: "mez", location: "lhr", provider: "Lov", status: "Pending" },
  {
    id: 7,
    name: "shum",
    location: "lhr",
    provider: "Zoo",
    status: "Completed",
  },
  { id: 8, name: "gonz", location: "lhr", provider: "Helo", status: "Pending" },
  { id: 9, name: "hell", location: "lhr", provider: "MK", status: "Completed" },
  {
    id: 10,
    name: "khan",
    location: "lhr",
    provider: "Zee",
    status: "Cancelled",
  },
  {
    id: 11,
    name: "shoib",
    location: "lhr",
    provider: "khan",
    status: "Completed",
  },
  { id: 12, name: "fila", location: "lhr", provider: "X", status: "Pending" },
  {
    id: 13,
    name: "zinger",
    location: "lhr",
    provider: "Zoo",
    status: "Cancelled",
  },
  {
    id: 14,
    name: "bred",
    location: "lhr",
    provider: "Lov",
    status: "Completed",
  },
];
function AllBookingLists() {
  const [filterKey, setFilterKey] = useState("All");
  const filteredData = (data) => {
    if (filterKey == "All") return data;
    else if (filterKey == "Completed")
      return data.filter((d) => d.status == filterKey);
    else if (filterKey == "Pending")
      return data.filter((d) => d.status == filterKey);
    else if (filterKey == "Cancelled")
      return data.filter((d) => d.status == filterKey);
  };
  const onChange = (key) => {
    setFilterKey(key);
  };

  return (
    <div className="all-bookings">
      <h3>All Bookings List</h3>
      <div className="bookings">
        <Tabs
          defaultActiveKey="1"
          type="card"
          items={[
            {
              key: "All",
              label: `All`,
              children: <AllBookingTable data={filteredData(bookings)} />,
            },
            {
              key: "Completed",
              label: `Completed`,
              children: <AllBookingTable data={filteredData(bookings)} />,
            },
            {
              key: "Pending",
              label: `Pending`,
              children: <AllBookingTable data={filteredData(bookings)} />,
            },
            {
              key: "Cancelled",
              label: `Cancelled`,
              children: <AllBookingTable data={filteredData(bookings)} />,
            },
          ]}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default AllBookingLists;
