import { News } from './news';
export interface newsPost {
    news: News,
    showSource_name: boolean,
    showAuthor: boolean,

    showPublishedAt: boolean,
    publishedAt: string,

    showSentement: boolean,
    sentimentEmoji: string,

    showList_of_keywords: boolean,
    keywords: string[],
}