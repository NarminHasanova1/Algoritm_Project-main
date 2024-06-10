document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById('news-container');

    // Example data (replace with your fetched news articles)
    const newsArticles = [
        {
            title: "Example News Article 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "https://example.com/article1"
        },
        {
            title: "Example News Article 2",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "https://example.com/article2"
        }
        // Add more articles as needed
    ];

    // Display news articles
    newsArticles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-article';

        const title = document.createElement('h3');
        title.textContent = article.title;
        title.className = 'news-title';

        const description = document.createElement('p');
        description.textContent = article.description;
        description.className = 'news-description';

        const link = document.createElement('a');
        link.href = article.url;
        link.textContent = 'Read more';
        link.className = 'news-link';
        link.target = '_blank';

        newsItem.appendChild(title);
        newsItem.appendChild(description);
        newsItem.appendChild(link);
        newsContainer.appendChild(newsItem);
    });
});
