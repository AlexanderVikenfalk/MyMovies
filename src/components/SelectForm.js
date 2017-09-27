import React from 'react'

function SelectForm(props){

    return (
            <select value ={props.value}
                    onChange = {props.onChange}
                    >
                <option value=''>Show All Genres</option>            
                <option value="Drama"> Drama </option>
                <option value="Action"> Action </option>
                <option value="Crime"> Crime </option>
                <option value="Adventure"> Adventure </option>
            </select>
    )
}


export default SelectForm
