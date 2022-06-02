import React, { useRef, useState } from "react";
import {PropTypes} from "prop-types";

export const AddCategory = ({setcategory}) => {

    AddCategory.propTypes = {
       setcategory: PropTypes.func.isRequired,
    };
    
    const [input, setInput] = useState('')
    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        const value = e.target.value;
        setInput(value);
    }


    const onSubmitInput = (e) => {
        e.preventDefault();
        const value = inputRef.current.value;

        if (value.trim().length > 0) {
            setcategory(animes => [value, ...animes,]);

            inputRef.current.value = '';
        }


        

    }
    

    const onReset = () => {
        setcategory([]);
    }

    return (
        <div>
            <form className="form" action="" onSubmit={onSubmitInput}>
                <input
                    id="inputAnime"
                    type="text"
                    ref={inputRef}
                    onChange={onChangeInput}
                    placeholder="Add new Category" 
                />
      
                <div className="button-group">
                <button type='submit'>ADD SEARCH</button>
                <button onClick={onReset} >RESET</button>
                </div>
            </form>
            
        </div>
    );

    
        
};
