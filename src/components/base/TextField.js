import React from 'react';
import {TextField as TextField_} from "@mui/material";

const TextField = ({children, ...rest}) => {
    return (
        <TextField_
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
            fullWidth
            multiline
            {...rest}
        >
            {children}
        </TextField_>
    );
};

export default TextField;