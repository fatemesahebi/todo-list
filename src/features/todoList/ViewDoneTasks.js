import React from 'react';
import {setDone, setPageMode, setSelectedItem} from "redux/reducers/ToDo";
import {connect} from "react-redux";
import {ToDoCardsSection} from "./index";
import {Dialog,Box} from "components/base";

const ViewDoneTasks = (props) => {
    const{setPageMode,pageMode,todoList}=props

    const handleCloseViewDoneDialog = () => {
      setPageMode("list")
    }
    const completeList = todoList.filter(item => item.active === false)

    return (
        <Dialog open={pageMode === "viewDone"} handleClose={handleCloseViewDoneDialog} title={"Done Tasks"} >
            <Box width={{md:"500px",xs:"100%"}}>
                <ToDoCardsSection list={completeList}/>

            </Box>
        </Dialog>

        );
};


const mapStateToProps = (state) => {
    return {
        pageMode: state?.todo?.pageMode,
        todoList: state?.todo?.todo,
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        setPageMode: (data) => dispatch(setPageMode(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewDoneTasks);
