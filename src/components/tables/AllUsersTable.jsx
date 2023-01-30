import React from "react";
import { Table, Space, Popconfirm, Tag } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SendOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import "./table.scss";
import { useNavigate } from "react-router-dom";
function AllUsersTable({ data }) {
  console.log("user table data ", data);
  const navigate = useNavigate();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Avatar",
      dataIndex: "",
      key: "img",
      render: (record) => <img src={record.img} width={50} height={50} />,
    },
    {
      title: "Phone No",
      dataIndex: "phoneNo",
      key: "phoneNo",
    },
    {
      title: "Verified",
      render: (recored) => (
        <span>
          <Tag key={recored._id} color={recored.verified ? "green" : "pink"}>
            {recored.verified ? "Yes" : "No"}
          </Tag>
        </span>
      ),
    },
    {
      title: "Actions",
      render: (record) => (
        <Space size={20}>
          <EyeOutlined className="icon primary" />
          <EditOutlined className="icon primary" />
          <Popconfirm
            title={"Are you sure?"}
            okText="Ok"
            cancelText="Cancel"
            onConfirm={() => {}}
          >
            <DeleteOutlined className="icon danger" />
          </Popconfirm>
          <SendOutlined
            className="icon success"
            onClick={() => {
              navigate("/allUsers/" + record._id);
            }}
          />
        </Space>
      ),
    },
  ];

  return <Table dataSource={data} columns={columns} />;
}

export default AllUsersTable;
