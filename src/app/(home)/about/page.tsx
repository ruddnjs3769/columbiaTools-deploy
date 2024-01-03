"use client";

import React from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import Logo from "@/assets/columbia_tools_logo.svg";
import ToolImg from "@/assets/about/2023-main.png";
import bgImg from "@/assets/about/1979-main.png";
import aboutTop from "@/assets/about/about1.png";
import aboutCenter from "@/assets/about/about2.png";
import aboutBotton from "@/assets/about/about3.png";
import FacebookIcon from "@/assets/about/Facebook_logo.svg";
import InstagramIcon from "@/assets/about/Instagram_logo.svg";
import TikTokIcon from "@/assets/about/TikTok_logo.svg";
import YoutubeIcon from "@/assets/about/Youtube_logo.svg";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import RouteComplete from "@/utils/RouteComplete";

const About = () => {
  //AOS 기본설정
  useEffect(() => {
    AOS.init();
  });

  //스크롤 이벤트 설정
  const [positionY, setPositionY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolled500, setIsScrolled500] = useState(false);
  const [isScrolled700, setIsScrolled700] = useState(false);
  const [isScrolled1000, setIsScrolled1000] = useState(false);
  const [isScrolled1100, setIsScrolled1100] = useState(false);
  const [isScrolled1500, setIsScrolled1500] = useState(false);

  const onScroll = () => {
    setPositionY(window.scrollY);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // 1차 화면 헤더 사라짐 100이상 500이하 공방 사진 배경화면 유지
  useEffect(() => {
    if (positionY >= 70) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [positionY]);

  // 500이상부터 2차 화면 시작
  useEffect(() => {
    if (positionY >= 200) {
      setIsScrolled500(true);
    } else {
      setIsScrolled500(false);
    }
  }, [positionY]);
  // 600이상부터 2차 화면의 오른쪽 이미지 감지
  useEffect(() => {
    if (positionY >= 300) {
      setIsScrolled700(true);
    } else {
      setIsScrolled700(false);
    }
  }, [positionY]);

  // 900이상부터 3차 화면 애니메이션 효과 없는 콘텐츠
  useEffect(() => {
    if (positionY >= 500) {
      setIsScrolled1000(true);
    } else {
      setIsScrolled1000(false);
    }
  }, [positionY]);

  // 900이상부터 3차 화면 애니메이션 효과 없는 콘텐츠
  useEffect(() => {
    if (positionY >= 800) {
      setIsScrolled1100(true);
    } else {
      setIsScrolled1100(false);
    }
  }, [positionY]);

  // 1000이상부터 4차 화면 애니메이션 효과 없는 콘텐츠
  useEffect(() => {
    if (positionY >= 1100) {
      setIsScrolled1500(true);
    } else {
      setIsScrolled1500(false);
    }
  }, [positionY]);

  const scrollRef = useRef();

  return (
    <RouteComplete>
      <div className="w-full h-[1700px] bg-[#222222]">
        {/* 기본화면 */}
        <div className="w-screen h-screen flex flex-col justify-center items-center fixed font-[#ffffff]">
          <Image src={Logo} alt="Logo" width={600} height={270} />
          <div className="animate-bounce mt-[100px]">
            <div className="text-[#ffffff]">화면을 아래로 스크롤 해주세요</div>
            <div className="text-[#ffffff] text-[30px] justify-center flex">
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
        </div>
        {/* <div className="text-testRed fixed bottom-0 right-0 z-[10]">
        스크롤 확인: {positionY}
      </div> */}
        {/* 영역 정리 */}
        {/* <div className="flex fixed inset-0 w-screen h-screen bg-slate-400">s</div> */}
        {isScrolled === true ? (
          <div
            className="w-full h-screen flex justify-center items-center clip-circle fixed inset-0"
            data-aos={isScrolled ? "fade" : ""}
          >
            <div
              className="text-[200px] font-bold text-white z-[3] translate-x-[440px] mr-8"
              data-aos={isScrolled ? "fade-left" : ""}
              data-aos-delay="140"
              data-aos-duration="1000"
            >
              1979
            </div>
            <div
              className="text-[26px] text-white z-[3] opacity-0 translate-x-[80px]"
              data-aos={isScrolled ? "fade-up" : ""}
              data-aos-dalay="140"
              data-aos-duration="1000"
            >
              Columbia Tools는 밴쿠버 섬 컬럼비아 비치 출신의 Bernie St. James에
              의해
              <br />
              1979년 설립되었습니다. 종종 자동 테이핑 도구를 대여했던 Bernie는
              <br />
              자동 테이핑 도구를 제조하는 회사의 초기 투자자로 시작해
              <br />
              마침내 자신이 직접 테스트하고 사용한 맞춤형 도구를 판매하게
              되었습니다.
            </div>
            <Image src={bgImg} fill alt="1979" />
          </div>
        ) : (
          ""
        )}
        {isScrolled500 === true ? (
          <div
            className="w-full h-screen flex fixed inset-0 z-[2] bg-white transition-all duration-[1500ms] overflow-x-hidden"
            data-aos={isScrolled500 ? "fade" : ""}
          >
            <div
              className="w-full justify-center flex items-center absolute right-0 bottom-0 top-0 my-auto"
              data-aos={isScrolled500 ? "fade-top" : ""}
              data-aos-duration="1000"
            >
              <div className="flex items-center">
                <div
                  className="text-[200px] pl-[100px] font-bold bg"
                  data-aos={"fade-down"}
                  data-aos-delay="140"
                  data-aos-duration="1000"
                >
                  2023
                </div>
                <div
                  className={`text-[24px] pl-[100px] text-${
                    isScrolled700 === true ? "black" : "white"
                  }`}
                  data-aos={isScrolled700 ? "" : "fade"}
                >
                  Bernie의 고품질 도구는 브랜드에 대한 신뢰를 쌓았고, Columbia
                  Tools는
                  <br />
                  전략적인 장비 투자와 제품 출시를 통해 세계적인 제조업체가
                  되었습니다.
                  <br />
                  브랜드의 목표는 여전히 최고의 도구를 만드는 것이며,
                  <br />
                  창업자인 Bernie는 지금까지도 신제품 개발에 열정적입니다.
                </div>
              </div>
            </div>
            <div
              className={`flex relative w-full`}
              data-aos={isScrolled500 ? "fade-left" : ""}
              data-aos-duration="1000"
            >
              <Image
                className={`absolute right-0 bottom-0 top-0 my-auto z-[2] ${
                  isScrolled700
                    ? "transition-transform duration-500 ease-in-out transform translate-x-3/4"
                    : ""
                }`}
                src={ToolImg}
                width={1010}
                height={673}
                alt="2023"
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {isScrolled1000 === true ? (
          <div
            className="w-full h-screen flex fixed inset-0 z-[2] bg-white transition-all duration-[1500ms] overflow-x-hidden"
            data-aos={"fade"}
            data-aos-duration="1000"
          >
            <div className="w-full h-[100vh] bg-white flex justify-center items-center">
              <div className="w-[1280px] flex justify-between pt-10">
                <div
                  data-aos={"fade-right"}
                  data-aos-delay="140"
                  data-aos-duration="1000"
                >
                  <Image src={aboutTop} width={542} height={542} alt="image1" />
                </div>
                <div
                  className="flex flex-col justify-center text-left"
                  data-aos={"fade-left"}
                  data-aos-delay="140"
                  data-aos-duration="1000"
                >
                  <h3 className="text-[90px] font-bold mb-[16px]">
                    업계 최고 보증
                  </h3>
                  <p className="text-[44px] font-medium mb-[44px] pl-[10px]">
                    5년 보증
                  </p>
                  <div className="text-[20px] leading-[30px] pl-[10px]">
                    Columbia Tools는 5년의 제품 보증을 제공합니다.
                    <br />
                    당사는 건식벽 공구 제조업체 중 최초로 5년 제품 보증을
                    도입했습니다.
                    <br />
                    Columbia Tools는 제품에 문제가 발생했을 때<br />긴 보증
                    기간을 통해 최선을 다해 지원할 것입니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {isScrolled1100 === true ? (
          <div
            className="w-full h-screen flex fixed inset-0 inset-0 z-[2] bg-white transition-all duration-[1500ms] overflow-x-hidden flex-col"
            data-aos={"fade"}
          >
            <div className="w-full h-[100vh] bg-white flex justify-end items-center overflow-x-hidden z-[2]">
              <div className="flex">
                <div className="text-right mr-10" data-aos={"fade-up"}>
                  <h3 className="text-[90px] font-bold mb-[16px]">북미 생산</h3>
                  <p className="text-[44px] font-medium mb-[44px]">
                    최상의 품질
                  </p>
                  <div className="text-[20px] leading-[30px]">
                    Columbia Tools는 제품의 내구성과 품질을 보장하기 위해
                    <br />
                    당사만의 제품을 만드는 것이 중요하다고 믿습니다.
                    <br />
                    그래서 당사의 모든 제품은 최상의 품질을 자랑하는 북미산
                    철강,
                    <br />
                    고무, 플라스틱 및 알루미늄을 사용하여 북미에서 제조해
                    <br />
                    오래도록 사용할 수 있습니다.
                  </div>
                </div>
                <Image
                  src={aboutCenter}
                  width={1052}
                  height={590}
                  alt="image2"
                  className="translate-x-[102px]"
                  data-aos={"fade-left"}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {isScrolled1500 === true ? (
          <div
            className="w-full h-screen flex flex-col fixed inset-0 z-[2] bg-[#ffffff] transition-all duration-[1500ms] overflow-x-hidden justify-center"
            data-aos={"fade"}
          >
            <div className="w-full bg-[#ffffff] flex justify-start items-center flex-col">
              <div className="flex">
                <Image
                  src={aboutBotton}
                  width={1046}
                  height={654}
                  alt="image3"
                  className=" translate-x-[-184px]"
                />
                <div className="text-left translate-x-[-80px]">
                  <div data-aos={"fade-right"}>
                    <h3 className="text-[90px] font-bold mb-[16px]">
                      고객과의 소통
                    </h3>
                    <p className="text-[34px] font-medium mb-[44px]">
                      Instagram, Facebook, Tik Tok, YouTube
                    </p>
                    <div className="text-[20px] leading-[30px]">
                      고객과 직접 소통하는 것은 Columbia Tools의 최우선 과제 중
                      하나입니다.
                      <br />
                      Instagram, Facebook, Tik Tok, YouTube에서
                      <br />
                      당사의 제품을 만나고, 저희와 채팅하실 수 있습니다.
                      <br />
                      여러 소셜 미디어를 통해 Columbia Tools를 만나보세요 !
                    </div>
                  </div>
                  <div
                    className="w-[360px] flex justify-between pt-[82px]"
                    data-aos={"fade-left"}
                  >
                    <Image
                      src={FacebookIcon}
                      width={60}
                      height={60}
                      alt="facebook"
                    />
                    <Image
                      src={InstagramIcon}
                      width={60}
                      height={60}
                      alt="instagram"
                    />
                    <Image
                      src={TikTokIcon}
                      width={60}
                      height={60}
                      alt="tiktok"
                    />
                    <Image
                      src={YoutubeIcon}
                      width={60}
                      height={60}
                      alt="youtube"
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex justify-center relative"
                data-aos={"fade-up"}
              >
                <div
                  className="animate-bounce cursor-pointer mt-[30px] absolute top-5"
                  onClick={handleScrollToTop}
                >
                  <div className="text-[#000000] text-[30px] justify-center flex w-[100px]">
                    <MdOutlineKeyboardArrowUp />
                  </div>
                  <div className="text-[#000000] justify-center flex w-[100px]">
                    맨 위로
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </RouteComplete>
  );
};

export default About;
