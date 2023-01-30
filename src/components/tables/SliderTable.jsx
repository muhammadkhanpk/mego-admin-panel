import React from "react";
import { Table, Space, Popconfirm, Image } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SendOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import "./table.scss";
import { useNavigate } from "react-router-dom";
function SliderTable({ data }) {
  const navigate = useNavigate();
  console.log("sliders data ", data);
  const columns = [
    {
      title: "Image",
      key: "sliderImg",
      render: (record) => (
        <Image src={record.sliderImg} width={50} height={50} />
      ),
    },
    {
      title: "Url",
      dataIndex: "sliderUrl",
      key: "sliderUrl",
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

export default SliderTable;
