import Link from "next/link";

// Styles
import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.__navbar}>
      <div className={styles.__logo}>
        <p>ᴅʏɴᴀᴍɪᴄ ғʀᴏɴᴛ</p>
      </div>
      <ul>
        <li>
          <Link href="#anchor1">anchor1</Link>
        </li>
        <li>
          <Link href="#anchor2">anchor2</Link>
        </li>
        <li>
          <Link href="#anchor3">anchor3</Link>
        </li>
        <li>
          <Link href="#anchor4">anchor4</Link>
        </li>
        <li>
          <Link href="#anchor5">anchor5</Link>
        </li>
        <li>
          <Link href="#anchor6">anchor6</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
