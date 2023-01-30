import React, { useState } from "react";
import { Form, Modal, Input, Button, Upload, message } from "antd";
import Loader from "../Loaders/Loader";
import "./modal.scss";
import { InboxOutlined, EyeOutlined } from "@ant-design/icons";
import { api, getToken } from "../../Services/Utils";
import { useGetAllSlidersQuery } from "../../redux/apis/slidersApis";
const { Dragger } = Upload;
function NewSliderModel({ newSliderModal, setNewSliderModal }) {
  const { refetch } = useGetAllSlidersQuery();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const handleOk = () => {};
  const handleCancel = () => {
    setNewSliderModal(false);
  };
  const onFinish = async (values) => {
    const { sliderUrl, sliderImg } = values;
    setLoading(true);
    try {
      var formData = new FormData();
      formData.append("sliderImg", sliderImg);
      formData.append("sliderUrl", sliderUrl);
      let url = `/sliders/saveSlider`;
      const d = await api.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "JWT " + getToken(),
        },
      });
      setLoading(false);
      setNewSliderModal(false);
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
        title="Add New Slider Banner Information"
        open={newSliderModal}
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
          <Form.Item
            label="URL"
            name="sliderUrl"
            rules={[
              {
                required: true,
                message: "Please enter slider url.",
              },
            ]}
          >
            <Input rows={2} placeholder="Enter slider url." />
          </Form.Item>
          <Form.Item
            label="Slider Image"
            name="sliderImg"
            rules={[
              {
                required: true,
                message: "Slider Image is required",
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
                  form.setFieldValue("sliderImg", "");
                } else {
                  form.setFieldValue("sliderImg", e.file.originFileObj);
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

export default NewSliderModel;
