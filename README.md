## Muze-Me Full Stack App

Welcome to Muze-Me, a full stack application built on Angular 15, Ionic, and Django 4. This app utilizes the NLTK library for sentiment analysis and keyword extraction. With just a few easy steps, you can deploy the app using Docker Compose.

## Demo Images

| Login Page                                                                                 | Home Page                                                                                                                                                                      | Navigation Page |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| ![Muze-Me Login Page](https://github.com/EdinGrech/muze-me/blob/master/demo-img/login.png) | ![Muze-Me Home Page](https://github.com/EdinGrech/muze-me/blob/master/demo-img/home.png)![Muze-Me Nav Page](https://github.com/EdinGrech/muze-me/blob/master/demo-img/nav.png) |

## Prerequisites

Before getting started, make sure you have the following installed on your system:

- Docker
- Docker Compose

## Getting Started

To deploy Muze-Me, follow these steps:

1. Set the site's details in the `client/muze-me/src/environments/environment.prod.ts` file:

```typescript
export const environment = {
  production: true,
  motherShipUrl: "http://127.0.0.1", // temporary
  appPort: "8100",
  apiPort: "8000", //internal
};
```

2. Create a .env file in the server/ directory by using the provided .example.env file.

3. In the root directory of the repository, run the following command:

```shell
docker-compose up
```

This will start the deployment process and bring up the Muze-Me application.

## NLTK Code Snippets

Here are a couple of code snippets showcasing the usage of NLTK in Muze-Me:

1. Keyword Extraction:

```python
# Tokenize the text
tokens = word_tokenize(text.lower())

# Remove stopwords and punctuation
stop_words = set(stopwords.words('english'))
filtered_tokens = [token for token in tokens if token not in stop_words and token not in string.punctuation]

# Lemmatize the filtered tokens
lemmatizer = WordNetLemmatizer()
lemmas = [lemmatizer.lemmatize(token) for token in filtered_tokens]

# Vectorize the lemmas
vectorizer = TfidfVectorizer()
vectors = vectorizer.fit_transform(lemmas)

# Get the top 5 keywords based on their TF-IDF score
feature_names = vectorizer.vocabulary_
sorted_indices = vectors.sum(axis=0).A1.argsort()[::-1]
top_indices = sorted_indices[:3]
keywords = ""
for i in top_indices:
    if i < len(feature_names):
        keywords += list(feature_names.keys())[i] + " "
```

2. Sentiment Analysis:

```python
from nltk.sentiment.vader import SentimentIntensityAnalyzer
sid = SentimentIntensityAnalyzer()
return ((sid.polarity_scores(str(text))))['compound']
```

Feel free to explore the codebase and modify it as per your requirements.

## Contributing

If you would like to contribute to Muze-Me, please follow the standard guidelines [coming soon]

## MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
