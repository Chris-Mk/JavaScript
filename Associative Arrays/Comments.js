function comments(input) {
    const users = [];
    const articles = new Map();
    const result = new Map();

    for (const line of input) {
        if (line.includes('user')) {
            const data = line.split(' ');

            if (!users.includes(data[1])) {
                users.push(data[1]);
            }
        } else if (line.includes('article')) {
            const data = line.split(' ');

            if (!articles.get(data[1])) {
                articles.set(data[1], 0);
            }
        } else {
            const commentsPart = line.split(': ');
            const [name, article] = commentsPart[0].split(' posts on ');

            if (articles.has(article)) {
                articles.set(article, articles.get(article) + 1);

                if (!result.has(article)) {
                    result.set(article, new Map());
                }

                if (users.includes(name)) {
                    result.get(article).set(name, commentsPart[1].replace(',', ' -'));
                }
            }
        }
    }
    [...articles]
        .sort((a, b) => b[1] - a[1])
        .forEach(e => {
            console.log(`Comments on ${e[0]}`);
            [...result.get(e[0])]
                .sort((a, b) => a[0].localeCompare(b[0]))
                .forEach(comment => console.log(`--- From user ${comment[0]}: ${comment[1]}`))
        })
}

comments(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much']);