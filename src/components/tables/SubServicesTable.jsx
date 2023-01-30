import React from "react";
import { Table, Space, Popconfirm } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SendOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import "./table.scss";
function SubServicesTable({ data }) {
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
        <img src={record.subServiceIcon} width={50} height={50} />
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
          <Popconfirm
            title={"Are you sure?"}
            okText="Ok"
            cancelText="Cancel"
            onConfirm={() => {}}
          >
            <DeleteOutlined className="icon danger" />
          </Popconfirm>
          <EyeOutlined className="icon primary" />
          <EditOutlined className="icon primary" />
        </Space>
      ),
    },
  ];

  return <Table dataSource={data} columns={columns} />;
}

export default SubServicesTable;
