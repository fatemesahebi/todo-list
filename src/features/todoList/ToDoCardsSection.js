import React from 'react';
import {ToDoCard} from "./index"
import {Stack} from "components/base"
const ToDoCardsSection = ({list}) => {

    return (
        <Stack gap={1} height={"230px"} overflow={"auto"}>
            {
                list.map(todo=><ToDoCard todo={todo}/>)
            }
        </Stack>
    );
};

export default ToDoCardsSection;