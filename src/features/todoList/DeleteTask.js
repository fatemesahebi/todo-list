import React from 'react';
import {setPageMode, setSelectedItem, deleteItem} from "redux/reducers/ToDo";
import {connect} from "react-redux";
import {Dialog, Typography, Button, Box,Stack} from "components/base";

const DeleteTask = (props) => {
    const {pageMode, setPageMode, selectedItem, setSelectedItem, deleteItem} = props

    const handleCloseDeleteDialog = () => {
        setPageMode("view")
    }
    const handleDeleteTask = () => {
        deleteItem(selectedItem[0])
        setPageMode("list")
        setSelectedItem([])
    }


    return (
        <Dialog open={pageMode === "delete"} handleClose={handleCloseDeleteDialog} title={"Add New Task"}>
            <Box width={"300px"}>


                <Typography>
                    Are you sure?
                </Typography>
                <Stack direction={"row"} gap={1} pt={4}>
                    <Button variant={"contained"} onClick={handleDeleteTask}>
                        delete
                    </Button>
                    <Button variant={"contained"} color={"error"} onClick={handleCloseDeleteDialog}>
                        cancel
                    </Button>
                </Stack>

            </Box>

        </Dialog>
    );
};

const mapStateToProps = (state) => {
    return {
        pageMode: state?.todo?.pageMode,
        selectedItem: state?.todo?.selectedItem,
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        setPageMode: (data) => dispatch(setPageMode(data)),
        setSelectedItem: (data) => dispatch(setSelectedItem(data)),
        deleteItem: (data) => dispatch(deleteItem(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTask);
