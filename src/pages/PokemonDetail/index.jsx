import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Row, Col, Layout, Image, Descriptions } from "antd";
import { getDataPokemon } from "../../stores/actions/pokemon";
import "./index.css";

const { Header, Footer, Content } = Layout;

const PokemonDetail = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.title = "Pokemon Index | Pokemon Detail";
  }, []);

  return (
    <>
      <Layout>
        <Header className="header">Pokemon Index</Header>
        <Content className="main__content">
          <Row className="main__content--pokemon">
            <Col
              xs={24}
              sm={24}
              md={8}
              lg={8}
              xl={8}
              style={{ backgroundColor: "#eb4034" }}
            >
              <div className="pokemon__image">
                <Image
                  preview={{ visible: false }}
                  width={320}
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                  onClick={() => setVisible(true)}
                />
              </div>
              <div style={{ display: "none" }}>
                <Image.PreviewGroup
                  preview={{
                    visible,
                    onVisibleChange: (vis) => setVisible(vis),
                  }}
                >
                  <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
                </Image.PreviewGroup>
              </div>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={16}
              lg={16}
              xl={16}
              className="pokemon__info"
            >
              <h1 className="pokemon__info--title">Pokemon Info</h1>
              <h3>Pokemon name : </h3>
              <h3>Types : </h3>
              <h3>Moves : </h3>
              <h3>Stats : </h3>
              <div style={{ paddingLeft: "20px" }}>
                <h4>- Hp :</h4>
                <h4>- Attack :</h4>
                <h4>- Defense :</h4>
                <h4>- Special attack :</h4>
                <h4>- Special defence :</h4>
                <h4>- Speed :</h4>
              </div>
            </Col>
          </Row>
        </Content>
        <Footer className="footer">
          Pokemon Index ©2022 Created by Ahmad Zaky
        </Footer>
      </Layout>
    </>
  );
};

export default PokemonDetail;
