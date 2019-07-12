// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector('.topics'); 
axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(data=>{
        const dataLambda = data.data.topics;
        dataLambda.forEach(item => {
            const element = createTab(item);
            topics.appendChild(element)
        });  
    })
    .catch(error=>{
        console.log('The lambda backend is currently not working',error)
    })


function createTab(array){
   const tab = document.createElement('div');
   tab.classList.add('tab');
   tab.textContent = array;
   return tab;
}