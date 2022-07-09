import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Spinner = () => {
  const loadingIcon = (
    <LoadingOutlined style={{ fontSize: 24 }} spin></LoadingOutlined>
  );

  return <Spin indicator={loadingIcon} />;
};

export default Spinner;