import React, { useState } from "react";
import "./allproviders.scss";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import AllUsersTable from "../../components/tables/AllUsersTable";
import { useGetAllUsersQuery } from "../../redux/apis/usersApis";
function AllProviders() {
  const [query, setQuery] = useState("");
  const { data } = useGetAllUsersQuery();
  console.log("users data ", data);
  const uniqueUsers = (values) => {
    let keys = ["name"];
    return values?.filter((val) =>
      val?.phoneNo?.toLocaleLowerCase().includes(query?.toLocaleLowerCase())
    );
  };
  console.log("unique users ", uniqueUsers(data));
  return (
    <>
      <div className="all-users">
        <div className="users-header">
          <div>
            <h3>Total Providers: {data?.length}</h3>
          </div>

          <div>
            <Input
              prefix={<SearchOutlined />}
              onChange={(e) => setQuery(e.target.value)}
              allowClear
            />
          </div>
        </div>
        <AllUsersTable data={uniqueUsers(data)} />
      </div>
    </>
  );
}

export default AllProviders;
