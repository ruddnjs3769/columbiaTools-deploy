import letterPath from "./images/shape=letter.svg";
import hidePath from "./images/shape=hide.svg";
import lockPath from "./images/shape=lock.svg";
import showPath from "./images/shape=show.svg";
import Image from "next/image";
//추후 이미지 수정 필요
const Icon = ({ type, alt = "", ...restProps }) => {
  let src = "";
  switch (type) {
    case "letter":
      src = letterPath;
      break;
    case "hide":
      src = hidePath;
      break;
    case "lock":
      src = lockPath;
      break;
    case "show":
      src = showPath;
      break;

    default:
      throw new Error("지원하는 아이콘 타입이 존재하지 않습니다.");
  }
  return <Image src={src} alt={alt} {...restProps}></Image>;
};

export default Icon;
