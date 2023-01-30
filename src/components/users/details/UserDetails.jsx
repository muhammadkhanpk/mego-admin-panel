import React from "react";
import { useParams } from "react-router-dom";
import { Descriptions, Badge, Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import "./userdetails.scss";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "../../../redux/apis/usersApis";
function UserDetails() {
  const { userId } = useParams();
  const { data, refetch } = useGetUserQuery(userId);
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  return (
    <div className="user-details">
      <Descriptions title="User Info" bordered>
        <Descriptions.Item label="Name">
          {data?.name ? data.name : "Not available"}
        </Descriptions.Item>
        <Descriptions.Item label="Phone No">{data?.phoneNo}</Descriptions.Item>
        <Descriptions.Item label="Verify">
          <Switch
            checked={
              data?.isApproved !== undefined && data?.isApproved === true
            }
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={async (value) => {
              if (data?.isApproved) {
                if (
                  window.confirm(
                    "Are you sure to approve this user is not verified!"
                  )
                ) {
                  let data = { isApproved: value };
                  updateUser();
                }
              }
            }}
          />
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default UserDetails;
