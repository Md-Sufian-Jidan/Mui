import { Typography } from "@material-tailwind/react";

const MuiTypography = () => {
    return (
        <div className='flex flex-col justify-center'>
            <Typography className="font-sans" variant="h1">h1 Heading</Typography>
            <Typography className="font-serif" variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4">h4 Heading</Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>
            {/* subtitle */}
            {/* <Typography variant="subtitle1">subtitle 1</Typography> */}
            {/* <Typography variant="subtitle2">subtitle 2</Typography> */}

            <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perferendis fugiat optio facere error eos magnam veniam ex obcaecati temporibus minus, libero similique. Iusto cum eligendi vero. Eum, distinctio illum?</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perferendis fugiat optio facere error eos magnam veniam ex obcaecati temporibus minus, libero similique. Iusto cum eligendi vero. Eum, distinctio illum?</Typography>
        </div>
    );
};

export default MuiTypography;