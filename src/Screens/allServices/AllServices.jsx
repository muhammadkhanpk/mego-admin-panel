import React, { useState } from "react";
import "./allservices.scss";
import { Button, Input } from "antd";
import NewServiceModel from "../../components/models/NewServiceModel";
import { useGetAllServicesQuery } from "../../redux/apis/servicesApis";
import ServicesTable from "../../components/tables/ServicesTable";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;
function AllServices() {
  const [newServiceModal, setNewServiceModal] = useState(false);
  const [query, setQuery] = useState("");
  const { data } = useGetAllServicesQuery();
  const uniqueServices = (values) => {
    let keys = ["name"];
    return values?.filter((val) =>
      val?.name?.toLocaleLowerCase().includes(query?.toLocaleLowerCase())
    );
  };
  console.log("values is ", query);
  return (
    <>
      {newServiceModal && (
        <NewServiceModel
          newServiceModal={newServiceModal}
          setNewServiceModal={setNewServiceModal}
        />
      )}

      <div className="all-services">
        <div className="services-header">
          <div>
            <h3>Total Services: {data?.length}</h3>
          </div>
          <div>
            <Button type="primary" onClick={() => setNewServiceModal(true)}>
              Add New Service
            </Button>
          </div>
          <div>
            <Input
              prefix={<SearchOutlined />}
              onChange={(e) => setQuery(e.target.value)}
              allowClear
            />
          </div>
        </div>
        <ServicesTable data={uniqueServices(data)} />
      </div>
    </>
  );
}

export default AllServices;
