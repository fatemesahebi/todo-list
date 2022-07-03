import React from 'react';
import {connect} from "react-redux";
import {Typography, Stack, Button, Box} from "components/base";
import {setSelectedItem, setPageMode, setDone} from "redux/reducers/ToDo";
import CircleIcon from '@mui/icons-material/Circle';
import lowImg from "assets/images/icons8-happy-100.png"
import medImg from "assets/images/icons8-lol-100.png"
import hardImg from "assets/images/icons8-angry-100.png"

const ToDoCard = (props) => {
    const {todo, setPageMode, setDone, setSelectedItem, pageMode} = props
    const imgSrc = (todo?.level === "low") ? lowImg : ((todo?.level === "medium") ? medImg : hardImg)

    const handleEditTask = (e) => {
        e.stopPropagation()
        setSelectedItem([{...todo}])
        setPageMode("form")
    }
    const handleDoneTask = (e) => {
        e.stopPropagation()
        setDone(todo)
    }
    const handleClickTask = () => {
        setSelectedItem([{...todo}])
        setPageMode("view")
    }

    return (
        <Stack sx={{border: "1px solid ", color:`${pageMode!=="viewDone" && "white"}`, p: 1, borderRadius: "8px"}} onClick={handleClickTask}>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <CircleIcon fontSize={"8px"}/>
                    <Typography fontSize={"1.3rem"} fontWeight={700} >
                        {todo?.title}
                    </Typography>
                </Stack>

                <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <Typography fontSize={"0.8rem"}>
                        {todo?.level}
                    </Typography>
                    <Box component={"img"} src={imgSrc} width={"48px"}/>
                </Stack>

            </Stack>
            <Stack direction={{md:"row",xs:"column"}} justifyContent={"space-between"} height={{md:"30px",xs:"60px"}}>
                <Typography sx={{color: "#c9c1cb !important"}} >
                    {(todo?.desc?.length > 50) ? todo?.desc.substring(0, 50) + "..." : todo?.desc}
                </Typography>
                {todo?.active && <Stack direction={"row"} gap={2}>
                    <Button variant="contained" size={"small"} onClick={(e) => handleEditTask(e)}>
                        edit task
                    </Button>
                    <Button variant="contained" size={"small"} color={"secondary"} onClick={(e) => handleDoneTask(e)}>
                        done task
                    </Button>
                </Stack>
                }

            </Stack>

        </Stack>
    );
};

const mapStateToProps = (state) => {
    return {
        pageMode: state?.todo?.pageMode
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedItem: (data) => dispatch(setSelectedItem(data)),
        setPageMode: (data) => dispatch(setPageMode(data)),
        setDone: (data) => dispatch(setDone(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoCard);