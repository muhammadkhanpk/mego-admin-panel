import React, { useState, useEffect } from "react";
import "./layout.css";
import { Layout } from "antd";
import SideBar from "./SideBar/Sidebar";
import Header from "./Header/Header";
export default function MainLayout({ children }) {
  const { Content } = Layout;

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 700) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    });
  }, [window.innerWidth]);

  return (
    <div className="main_layout_div">
      <Layout>
        <SideBar collapsed={collapsed} />
        <Layout className="site-layout">
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content
            className="site-layout-background "
            style={{
              margin: "24px 16px",
              padding: "24px",
            }}
          >
            <div className="main_layout_div">{children}</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
