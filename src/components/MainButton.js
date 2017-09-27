import React from 'react'
import { Button } from 'reactstrap';

export default function MainButton(props){   
        return (
            <div className="MainButtonContainer">
                <Button onClick={() => props.fetchFromAPI()}> Fetch Movies </Button>
            </div>    );
        
}
