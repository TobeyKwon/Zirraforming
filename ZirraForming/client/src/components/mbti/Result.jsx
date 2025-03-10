import { motion } from "framer-motion";
import styled from "styled-components";
import { BasicButton } from "../../items/styleButton";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomeButton } from "../../items/goHome";
import StyleShare from "../common/StyleShare";
import { useLocation } from "react-router";
import axios from "axios";
import homebanner from "../../assets/homeBanner.png";

const Wrapper = styled(motion.div)`
	position: relative;
	top: 2vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
	opacity: 1;
	border-radius: 5vh;
	width: 500px;
	height: auto;
	margin-bottom: 20vh;

	h2 {
		font-size: 100;
		color: black;
		font-family: SBAggroB;
	}
	@media screen and (${(props) => props.theme.tablet}) {
		width: 60vw;
	}
	@media screen and (${(props) => props.theme.mobile}) {
		width: 300px;
		min-width: 300px;
	}
`;

function Result() {
	const navigate = useNavigate();

	const { state } = useLocation();
	const [result, setResult] = useState([]);
	const [campaigns, setCampaigns] = useState([]);
	const characterId = state;

	useEffect(() => {
		axios
			.get(`https://j7d107.p.ssafy.io/api/charactor?characterId=${characterId}`)
			.then((response) => {
				console.log(response.data);
				setResult(response.data);
				setCampaigns(response.data.campaigns);
			});
	}, []);

	return (
		<>
			<Wrapper>
				<div
					style={{
						width: "80%",
						height: "20px",
						backgroundColor: "#9ba3eb",
						margin: "7vh 0px 3vh 0px",
					}}
				></div>
				<h2>{result.characterPrefix}</h2>
				<h2 style={{ color: "#5271FF" }}>{result.characterName}</h2>
				<img
					src={result.characterImgUrl}
					style={{ width: "40%", margin: "3vh 0 2vh 0 " }}
					alt=""
				/>
				<BasicButton
					style={{
						backgroundColor: "#DBDFFD",
						height: "200px",
						margin: "30px 0 30px 0",
						padding: "10px 20px 10px 20px",
						cursor: "default",
					}}
				>
					<p style={{ fontSize: "14px" }}>
						{result.description &&
							result.description.split("<br>").map((line, idx) => {
								return (
									<div key={idx}>
										{line} <br />
									</div>
								);
							})}
					</p>
				</BasicButton>
				<div
					style={{
						width: "80%",
						height: "120px",
						backgroundColor: "#ffffff",
						margin: "3vh 0px 3vh 0px",
					}}
				>
					<StyleShare
						characterId={characterId}
						characterName={result.characterName}
					/>
				</div>

				<BasicButton
					onClick={() => {
						navigate("../style");
					}}
					style={{ marginBottom: "2vh", fontFamily: "SBAggroB" }}
				>
					테스트 다시하기
				</BasicButton>
				<BasicButton
					onClick={() => {
						navigate("../../quiz");
					}}
					style={{ backgroundColor: "#DBDFFD", fontFamily: "SBAggroB" }}
				>
					환경 상식 퀴즈 풀러가기
				</BasicButton>
				<HomeButton
					style={{
						backgroundColor: "#9D9D9D",
						marginTop: "2vh",
					}}
				>
					<img src={homebanner} style={{ width: "100%" }} alt="" />
					<HomeButton
						onClick={() => {
							navigate("/");
						}}
						style={{
							backgroundColor: "#575757",
							height: "50px",
							justifyContent: "center",
							alignItems: "center",
							width: "width: 400px",
							color: "white",
						}}
					>
						지구의 이야기를 들으러 GO!
					</HomeButton>
				</HomeButton>
				<HomeButton
					style={{
						backgroundColor: "#FBEBDC",
						margin: "2vh 0 5vh 0",
						backgroundImage: campaigns[0]
							? `url(${campaigns[0].campaignImgUrl})`
							: null,
						backgroundSize: "cover",
					}}
				>
					<HomeButton
						onClick={() => {
							window.location.href = campaigns[0].campaignUrl;
						}}
						style={{
							backgroundColor: "#444444",
							height: "50px",
							justifyContent: "center",
							alignItems: "center",
							width: "width: 400px",
							color: "white",
						}}
					>
						나와 어울리는 환경 캠페인 참여하기
					</HomeButton>
				</HomeButton>
			</Wrapper>
		</>
	);
}

export default Result;
