import React, { useState } from "react";
import { Form, Modal, Input, Button, Upload, message, Row, Col } from "antd";
import Loader from "../Loaders/Loader";
import "./modal.scss";
import { InboxOutlined, EyeOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { api, getToken } from "../../Services/Utils";
import { useParams } from "react-router-dom";
import { useGetAllSubServicesQuery } from "../../redux/apis/subServicesApis";
const { Dragger } = Upload;
const { TextArea } = Input;
function NewSubServiceModel({ newSubServiceModal, setNewSubServiceModal }) {
  const { serviceId } = useParams("serviceId");
  const { refetch } = useGetAllSubServicesQuery(serviceId);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const handleOk = () => {};
  const handleCancel = () => {
    setNewSubServiceModal(false);
  };
  const onFinish = async (values) => {
    console.log("values are ", values);
    const { name, price, description, subServiceImg, subServiceIcon } = values;

    setLoading(true);
    try {
      var formData = new FormData();
      formData.append("subServiceImg", subServiceImg);
      formData.append("subServiceIcon", subServiceIcon);
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      // formData.append("token", user.token);
      let url = `/services/saveSubService/${serviceId}`;
      console.log(url);
      const d = await api.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "JWT " + getToken(),
        },
      });
      console.log("response is ", d);
      setLoading(false);
      setNewSubServiceModal(false);
      refetch();
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  const onFinishFailed = () => {};
  return (
    <>
      {loading ? <Loader /> : null}
      <Modal
        title="Add New Sub Service Information"
        open={newSubServiceModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          // autoComplete="off"
        >
          <Row justify="space-between">
            <Col span={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter service name!",
                  },
                ]}
              >
                <Input placeholder="Enter name" />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item
                label="Price"
                name="price"
                rules={[
                  {
                    required: true,
                    message: "Please enter service price!",
                  },
                ]}
              >
                <Input type="number" placeholder="Enter price" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please enter service description!",
              },
            ]}
          >
            <TextArea rows={1} placeholder="Enter description" />
          </Form.Item>
          <Form.Item
            label="Service Icon"
            name="subServiceIcon"
            rules={[
              {
                required: true,
                message: "Icon Image is required",
              },
            ]}
          >
            <Dragger
              listType="text"
              multiple={false}
              maxCount={1}
              accept={"image/*"}
              onChange={(e) => {
                if (e.file.status === "removed") {
                  form.setFieldValue("subServiceIcon", "");
                } else {
                  form.setFieldValue("subServiceIcon", e.file.originFileObj);
                }
              }}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger>
          </Form.Item>
          <Form.Item
            label="Featured Image"
            name="subServiceImg"
            rules={[
              {
                required: true,
                message: "Image is required",
              },
            ]}
          >
            <Dragger
              listType="text"
              multiple={false}
              maxCount={1}
              accept={"image/*"}
              onChange={(e) => {
                if (e.file.status === "removed") {
                  form.setFieldValue("subServiceImg", "");
                } else {
                  form.setFieldValue("subServiceImg", e.file.originFileObj);
                }
              }}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default NewSubServiceModel;
