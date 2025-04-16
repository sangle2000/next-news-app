'use client';

import {DUMMY_NEWS} from "@/utils/dummy-news";
import {useRouter} from "next/navigation";
import {use} from "react";

export default function InterceptedNewsImagePage({ params }: { params: Promise<{ slug: string }> }) {
    const router = useRouter();

    const { slug } = use(params)

    const newsItem = DUMMY_NEWS.find(news => news.slug === slug)

    return (
        <>
            <div className="modal-backdrop" onClick={router.back}/>
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title as string}/>
                </div>
            </dialog>
        </>
    )
}