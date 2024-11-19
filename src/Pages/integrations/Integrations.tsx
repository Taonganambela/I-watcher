import { Divider, Form, Input, Modal, } from "antd";
import { useState } from "react";
import { CardComp } from "../../components/CardComp";
import CabinOutlinedIcon from '@mui/icons-material/CabinOutlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import GiteOutlinedIcon from '@mui/icons-material/GiteOutlined';
import { PlusOutlined } from "@ant-design/icons";

interface HouseDetails {
  key: string;
  houseName: string;
  address: string;
  price: string;
}

export const Integrations = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [houseList, setHouseList] = useState<HouseDetails[]>([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then(values => {
        const newHouse: HouseDetails = {
          key: (houseList.length + 1).toString(),
          houseName: values.houseName,
          address: values.address,
          price: values.price,
        };
        setHouseList([...houseList, newHouse]);
        setIsModalVisible(false);
        form.resetFields();
      })
      .catch(info => {
        console.log('Validation failed:', info);
      });
  };


  return (
    <div>
    <div className=" text-black font-semibold text-[20px]">
      Integrations
    </div>
    <Divider className=" bg-purple"/>

    <div className="grid gap-3 items-center justify-center grid-cols-1 md:grid-cols-3">
        <CardComp text={"This month"} Icon={HolidayVillageOutlinedIcon} number={15}  title='Total Number of Houses'/>
        <CardComp text={"This month"} Icon={CabinOutlinedIcon} number={6}  title='Available Houses'/>
        <CardComp text={"This month"} Icon={GiteOutlinedIcon} number={9}  title='Occupied Houses'/>
        
        
      </div>
      <div className="flex justify-end py-4 mb-5">
<button 
  type="submit" 
  onClick={showModal} 
  className="active:border-2 active:border-orange h-10 w-[130px] text-white rounded-md bg-orange !focus:bg-orange !hover:bg-orange !active:bg-orange flex justify-center items-center"
>
  <PlusOutlined className="mr-2" />
  Add Houses
</button>
      </div>

    <Modal
      title="House Details"
      visible={isModalVisible}
      onCancel={handleCancel}
      onOk={handleSubmit}
      okText="Submit"
      cancelText="Cancel"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="House Name"
          name="houseName"
          rules={[{ required: true, message: 'Please enter house name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please enter the address' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please enter the price' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>

  
  </div>
  )
}
