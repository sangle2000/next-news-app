import {getAvailableNewsYear} from "@/lib/news";
import Link from "next/link";

export default function ArchivePage() {

    const links: number[] = getAvailableNewsYear()

    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {
                        links.map(link => (
                            <li key={link}>
                                <Link href={`/archive/${link}`}>
                                    {link}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}