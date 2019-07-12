// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container')


    axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(data=>{
        const articles = data.data.articles;
        const bootstrap = articles.bootstrap;
        const javascript = articles.javascript;
        const jquery = articles.jquery;
        const node = articles.node;
        const technology = articles.technology;

        
        bootstrap.forEach(card => {
          
            const element = createArticleCard(card);
            cardsContainer.appendChild(element);
        });

        javascript.forEach(card => {
      
            const element = createArticleCard(card);
            cardsContainer.appendChild(element);
        });
        
        jquery.forEach(card => {
        
            const element = createArticleCard(card);
            cardsContainer.appendChild(element);
        });

        jquery.forEach(card => {
            
            const element = createArticleCard(card);
            cardsContainer.appendChild(element);
        });

        node.forEach(card => {
         
            const element = createArticleCard(card);
            cardsContainer.appendChild(element);
        });

        technology.forEach(card => {
           
            const element = createArticleCard(card);
            cardsContainer.appendChild(element);
        });
    })
    .catch(error=>{
        console.log('The lambda backend is currently not working',error)
    })

    

function createArticleCard (data){
    const articleCard = document.createElement('div');
    const articleHeadline = document.createElement('div');
    const articleAuthor = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const nameAuthor = document.createElement('span');

    articleCard.classList.add('card');
    articleHeadline.classList.add('headline');
    articleAuthor.classList.add('author');
    imgContainer.classList.add('img-container');

    articleHeadline.textContent = data.headline;
    img.src = data.authorPhoto;
    nameAuthor.textContent = data.authorName;

    articleCard.appendChild(articleHeadline);
    articleCard.appendChild(articleAuthor);
    articleAuthor.appendChild(imgContainer);
    articleAuthor.appendChild(nameAuthor);
    imgContainer.appendChild(img);

    return articleCard;
}