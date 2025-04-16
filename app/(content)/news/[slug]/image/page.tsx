import {DUMMY_NEWS} from "@/utils/dummy-news";

export default async function NewsImagePage({ params }: { params: { slug: string } }) {
    const { slug } = await params

    const newsItem = DUMMY_NEWS.find(news => news.slug === slug)

    return (
        <>
            <h1>{newsItem?.title}</h1>
            <div className="fullscreen-image">
                <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title as string}/>
            </div>
        </>
    )
}