import Link from "next/link";

// Styles
import styles from "./styles.module.scss";

const Navbar = () => {
    return (
        <nav className={styles.__navbar}>
            <Link href="#anchor1">anchor1</Link>
            <Link href="#anchor2">anchor2</Link>
            <Link href="#anchor3">anchor3</Link>
            <Link href="#anchor4">anchor4</Link>
            <Link href="#anchor5">anchor5</Link>
            <Link href="#anchor6">anchor6</Link>
        </nav>
    )
}

export default Navbar;