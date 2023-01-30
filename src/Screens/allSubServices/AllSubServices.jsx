import React, { useState } from "react";
import "./allsubservices.scss";
import { Button, Input, Descriptions } from "antd";
import NewSubServiceModel from "../../components/models/NewSubServiceModal";
import SubServicesTable from "../../components/tables/SubServicesTable";
import { SearchOutlined } from "@ant-design/icons";
import { useGetAllSubServicesQuery } from "../../redux/apis/subServicesApis";
import { useNavigate, useParams } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
const { Search } = Input;
function AllSubServices() {
  const navigate = useNavigate();
  const [newSubServiceModal, setNewSubServiceModal] = useState(false);
  const [query, setQuery] = useState("");
  const { serviceId } = useParams("serviceId");
  console.log("service id is ", serviceId);
  const { data } = useGetAllSubServicesQuery(serviceId);
  console.log("sub services are ", data);
  const uniqueSubService = (values) => {
    let keys = ["name"];
    return values?.filter((val) =>
      val?.name?.toLocaleLowerCase().includes(query?.toLocaleLowerCase())
    );
  };
  return (
    <>
      {newSubServiceModal && (
        <NewSubServiceModel
          newSubServiceModal={newSubServiceModal}
          setNewSubServiceModal={setNewSubServiceModal}
        />
      )}

      <div className="all-subservices">
        <IoReturnUpBack className="icon-back" onClick={() => navigate(-1)} />
        <Descriptions title="Main Service Information" bordered>
          <Descriptions.Item label="Name" span={2}>
            {data?.name}
          </Descriptions.Item>
          <Descriptions.Item label="Price">{data?.price}</Descriptions.Item>
          <Descriptions.Item label="Description">
            {data?.description}
          </Descriptions.Item>
        </Descriptions>
        <div className="services-header">
          <div>
            <h3>Total Sub Services: {data?.subServices?.length}</h3>
          </div>
          <div>
            <Button type="primary" onClick={() => setNewSubServiceModal(true)}>
              Add New Sub Service
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
        <SubServicesTable data={uniqueSubService(data?.subServices)} />
      </div>
    </>
  );
}

export default AllSubServices;
