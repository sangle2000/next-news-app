import NewsList from "@/components/news/news-list";
import {
    getAllNews,
    getAvailableNewsMonths,
    getAvailableNewsYears,
    getNewsForYear,
    getNewsForYearAndMonth
} from "@/lib/news";
import Link from "next/link";

export default async function FilteredNewsPage({ params }: { params: Promise<{ filter: string[] }> }) {
    const { filter } = await params

    const selectedYear = filter?.[0]
    const selectedMonth = filter?.[1]

    let news;
    let links: number[] = await getAvailableNewsYears()

    if (selectedYear && !selectedMonth) {
        news = await getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear)
    }

    if (selectedYear && selectedMonth) {
        news = await getNewsForYearAndMonth(selectedYear, selectedMonth)
        links = [];
    }

    if (!selectedYear && !selectedMonth) {
        news = await getAllNews()
    }

    const newsContent = news && news.length > 0 ? <NewsList news={news} /> : <p>No news found the selected period.</p>

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {
                            links.map(link => {
                                const href = selectedYear ? `/archive/${selectedYear}/${link}` : `archive/${link}`;

                                return <li key={link}>
                                    <Link href={href}>
                                        {link}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </nav>
            </header>

            {newsContent}
        </>
    )
}