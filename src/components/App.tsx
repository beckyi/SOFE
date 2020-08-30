import React from "react";
// import "../App.css";
import axios from "axios";
import styled from "styled-components";

import Jenkins from "./Area/Jenkins";
import Clock from "./Area/Clock";
import Icon from "./Area/Icon";

const BaseGround = styled.div`
  height: 100%;
  top: 0;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  animation: fadeIn 2s;
  background-image: url(https://source.unsplash.com/category/nature/1600x900);
  background-size: cover; /*크기 비율을 유지한 상태에서 부모 요소의 width, height 중 큰값에 배경이미지를 맞춘다*/
  background-position: center;
  background-repeat: no-repeat;
`;

const Temp = styled.span`
  height: 18px;
  width: 18px;
  transition: transform var(--a-fast) linear;
`;

const EmptyElem = styled.span`
  flex: 1 0 50px;
  display: inline-flex;
  alignitems: center;
`;

function getRandomImg() {
  axios
    .get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: "6K__wfATbrqMP4nTdz0iQeWQg-2GN58N0nlx7c128aM",
        count: 1,
      },
    })
    .then((response) => {
      console.log(response);
    });
}

//nodeJS는 타입스크립트를 이해하지 못하므로 자바스크립트 컴파일 과정 필요
function App() {
  let name = "JENKINS";

  return (
    <BaseGround>
      <div className="App">
        <Jenkins name={"최재은"} />
        <div
          style={{
            flex: "1 1 50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        ></div>
        <div style={{ display: "block" }}>
          <span style={{ display: "flex" }}>
            <EmptyElem />
            <span>
              <Clock />
            </span>
            <EmptyElem>
              <span
                style={{
                  textAlign: "center",
                  margin: "55px 25px",
                }}
              ></span>
              <Icon name={"inform"} />
            </EmptyElem>
          </span>
        </div>
      </div>
      <Temp>
        <Icon name={"calendar"} />
        <Icon name={"rice"} />
      </Temp>
    </BaseGround>
  );
}

export default App;
