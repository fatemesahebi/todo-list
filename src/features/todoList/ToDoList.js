import React, {useState} from 'react';
import {connect} from "react-redux";
import {Box, Button, Stack} from "components/base";
import {AddTaskForm,ToDoDashboard,ViewTask,DeleteTask,ViewDoneTasks} from "./index"
import {setPageMode} from "redux/reducers/ToDo";
import todoImg from "assets/images/icons8-todo-list-100.png"

const ToDoList = (props) => {
    const {todoList, setPageMode} = props

    const handleAddButton = () => setPageMode("form")


    return (
        <div>
            <AddTaskForm/>
            <ViewTask/>
            <DeleteTask/>
            <ViewDoneTasks/>
            {
                (todoList?.length === 0) ?
                    <Stack gap={4}>
                        <Button variant="contained" onClick={handleAddButton}>create your first task</Button>
                        <Box component={"img"} src={todoImg}/>
                    </Stack>
                    :
                    <ToDoDashboard/>
            }


        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todoList: state?.todo?.todo,
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        setPageMode: (data) => dispatch(setPageMode(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);