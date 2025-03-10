import { Html } from "@react-three/drei";
import { useEffect } from "react";
import styled from "styled-components";
import Rocket from "../../assets/spinner/rocket.svg";

const Wrapper = styled(Html)`
  background-color: black;
  .preloader {
    transform: translate(-50%, -50%) !important;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    /* background: #0044ff; */
    overflow: hidden;
    z-index: 1000;
    transition: opacity 0.5s 3s;
  }

  .preloader.preload-finish {
    opacity: 0;
    pointer-events: none;
  }

  .outer-space {
    width: 600px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .rocket-container {
    position: absolute;
    top: 50%;
    left: 49%;
    transform: translate(-50%, -50%);
  }

  .rocket {
    height: 320px;
    animation: move 2s linear infinite;
  }

  .preloader.preload-finish .rocket-container {
    animation: finish 4.3s 1 ease forwards;
  }

  @keyframes finish {
    from {
      bottom: 12%;
    }
    to {
      bottom: 140%;
    }
  }

  @keyframes move {
    from {
      transform: translateX(-10px);
    }
    to {
      transform: translateX(5px);
      transform: translateY(-700px);
    }
  }

  .title {
    color: #fff;
    letter-spacing: 1px;
    font-weight: 600;
    font-size: 1.5rem;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
  }

  #circle {
    animation: move-circle 0.2s linear infinite alternate;
  }

  @keyframes move-circle {
    from {
      transform: translateY(-100px);
    }
    to {
      transform: translateY(5px);
    }
  }

  @keyframes stars {
    from {
      transform: translateY(-1500px);
    }
    to {
      transform: translateY(1500px);
    }
  }

  .content {
    background: #087df3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    text-align: left;
    color: #fff;
  }

  .randomP {
    display: inline-block;
    top: 20px;
    font-size: 24px;
    color: #fff;
    font-family: GmarketSansMedium;
  }
  .textwrap {
    position: absolute;
    top: 75%;
    left: 50%;
    width: 500px;
    text-align: center;
    transform: translate(-50%, -50%);
    p {
      font-size: 16px;
    }
  }
`;

