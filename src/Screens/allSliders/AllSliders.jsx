import React, { useState } from "react";
import "./allsliders.scss";
import { Button, Input } from "antd";
import NewSliderModel from "../../components/models/NewSliderModal";
import { useGetAllSlidersQuery } from "../../redux/apis/slidersApis";
import SliderTable from "../../components/tables/SliderTable";
import { SearchOutlined } from "@ant-design/icons";
function AllSliders() {
  const [newSliderModal, setNewSliderModal] = useState(false);
  const [query, setQuery] = useState("");
  const { data } = useGetAllSlidersQuery();
  const uniqueSlider = (values) => {
    return values?.filter((val) =>
      val?.sliderUrl?.toLocaleLowerCase().includes(query?.toLocaleLowerCase())
    );
  };
  console.log("values is ", query);
  return (
    <>
      {newSliderModal && (
        <NewSliderModel
          newSliderModal={newSliderModal}
          setNewSliderModal={setNewSliderModal}
        />
      )}

      <div className="all-services">
        <div className="services-header">
          <div>
            <h3>Total Slider Banner: {data?.length}</h3>
          </div>
          <div>
            <Button type="primary" onClick={() => setNewSliderModal(true)}>
              Add New Slider Banner
            </Button>
          </div>
          <div>
            <Input
              prefix={<SearchOutlined />}
              onChange={(e) => setQuery(e.target.value)}
              allowClear
            />
          </div>
        </div>
        <SliderTable data={uniqueSlider(data)} />
      </div>
    </>
  );
}

export default AllSliders;
