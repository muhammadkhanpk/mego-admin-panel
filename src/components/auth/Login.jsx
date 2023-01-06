import React, { useState, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio, message } from "antd";
import mego from "../../assets/mego.png";
import axios from "axios";
//loader
import Loader from "../Loaders/Loader";
//Redux
export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const onFinishLogin = async (values) => {
    setLoading(true);
    let data = {
      ...values,
      email: values.email.toLowerCase(),
    };
    try {
      let url = process.env.REACT_APP_BASE_URL;
      const res = await axios.post(`${url}/admins/loginAdmin`, data);
      const d = res.data;
      sessionStorage.setItem("uid", JSON.stringify(d.token));
      navigate("/dashboard");
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div className="main_login_div">
      {loading ? <Loader /> : ""}
      <div className="login_background_div">
        <div className="login_content_div">
          <div className="login_wlp_div"></div>
          <div className="login_form_div">
            <div className="login_form_content_div">
              <div className="login_form_content_upper_div">
                <div className="login_form_content_upper_logo_div">
                  <div className="logo_div">
                    <img className="logo_img" src={mego} />
                  </div>
                </div>
              </div>
              <div className="login_form_content_from_div">
                <div className="form_div">
                  <div>
                    <h2 style={{ textAlign: "center" }}>
                      {"Welcome to Mego Services Admin"}
                    </h2>
                  </div>

                  <>
                    <Form
                      name="normal_login"
                      className="login-form"
                      onFinish={onFinishLogin}
                    >
                      <Form.Item
                        name="email"
                        hasFeedback
                        rules={[
                          {
                            type: "email",
                            message: "Enter a valid email",
                          },
                          {
                            required: true,
                            message: "Email is required",
                          },
                        ]}
                      >
                        <Input
                          type="email"
                          prefix={
                            <MailOutlined className="site-form-item-icon" />
                          }
                          placeholder="Enter email"
                        />
                      </Form.Item>
                      <Form.Item
                        name="password"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: "Password is required",
                          },
                          {
                            min: 8,
                            message: "Password min 8 character long",
                          },
                        ]}
                      >
                        <Input.Password
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          type="password"
                          placeholder="Enter password"
                          minLength={8}
                        />
                      </Form.Item>
                      <Form.Item
                        name={"type"}
                        rules={[
                          {
                            required: true,
                            message: "Admin type is required",
                          },
                        ]}
                      >
                        <Radio.Group>
                          <Radio value={"SuperAdmin"}>Super Admin</Radio>
                          <Radio value={"Admin"}>Admin</Radio>
                        </Radio.Group>
                      </Form.Item>
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="login-form-button submit_btn"
                        >
                          <b>Login</b>
                        </Button>
                      </Form.Item>
                    </Form>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
