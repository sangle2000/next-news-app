import NewsList from "@/components/news/news-list";
import {getNewsForYear} from "@/lib/news";

export default async function FilteredNewsPage({ params }: { params: { year: string } }) {
    const { year } = await params
    const newsItem = getNewsForYear(year)

    return (
        <>
            <NewsList news={newsItem} />
        </>
    )
}