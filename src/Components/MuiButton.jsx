import {  Button } from "@material-tailwind/react";


const MuiButton = () => {
    return (
        <>
            <div className="space-x-3">
            <Button variant="text">Text</Button>
            <Button variant="contained">contained</Button>
            <Button variant="outlined">outlined</Button>
            </div>
        </>
    );
};

export default MuiButton;