import React, { useState } from "react";
import { Form, Modal, Input, Button, Upload, message, Row, Col } from "antd";
import Loader from "../Loaders/Loader";
import "./modal.scss";
import { InboxOutlined, EyeOutlined } from "@ant-design/icons";
import { api, getToken } from "../../Services/Utils";
import { useGetAllServicesQuery } from "../../redux/apis/servicesApis";
const { Dragger } = Upload;
const { TextArea } = Input;
function NewServiceModel({ newServiceModal, setNewServiceModal }) {
  const { refetch } = useGetAllServicesQuery();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const handleOk = () => {};
  const handleCancel = () => {
    setNewServiceModal(false);
  };
  const onFinish = async (values) => {
    const { name, price, description, serviceImg, serviceIcon } = values;
    setLoading(true);
    try {
      var formData = new FormData();
      formData.append("serviceImg", serviceImg);
      formData.append("serviceIcon", serviceIcon);
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      // formData.append("token", user.token);
      let url = `/services/saveService`;
      const d = await api.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "JWT " + getToken(),
        },
      });
      setLoading(false);
      setNewServiceModal(false);
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
        title="Add New Service Information"
        open={newServiceModal}
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
            <TextArea rows={2} placeholder="Enter description" />
          </Form.Item>
          <Form.Item
            label="Service Icon"
            name="serviceIcon"
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
                  form.setFieldValue("serviceIcon", "");
                } else {
                  form.setFieldValue("serviceIcon", e.file.originFileObj);
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
            name="serviceImg"
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
                  form.setFieldValue("serviceImg", "");
                } else {
                  form.setFieldValue("serviceImg", e.file.originFileObj);
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

export default NewServiceModel;
