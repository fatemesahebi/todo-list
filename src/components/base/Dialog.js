import * as React from 'react';
import {Dialog as Dialog_} from '@mui/material';
import {DialogContent,DialogTitle} from "./index"

const Dialog=({open,handleClose,title,children})=> {

    return (
            <Dialog_
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent sx={{mt:2}}>
                    {children}
                </DialogContent>
            </Dialog_>

    );
}
export default Dialog
