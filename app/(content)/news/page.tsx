import NewsList from "@/components/news/news-list";
import {newsType} from "@/utils/Type";
import {getAllNews} from "@/lib/news";

export default async function NewsPage() {
    const news: newsType[] = await getAllNews();

    return (
        <>
            <h1>News Page</h1>
            <NewsList news={news} />
        </>
    )
}
