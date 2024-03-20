import Link from "next/link";


export default function Alink({href,text}) {
    return(
        <Link href={href}>{text}</Link>
    )
}