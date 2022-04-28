
window.addEventListener('DOMContentLoaded', async(event) => {
    const res =  await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
    const data = await res.json()
    for (let dt of data) {
        const {thumbnailUrl,title} = dt;
        const widget = `
        <div class="w3-card-4 test" style="width:90%;max-width:150px;">
            <img src="${thumbnailUrl}" alt="Avatar" style="width:100%;opacity:0.85">
                <div class="w3-container">
                <h4><b>${parseFloat(Math.floor(Math.random() * (10 - 1)) + 1).toFixed(2)}</b></h4>    
                <p>${title.slice(0,10)}</p>    
            </div>
        </div>
        `
        const div = document.createElement('div')
        div.className = 'w3-third w3-margin-bottom'
        div.innerHTML = widget;
        document.getElementById('root').appendChild(div)
    }
    
    
});

