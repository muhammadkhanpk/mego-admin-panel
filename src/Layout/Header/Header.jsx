import React, { useState, useEffect } from "react";
import "./header.css";
import { Layout, Avatar, Dropdown, Card } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const { Meta } = Card;

export default function MainHeader({ collapsed, setCollapsed }) {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const Profile = () => {
    return (
      <Card
        style={{
          width: 250,
        }}
        actions={[
          <LogoutOutlined
            key="logout"
            onClick={() => {
              if (window.confirm("Are you sure ?")) {
                sessionStorage.clear();
                window.location.replace("/");
              }
            }}
          />,
          // <EditOutlined key="edit" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={"Zaman"}
          description={"MeGo Services"}
        />
      </Card>
    );
  };
  return (
    <div>
      <Header className="site-layout-background owner_header">
        <div className="header_main_div">
          <div className="header_trigger_div">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </div>
          <div className="header_content_div">
            <div className="header_contnet_name_div">
              <h1>MeGo Services</h1>
            </div>
            <div className="header_content_profile_div">
              <div className="header_profile_div">
                <div className="profile_avatar">
                  <Avatar
                    style={{
                      backgroundColor: "#87d068",
                      verticalAlign: "middle",
                      marginRight: "2px",
                    }}
                    icon={<UserOutlined />}
                  />
                </div>
                <div className="profile_dropdown_div">
                  <Dropdown overlay={Profile} trigger={["click"]}>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <div>{"Admin"}</div>
                    </a>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
}
