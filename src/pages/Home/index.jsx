import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Table, Row, Col, Layout, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { getAllDataPokemon } from "../../stores/actions/pokemon";
import "./index.css";

const { Header, Footer, Content } = Layout;

const Home = () => {
  const dispatch = useDispatch();

  const [dataSource, setDataSource] = useState([]);
  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "Pokemon Name",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "Pokemon Detail",
      dataIndex: "url",
      align: "center",
      // render: (text) => <a>{text}</a>,
    },
  ];

  const getAllPokemon = () => {
    setLoading(true);
    dispatch(getAllDataPokemon(limit)).then((res) => {
      setDataSource(res.action.payload.data.results);
      setLimit(res.action.payload.data.count);
      setLoading(false);
    });
  };

  useEffect(() => {
    document.title = "Pokemon Index | Home";
    getAllPokemon();
  }, [limit]);

  return (
    <>
      <Layout>
        <Header className="header">Pokemon Index</Header>
        <Content className="main__content">
          <Row className="main__content--searchBar">
            <Col span={24}>
              <Input
                size="large"
                placeholder="Search pokemon ..."
                prefix={<SearchOutlined />}
                className="searchBar"
              />
            </Col>
          </Row>
          <Row className="main__content--table">
            <Col span={24}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Table
                  columns={columns}
                  dataSource={dataSource}
                  loading={loading}
                  bordered
                ></Table>
              </div>
            </Col>
          </Row>
        </Content>
        <Footer className="footer" style={{ textAlign: "center" }}>
          Pokemon Index ©2022 Created by Ahmad Zaky
        </Footer>
      </Layout>
    </>
  );
};

export default Home;
