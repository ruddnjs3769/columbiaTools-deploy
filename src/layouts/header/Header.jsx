import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/columbia_tools_logo.svg";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <Image src={Logo} alt="Logo" width={169} height={70} />
      <div className="text-xl flex-1 text-white ml-6">
        <Link href="/" className="mx-6">
          Home
        </Link>
        <Link href="/about" className="mx-6">
          About
        </Link>
        <Link href="/products/all" className="mx-6">
          Product
        </Link>
        {/*<Link href="/education" className="mx-6">
          Education
        </Link>*/}
      </div>
    </div>
  );
}
