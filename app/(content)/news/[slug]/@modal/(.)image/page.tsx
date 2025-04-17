import ModalBackdrop from "@/components/news/modal-backdrop";
import {getNewsItem} from "@/lib/news";

export default async function InterceptedNewsImagePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const newsItem = await getNewsItem(slug)

    return (
        <>
            <ModalBackdrop />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title as string}/>
                </div>
            </dialog>
        </>
    )
}