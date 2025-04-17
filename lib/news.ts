import sql from 'better-sqlite3';
import {monthType, newsType, yearType} from "@/utils/Type";

const db = sql('data.db')

export async function getAllNews(): Promise<newsType[]> {
    const news: newsType[] = db.prepare("SELECT * FROM news").all() as newsType[];
    await new Promise(resolve => setTimeout(resolve, 2000));
    return news;
}

export async function getNewsItem(slug: string): Promise<newsType> {
    const newsItem = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug) as newsType;

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return newsItem;
}

export async function getLatestNews(): Promise<newsType[]> {
    const latestNews = db
        .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
        .all() as newsType[];
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return latestNews;
}

export async function getAvailableNewsYears(): Promise<number[]> {
    const rows = db
        .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
        .all() as yearType[];

    const years = rows.map((year) => parseInt(year.year));

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return years;
}

export function getAvailableNewsMonths(year: string): number[] {
    const row = db
        .prepare(
            "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
        )
        .all(year) as monthType[];

    const months = row.map((month) => parseInt(month.month));

    return months;

}

export async function getNewsForYear(year: string): Promise<newsType[]> {
    const news = db
        .prepare(
            "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
        )
        .all(year) as newsType[];

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return news;
}

export async function getNewsForYearAndMonth(year: string, month: string): Promise<newsType[]> {
    const news = db
        .prepare(
            "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
        )
        .all(year, month) as newsType[];

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return news;
}
