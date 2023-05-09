from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer

def extract_keywords(text):
    try:
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
    except:
        keywords = ""

    return keywords