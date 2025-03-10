import { motion } from "framer-motion";
import styled from "styled-components";
import { BasicButton } from "../../items/Button";

import MouseSVG from "../../assets/svgs/whitemouse.svg";
import { Html } from "@react-three/drei";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../MainNavbar";

const Wrapper = styled(motion.div)`
  position: fixed;
  left: 10vw;
  /* top: 10vh; */
  top: 130px;

  display: grid;
  grid-template-rows: 1fr 4fr 2fr 2fr 1px;
  align-items: center;

  width: 80vw;
  height: 40vh;
  transition: all linear 0.3;
`;

const Title = styled(motion.h1)`
  font-size: min(5vw, 60px);
  text-align: center;
  font-weight: 400;
  white-space: nowrap;
`;

const TitleWrap = styled(motion.div)`
  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
  padding: 40px 30px 5px;
  margin-bottom: min(3vh, 80px);

  .title__top {
    font-size: min(3vw, 30px);
    color: #fbc531;
    text-align: center;
    align-self: end;
  }

  .title__main {
    align-self: start;
    color: #3c9f58;
    text-align: center;
    line-height: min(12.5vw, 138px);
    font-size: min(12vw, 130px);
  }
`;

const Content = styled(motion.div)`
  font-size: min(2.5vw, 30px);
  text-align: center;
  word-break: keep-all;
`;

const ButtonWrap = styled(motion.div)`
  justify-self: center;
  display: flex;
  width: min(80vw, 800px);
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 40px;
`;

const SVG = styled(motion.img)`
  position: relative;

  top: 20px;
  width: 80px;
  height: 80px;
  margin: auto auto;
`;

const WrapVar = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      delayChildren: 1,
      staggerChildren: 1,
    },
  },
};

const childrenVar = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
      duration: 0.5,
    },
  },
};

function Intro({ navigate }) {
  return (
    <>
      <MainNavbar width={"100vw"} navigate={navigate} />
      <Wrapper variants={WrapVar} initial="start" animate="end">
        <Title variants={childrenVar}>당신의 지구는 안녕하십니까?</Title>
        <TitleWrap variants={childrenVar}>
          <div className="title__top">지구방위대 아픈지구 살리기 프로젝트</div>
          <div className="title__main">지라포밍</div>
        </TitleWrap>
        <Content variants={childrenVar}>
          지라포밍이란 지구 + 테라포밍으로 더 이상 생명이 살 수 없는
          <br /> 행성을 생명이 살 수 있도록 만드는 작업을 의미한다
        </Content>
        <ButtonWrap variants={childrenVar}>
          <BasicButton
            onClick={() => {
              navigate("/style");
            }}
            variants={childrenVar}
          >
            <p>환경스타일 분석</p>
          </BasicButton>

          <BasicButton
            onClick={() => {
              navigate("/campaign");
            }}
            variants={childrenVar}
          >
            <p>별보러 갈래?</p>
          </BasicButton>

          <BasicButton
            onClick={() => {
              navigate("/quiz");
            }}
            variants={childrenVar}
          >
            <p>환경 퀴즈 풀기</p>
          </BasicButton>
        </ButtonWrap>
        <SVG src={MouseSVG} variants={childrenVar}></SVG>
      </Wrapper>

      {/* <img
        src="/assets/temp/temp4.png"
        style={{ marginLeft: "-200px", width: "100vw", marginTop: "1000px" }}
        alt=""
      />
      <img
        src="/assets/temp/temp5.png"
        style={{ marginLeft: "-200px", width: "100vw", marginTop: "1000px" }}
        alt=""
      /> */}
      {/* <img
        src="/assets/temp/temp6.png"
        style={{ marginLeft: "-200px", width: "100vw", marginTop: "1000px" }}
        alt=""
      /> */}
    </>
  );
}

export default Intro;
