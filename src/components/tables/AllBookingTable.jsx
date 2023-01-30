import React from "react";
import { Table, Space, Popconfirm, Image } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SendOutlined,
  EyeOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import "./table.scss";
import { useNavigate } from "react-router-dom";
function AllBookingTable({ data }) {
  const navigate = useNavigate();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Provider",
      dataIndex: "provider",
      key: "provider",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",

      render: (record) => (
        <Space size={20}>
          {/* <EyeOutlined className="icon primary" /> */}
          {/* <EditOutlined className="icon primary" /> */}
          <Popconfirm
            title={"Are you sure?"}
            okText="Ok"
            cancelText="Cancel"
            onConfirm={() => {}}
          >
            <DeleteOutlined className="icon danger" />
          </Popconfirm>
          {/* <SendOutlined
            className="icon success"
            onClick={() => {
              navigate("/allSubServices/" + record._id);
            }}
          /> */}
        </Space>
      ),
    },
  ];

  return <Table dataSource={data} columns={columns} />;
}

export default AllBookingTable;
