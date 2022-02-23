import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Layout, Image, Button } from "antd";
import { getDataPokemon } from "../../stores/actions/pokemon";
import "./index.css";

const { Header, Footer, Content } = Layout;

const PokemonDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    picture: "",
    types: [],
    move_1: "",
    move_2: "",
    move_3: "",
    move_4: "",
    hp: "",
    attack: "",
    defense: "",
    special_attack: "",
    special_defense: "",
    speed: "",
  });
  const [visible, setVisible] = useState(false);

  const getPokemon = () => {
    dispatch(getDataPokemon(location.state)).then((res) => {
      setData({
        name: res.value.data.name,
        picture: res.value.data.sprites.other["official-artwork"].front_default,
        types: res.value.data.types,
        move_1: res.value.data.moves[0].move.name,
        move_2: res.value.data.moves[1].move.name,
        move_3: res.value.data.moves[2].move.name,
        move_4: res.value.data.moves[3].move.name,
        hp: res.value.data.stats[0].base_stat,
        attack: res.value.data.stats[1].base_stat,
        defense: res.value.data.stats[2].base_stat,
        special_attack: res.value.data.stats[3].base_stat,
        special_defense: res.value.data.stats[4].base_stat,
        speed: res.value.data.stats[5].base_stat,
      });
    });
  };

  const mapTypes = data.types.map((item) => {
    return item.type.name;
  });

  useEffect(() => {
    document.title = "Pokemon Index | Pokemon Detail";
    getPokemon();
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
                  src={data.picture}
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
                  <Image src={data.picture} />
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
              <h3>Pokemon name : {data.name}</h3>
              <h3>Types : {mapTypes.join(", ")}</h3>
              <h3>
                Moves : {data.move_1}, {data.move_2}, {data.move_3},{" "}
                {data.move_4}
              </h3>
              <h3>Stats : </h3>
              <div style={{ paddingLeft: "20px" }}>
                <h4>- Hp : {data.hp}</h4>
                <h4>- Attack : {data.attack}</h4>
                <h4>- Defense : {data.defense}</h4>
                <h4>- Special attack : {data.special_attack}</h4>
                <h4>- Special defence : {data.special_defense}</h4>
                <h4>- Speed : {data.speed}</h4>
              </div>
            </Col>
          </Row>
          <Row className="main__content--buttonHome">
            <Button
              className="to__home"
              onClick={() => {
                navigate("/");
              }}
            >
              Back to Home
            </Button>
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
