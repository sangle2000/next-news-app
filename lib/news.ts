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

    return [...year];
}

// export function getAvailableNewsMonths(year) {
//
// }

export function getNewsForYear(year: string): newsType[] {
    return DUMMY_NEWS.filter(news => new Date(news.date).getFullYear() === parseInt(year));
}

// export function getNewsForYearAndMonth(year, month) {
//
// }
