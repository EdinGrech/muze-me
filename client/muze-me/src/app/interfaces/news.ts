export interface News {
    /*{
        "id": 1,
        "source_id": "reuters",
        "source_name": "Reuters",
        "author": "None",
        "title": "Four dead in Alabama 'Sweet 16' birthday party shooting - Reuters.com",
        "description": "At least four people were killed and 28 wounded in a shooting that erupted during a late-night \"Sweet 16\" birthday celebration at a dance studio in the small town of Dadeville, Alabama, state police and local news media said on Sunday.",
        "url": "https://www.reuters.com/world/us/four-killed-multiple-injuries-alabama-shooting-2023-04-16/",
        "urlToImage": "https://www.reuters.com/resizer/IYdE-S9NyF7Q6k1poUUE-ZOQ71Y=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QPPR4TTNAFIB5L3KZTZP2RISAE.jpg",
        "publishedAt": "2023-04-17T00:26:00Z",
        "content": "April 16 (Reuters) - At least four people were killed and 28 wounded in a shooting that erupted during a late-night \"Sweet 16\" birthday celebration at a dance studio in the small town of Dadeville, A… [+4126 chars]",
        "sentement": -0.3612,
        "list_of_keywords": "sunday said four"
    },
    */
    id: number;
    source_id: string | null;
    source_name: string | null;
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
    sentement: number;
    list_of_keywords: string;
}