document.querySelector('button').addEventListener('click', searchGif)


let apikey = "fh8I5dCtn7xLf12u66wIvajesdm5VXOz"
let urlTrend = `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}`

        fetch(urlTrend)
            .then(res => res.json())
            .then(trending => {
                console.log(trending.data)

                for(let i = 0; i < 10; i++) {
                    document.querySelector('.img-div').innerHTML += `<img src="${trending.data[i].images.downsized.url}">`
                 }
                    

            })
            .catch(err => {
                  console.log(`error ${err}`)
            })



function searchGif() {

    
    let apikey = "fh8I5dCtn7xLf12u66wIvajesdm5VXOz"
    let inputGiphy = document.querySelector('input').value.trim() //trim is eliminate any whitespace

    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&limit=1&q=`+inputGiphy


    fetch(url) 
        .then(res => res.json())
        .then(data => {

            console.log(data.data)
            
            let fig = document.createElement('figure')
            let img = document.createElement('img')
            let fc = document.createElement('figcaption')

            img.src = data.data[0].images.downsized.url;
            img.alt = data.data[0].title
            fc.textContent = data.data[0].title
            fig.appendChild(img)
            fig.appendChild(fc).style.fontSize = "1.3rem"

            let out = document.querySelector('.out')
            out.insertAdjacentElement('afterbegin', fig)

            // document.querySelector('img').src = data.data[0].images.downsized.url
            // document.querySelector('.title').innerText = data.data[0].title

            //clear search field
            document.querySelector('input').value = "";
        
        })
        .catch(err => {
            console.log(`error ${err}`)

        })

}

