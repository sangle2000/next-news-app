import {getLatestNews} from "@/lib/news";
import NewsList from "@/components/news/news-list";

export default function LatestNewsPage() {
    const newsOfLatestYear = getLatestNews()

    return (
        <>
            <h1>
                Latest News Page
            </h1>
            <NewsList news={newsOfLatestYear} />
        </>
    )
}