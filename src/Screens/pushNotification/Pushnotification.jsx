import { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Radio, Select } from "antd";
import FullPageLoading from "../../components/Loaders/Loader";

const { Option } = Select;
const people = ["Customers", "Providers"];
const country = ["PAKISTAN", "UAE"];
function Pushnotification() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleChange = (value) => {
    let values = value;
    if (value?.includes("all")) {
      form.setFieldValue("sendTo", [...people]);
    }
  };
  const handleChangeCountry = (value) => {
    let values = value;
    if (value?.includes("all-country")) {
      form.setFieldValue("country", [...country]);
    }
  };
  const handleSend = (values) => {
    console.log(values);
    // setLoading(true);
    let data = {
      title: values.title,
      description: values.description,
    };
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Send Push Notifications:</h1>
      {loading ? <FullPageLoading /> : ""}
      <Form
        form={form}
        layout="vertical"
        className="push-notification-form"
        onFinish={handleSend}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Title is required",
            },
          ]}
        >
          <Input className="input-primary" placeholder="Title" />
        </Form.Item>
        <Form.Item
          label="Short Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Short description is required",
            },
          ]}
        >
          <Input className="input-primary" placeholder="Short Description" />
        </Form.Item>
        <Form.Item
          label="Send To"
          name="sendTo"
          rules={[
            {
              required: true,
              message: "Type is required",
            },
          ]}
        >
          <Select
            onChange={handleChange}
            placeholder="Send To"
            allowClear
            mode="multiple"
          >
            <Option value="all">All</Option>
            {people?.map((v) => {
              return <Option value={v}>{v}</Option>;
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="Target Country"
          name="country"
          rules={[
            {
              required: true,
              message: "Country is required",
            },
          ]}
        >
          <Select
            onChange={handleChangeCountry}
            placeholder="Country Name"
            allowClear
            mode="multiple"
          >
            <Option value="all-country">All</Option>
            {country?.map((v) => {
              return <Option value={v}>{v}</Option>;
            })}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="btn-primary">
            Send
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Pushnotification;
