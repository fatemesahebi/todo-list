import React from 'react';
import {Typography,Stack} from "components/base";
import {ToDoList} from "features/todoList"
const ToDoListPage = () => {
    return (
        <Stack justifyContent={"start"} alignItems={"center"} gap={2}>
            <Typography sx={{letterSpacing:'5px',mb:2}} component={'h1'} fontSize={"2rem"} color={"white"}>
                TODO LIST
            </Typography>
            <ToDoList/>
            
        </Stack>
    );
};

export default ToDoListPage;