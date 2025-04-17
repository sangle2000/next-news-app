import {getLatestNews} from "@/lib/news";
import NewsList from "@/components/news/news-list";

export default async function LatestNewsPage() {
    const newsOfLatestYear = await getLatestNews()

    return (
        <>
            <h1>
                Latest News Page
            </h1>
            <NewsList news={newsOfLatestYear} />
        </>
    )
}