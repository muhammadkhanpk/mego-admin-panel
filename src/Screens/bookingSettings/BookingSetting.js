import { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import FullPageLoading from "../../components/Loaders/Loader";
import axios from "axios";
import { api } from "../../Services/Utils";
function BookingSetting() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSend = (values) => {
    const d = {
      diameter: parseInt(values.diameter),
    };
    let finalData = {
      id: "diameter",
      data: d,
    };

    setLoading(true);
    api
      .post("/general/saveDiameter", finalData)
      .then((response) => {
        setLoading(false);
        form.resetFields();
        message.success("Diameter is saved");
      })
      .catch((e) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    api
      .get("/general/findDiameter")
      .then((response) => {
        if (!!response.data) {
          form.setFieldsValue({
            diameter: response.data.diameter,
            submit: "Update",
          });
        }
      })
      .catch((e) => {});
  }, [loading]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Set Request Search Diameters in Kilometers
      </h1>
      {loading ? <FullPageLoading /> : ""}
      <Form
        form={form}
        layout="vertical"
        className="push-notification-form"
        onFinish={handleSend}
      >
        <Form.Item
          label="Diameter"
          name="diameter"
          rules={[
            {
              required: true,
              message: "Diameter is required",
            },
          ]}
        >
          <Input
            className="input-primary"
            placeholder="Diameter is required in kilometers"
            value="a"
            type="number"
          />
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="submit"
            name="submit"
            className="btn-primary"
            type="primary"
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default BookingSetting;
