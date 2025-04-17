import {getNewsItem} from "@/lib/news";

export default async function NewsImagePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const newsItem = await getNewsItem(slug)

    return (
        <>
            <h1>{newsItem?.title}</h1>
            <div className="fullscreen-image">
                <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title as string}/>
            </div>
        </>
    )
}