function Spinner() {
  const randomText = [
    `6월 5일은 환경의 날 인거 아시나요?/하지만, 환경은 365일 지켜야합니다`,
    `의약품은 약 종류에 따른 지정된 방법으로 배출해야합니다. /토양으로 들어갈 경우 생태계 파괴를 일으 킬 수 있어요`,
    "맛있는 치킨! 먹고난 후 치킨뼈는 일반 쓰레기입니다!./헷갈릴 때는 물이 먹을 수 있는지 아닌지 생각해 보세요!",
  ];

  useEffect(() => {
    const stars = document.querySelectorAll("#star");

    stars.forEach((star) => {
      let myDuration = Math.random() * (1.2 - 0.6) + 0.6;
      const starmove = [
        { transform: "translateY(-1500px)" },
        { transform: "translateY(1500px)" },
      ];
      const animateOption = {
        duration: myDuration,
        iterations: "infinite",
      };
      // star.animate(starmove, animateOption);
    });
  }, []);

  return (
    <Wrapper className="svgbox">
      <div className="preloader">
        <svg
          className="outer-space"
          width="1200"
          height="1200"
          viewBox="0 0 1137 729"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="outer-space">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1137"
              height="729"
            >
              <path
                id="background"
                d="M992 622.36C982.777 623.153 973.498 623.029 964.3 621.99C863.18 610.81 725.48 613.99 613.23 683.54C457.99 779.71 214.7 697.38 107.38 652.59C25.38 618.38 -17.19 534.59 8.38001 455.94C8.74001 454.83 9.11001 453.72 9.50001 452.61C25.59 405.87 57.35 369.29 96.68 349.9C130.96 333 181.01 297.71 203.28 229.9C212.48 201.9 225.1 175.56 241.49 152.6C285.38 91.11 377.26 -0.459991 535.28 0.110009C562.986 0.24423 590.484 4.89873 616.69 13.89C674.42 33.56 726.56 73.55 766.32 128.99C791.69 164.35 829.71 197.22 884.14 199.9C959.68 203.64 1031.77 238.81 1085.85 301.4C1087.41 303.2 1088.95 305.01 1090.49 306.84C1186.78 421.55 1119.9 611.18 992 622.36Z"
                fill="#2c2f37"
              />
            </mask>
            <g mask="url(#mask0)">
              <rect
                id="Rectangle 1"
                x="1"
                width="1135"
                height="728"
                fill="#05163d"
              />
              <path
                id="star"
                d="M204.11 333.24C206.927 333.24 209.21 330.957 209.21 328.14C209.21 325.323 206.927 323.04 204.11 323.04C201.293 323.04 199.01 325.323 199.01 328.14C199.01 330.957 201.293 333.24 204.11 333.24Z"
                fill="white"
              />
              <path
                id="star"
                d="M568.11 629.24C570.927 629.24 573.21 626.957 573.21 624.14C573.21 621.323 570.927 619.04 568.11 619.04C565.293 619.04 563.01 621.323 563.01 624.14C563.01 626.957 565.293 629.24 568.11 629.24Z"
                fill="white"
              />
              <path
                id="star"
                d="M353.11 652.99C354.684 652.99 355.96 651.714 355.96 650.14C355.96 648.566 354.684 647.29 353.11 647.29C351.536 647.29 350.26 648.566 350.26 650.14C350.26 651.714 351.536 652.99 353.11 652.99Z"
                fill="white"
              />
              <path
                id="star"
                d="M984.11 514.99C985.684 514.99 986.96 513.714 986.96 512.14C986.96 510.566 985.684 509.29 984.11 509.29C982.536 509.29 981.26 510.566 981.26 512.14C981.26 513.714 982.536 514.99 984.11 514.99Z"
                fill="white"
              />
              <path
                id="star"
                d="M821.11 258.99C822.684 258.99 823.96 257.714 823.96 256.14C823.96 254.566 822.684 253.29 821.11 253.29C819.536 253.29 818.26 254.566 818.26 256.14C818.26 257.714 819.536 258.99 821.11 258.99Z"
                fill="white"
              />
              <path
                id="star"
                d="M1052.11 383.99C1053.68 383.99 1054.96 382.714 1054.96 381.14C1054.96 379.566 1053.68 378.29 1052.11 378.29C1050.54 378.29 1049.26 379.566 1049.26 381.14C1049.26 382.714 1050.54 383.99 1052.11 383.99Z"
                fill="white"
              />
              <path
                id="star"
                d="M294.11 166.24C296.927 166.24 299.21 163.957 299.21 161.14C299.21 158.323 296.927 156.04 294.11 156.04C291.293 156.04 289.01 158.323 289.01 161.14C289.01 163.957 291.293 166.24 294.11 166.24Z"
                fill="white"
              />
              <path
                id="star"
                d="M153.94 506.21H149.4V501.67H147.55V506.21H143.01V508.06H147.55V512.59H149.4V508.06H153.94V506.21Z"
                fill="white"
              />
              <path
                id="star"
                d="M267.94 504.21H263.4V499.67H261.55V504.21H257.01V506.06H261.55V510.59H263.4V506.06H267.94V504.21Z"
                fill="white"
              />
              <path
                id="star"
                d="M430.94 596.21H426.4V591.67H424.55V596.21H420.01V598.06H424.55V602.59H426.4V598.06H430.94V596.21Z"
                fill="white"
              />
              <path
                id="star"
                d="M657.97 44.71H655.9V42.64H655.06V44.71H652.99V45.55H655.06V47.62H655.9V45.55H657.97V44.71Z"
                fill="white"
              />
              <path
                id="star"
                d="M952.97 234.71H950.9V232.64H950.06V234.71H947.99V235.55H950.06V237.62H950.9V235.55H952.97V234.71Z"
                fill="white"
              />
              <path
                id="star"
                d="M778.97 358.71H776.9V356.64H776.06V358.71H773.99V359.55H776.06V361.62H776.9V359.55H778.97V358.71Z"
                fill="white"
              />
              <path
                id="star"
                d="M70.97 436.71H68.9V434.64H68.06V436.71H65.99V437.55H68.06V439.62H68.9V437.55H70.97V436.71Z"
                fill="white"
              />
              <path
                id="star"
                d="M155.97 606.71H153.9V604.64H153.06V606.71H150.99V607.55H153.06V609.62H153.9V607.55H155.97V606.71Z"
                fill="white"
              />
              <path
                id="star"
                d="M422.97 69.71H420.9V67.64H420.06V69.71H417.99V70.55H420.06V72.62H420.9V70.55H422.97V69.71Z"
                fill="white"
              />
              <path
                id="star"
                d="M296.97 368.71H294.9V366.64H294.06V368.71H291.99V369.55H294.06V371.62H294.9V369.55H296.97V368.71Z"
                fill="white"
              />
              <path
                id="star"
                d="M323.97 282.71H321.9V280.64H321.06V282.71H318.99V283.55H321.06V285.62H321.9V283.55H323.97V282.71Z"
                fill="white"
              />
              <path
                id="star"
                d="M955.9 344.07C956.916 344.07 957.74 343.246 957.74 342.23C957.74 341.214 956.916 340.39 955.9 340.39C954.884 340.39 954.06 341.214 954.06 342.23C954.06 343.246 954.884 344.07 955.9 344.07Z"
                fill="white"
              />
            </g>
          </g>
        </svg>
        <div className="rocket-container">
          <img src={Rocket} className="rocket" />
        </div>
        <div className="textwrap">
          {randomText[Math.floor(Math.random() * 3)]
            .split("/")
            .map((text, idx) => {
              return <p className="randomP">{text}</p>;
            })}
        </div>
      </div>
    </Wrapper>
  );
}

export default Spinner;

function ImageSpinner() {
  return;
}
