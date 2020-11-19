// const link = "http://agataswistak.com/wordpress/wp-json/wp/v2/ap_content";

// let params = new URLSearchParams(document.location.search.substring(1));
// let articleFromUrl = params.get("article");

window.addEventListener("DOMContentLoaded", getData);

function getData() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log("URLSearchParams " + window.location);
    const articles_category = urlParams.get('category');
    console.log(articles_category);
    fetch("https://agataswistak.com/wordpress/wp-json/wp/v2/ap_content?per_page=100")
        .then(response => response.json())
        .then(showPosts);
}


function showPosts(posts) {
    console.log(posts);
    posts.forEach(showArticles);
}


const showurlParams = new URLSearchParams(window.location.search);
let articles_showcategory = showurlParams.get('category');
if (articles_showcategory === 'pension') {
    document.querySelector('.articles > h1').textContent = 'Pensions';
    document.querySelector('.main_title > h1').textContent = 'Dialogue meetings';
    document.querySelector('.main_title > h2').textContent = 'See our scheduled dialogue meetings';
    document.querySelector('.photo > img').src = "https://agataswistak.com/wordpress/wp-content/uploads/2020/11/how-does-this-work.png";
    document.querySelector('.main_article> a').href = 'https://akademikerpension.dk/medlemsejet/arrangementer/dialogmoder/';
} else if (articles_showcategory === 'members') {
    articles_showcategory = 37;
    document.querySelector('.articles > h1').textContent = 'Members';
    document.querySelector('.main_title > h1').textContent = 'Costs and fees';
    document.querySelector('.main_title > h2').textContent = 'Overview 2020';
    document.querySelector('.photo > img').src = "https://agataswistak.com/wordpress/wp-content/uploads/2020/11/how-does-this-work.png";
    document.querySelector('.main_article> a').href = 'https://akademikerpension.dk/om-akademikerpension/omkostninger-og-gebyrer/';
} else {
    articles_showcategory = 38;
    document.querySelector('.articles > h1').textContent = 'About AP';
    document.querySelector('.main_title > h1').textContent = 'Personal advice';
    document.querySelector('.main_title > h2').textContent = 'Book video advice';
    document.querySelector('.photo > img').src = "https://agataswistak.com/wordpress/wp-content/uploads/2020/11/how-does-this-work.png";
    document.querySelector('.main_article> a').href = 'https://akademikerpension.dk/pension/radgivning/personlig-radgivning/';
}


function showArticles(article) {
    if (article.categories[0] === articles_showcategory) {

        const template = document.querySelector(`#articletemplate`).content;
        const clone = template.cloneNode(true);
        let opencategory = '';
        // if ( article.categories === 37){
        //     opencategory = 'members';
        // }else if(
        //     article.categories=== 39){
        //     opencategory = 'pension';
        //     }else{
        //         opencategory = 'about_ap'
        //     }
        console.log(opencategory);
        clone.querySelector('.title_small > h1').textContent = article.title_article;
        clone.querySelector('.title_small > h2').textContent = article.short_line;
        clone.querySelector('.articlelink').href = article.link;
        clone.querySelector(".articleimage").src = article.photo.guid;
        // if (articles_showcategory === opencategory){
        if (clone.positioning === 0) {
            document.querySelector(".all_articles").appendChild(clone);
        } else{
            document.querySelector(".all_articles").appendChild(clone);
        }

    }
}
