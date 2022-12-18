import React from "react";
import '../CSS/Form.css'
import memeData from "../Data/memeData";

export default function FormComponent(props){

    const [meme, setMeme] = React.useState(
        {
            topText: '',
            bottomText : '',
            randomImage  :''
        }
    );
    
    function getMemeImage(){
        const memeArray = memeData.data.memes;
        let randNumber = Math.floor(Math.random() * memeArray.length-1);
        randNumber = randNumber > memeArray.length ? memeArray.length - 2 : randNumber
        setMeme(prevState => ({
            randomImage : memeArray[randNumber].url
        }))
        
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]:value
        }))
    }
    
    return(
        <main>
            <div className="container-form">
                <input  
                    className="form-input"
                    type="text"
                    placeholder ="get lost"
                    name="topText"
                    value ={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    className="form-input"
                    type="text" 
                    placeholder="write something"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    onClick={getMemeImage}
                    className="generate-btn">
                    Get a new meme image
                </button>
            </div>
            <div  className="meme">
                <img className="meme-image" src={meme.randomImage} alt=''/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            
            
        </main>

    )
}