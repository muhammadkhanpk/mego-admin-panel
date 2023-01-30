import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";
import { Badge, Layout, Menu, Popconfirm } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { HiOutlineUsers } from "react-icons/hi";
import { FcOrgUnit } from "react-icons/fc";
import {
  MdDashboardCustomize,
  MdMedicalServices,
  MdList,
  MdPayment,
  MdCancel,
  MdCircleNotifications,
} from "react-icons/md";
import {
  AiOutlineUsergroupAdd,
  AiOutlineGift,
  AiOutlineFlag,
  AiOutlineSetting,
} from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaUsersCog } from "react-icons/fa";
import mego from "../../assets/mego.png";
const { Sider } = Layout;
export default function SideBar({ collapsed }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <div className="logo_div">
            <img src={mego} className={`${collapsed ? "img-small" : ""}`} />
          </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <MdDashboardCustomize className="icon-x" />,
              label: "Dashboard",
              onClick: () => {
                navigate("/dashboard");
              },
            },
            {
              key: "2",
              icon: <AiOutlineUsergroupAdd className="icon-x" />,
              label: "All User's",
              onClick: () => {
                navigate("/allUsers");
              },
            },
            {
              key: "3",
              icon: <FaUsersCog className="icon-x" />,
              label: "All Provider's",
              onClick: () => {
                navigate("/allProviders");
              },
            },
            {
              key: "4",
              icon: <MdMedicalServices className="icon-x" />,
              label: "Services",
              onClick: () => {
                navigate("/allServices");
              },
            },
            {
              key: "5",
              icon: <AiOutlineGift className="icon-x" />,
              label: "Promo Code",
              onClick: () => {
                navigate("/dashboard");
              },
            },
            {
              key: "6",
              icon: <MdList />,
              label: "All Booking Lists",
              onClick: () => {
                navigate("/allBookingLists");
              },
            },
            {
              key: "7",
              icon: <AiOutlineFlag className="icon-x" />,
              label: "Slider Banner",
              onClick: () => {
                navigate("/allSliders");
              },
            },
            {
              key: "8",
              icon: <MdPayment className="icon-x" />,
              label: "Payments",
              onClick: () => {
                navigate("/payments");
              },
            },
            // {
            //   key: "9",
            //   icon: <MdCancel className="icon-x" />,
            //   label: "Canceled List",
            //   onClick: () => {
            //     navigate("/dashboard");
            //   },
            // },
            {
              key: "10",
              icon: <GiSettingsKnobs className="icon-x" />,
              label: "Booking Settings",
              onClick: () => {
                navigate("/dashboard");
              },
            },
            {
              key: "11",
              icon: <AiOutlineSetting className="icon-x" />,
              label: "Multi Settings",
              onClick: () => {
                navigate("/dashboard");
              },
            },
            {
              key: "12",
              icon: <MdCircleNotifications className="icon-x" />,
              label: "Push Notification",
              onClick: () => {
                navigate("/push-notification");
              },
            },
            {
              key: "/",
              icon: <LogoutOutlined className="icon-x" />,
              label: "Logout",
              onClick: () => {
                if (window.confirm("Are you Sure ?")) {
                  sessionStorage.clear();
                  window.location.replace("/");
                }
              },
            },
          ]}
        >
          {/* <Menu.Item key={"truck"} icon={<BsTruck />}>
              <NavLink to={"/"}>Truck</NavLink>
            </Menu.Item> */}
        </Menu>
      </Sider>
    </div>
  );
}
