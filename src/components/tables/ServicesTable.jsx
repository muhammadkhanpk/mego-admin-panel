import React from "react";
import { Table, Space, Popconfirm } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SendOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import "./table.scss";
import { useNavigate } from "react-router-dom";
function ServicesTable({ data }) {
  const navigate = useNavigate();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Icon",
      dataIndex: "",
      key: "img",
      render: (record) => (
        <img src={record.serviceIcon} width={50} height={50} />
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
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
              navigate("/allSubServices/" + record._id);
            }}
          />
        </Space>
      ),
    },
  ];

  return <Table dataSource={data} columns={columns} />;
}

export default ServicesTable;
