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
import { useDeleteSliderMutation } from "../../redux/apis/slidersApis";
function SliderTable({ data }) {
  const navigate = useNavigate();
  const [deleteSlider, response] = useDeleteSliderMutation();
  // console.log("sliders data ", data);
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
            onConfirm={() => {
              let x = deleteSlider(record._id);
              x.then((val) => console.log(val));
            }}
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
