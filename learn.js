const memeData = {
    "success": true,
    "data": {
        "memes": [
            {
                "id": "181913649",
                "name": "Drake Hotline Bling",
                "url": "https://i.imgflip.com/30b1gx.jpg",
                "width": 1200,
                "height": 1200,
                "box_count": 2
            },
            {
                "id": "87743020",
                "name": "Two Buttons",
                "url": "https://i.imgflip.com/1g8my4.jpg",
                "width": 600,
                "height": 908,
                "box_count": 3
            },
            {
                "id": "112126428",
                "name": "Distracted Boyfriend",
                "url": "https://i.imgflip.com/1ur9b0.jpg",
                "width": 1200,
                "height": 800,
                "box_count": 3
            }       
        ]
    }
}

// for(let key in meme){
//    console.log(typeof(meme[key]));
// }
const num = Math.floor(Math.random() * 3);
const selectedMeme = memeData.data.memes.filter((meme,index) =>{
    
    console.log(num);
    return index === num;
});

console.log(selectedMeme)