import { DUMMY_NEWS } from "@/utils/dummy-news";
import {newsType} from "@/utils/Type";

export function getAllNews() {
    return DUMMY_NEWS;
}

export function getLatestNews(): newsType[] {
    return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYear(): number[] {
    const year = new Set<number>();

    DUMMY_NEWS.map(news => year.add(new Date(news.date).getFullYear()));

    return [...year].reverse();
}

export function getAvailableNewsMonths(year: number) {
    const months = new Set<number>();

    DUMMY_NEWS.forEach((news) => {
        const newsYear = new Date(news.date).getFullYear()

        if (newsYear === year) {
            const month = new Date(news.date).getMonth();

            months.add(month + 1);
        }
    })

    return [...months].sort((a, b) => a - b);
}

export function getNewsForYear(year: string): newsType[] {
    return DUMMY_NEWS.filter(news => new Date(news.date).getFullYear() === parseInt(year));
}

export function getNewsForYearAndMonth(year: number, month: number) {
    return DUMMY_NEWS.filter(news => {
        return new Date(news.date).getFullYear() === year && new Date(news.date).getMonth() + 1 === month
    })
}
