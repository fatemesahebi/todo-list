import React from 'react';
import {setPageMode, setSelectedItem,setDone} from "redux/reducers/ToDo";
import {connect} from "react-redux";
import {Typography,Button,Dialog,Stack,Box} from "components/base";
import lowImg from "assets/images/icons8-happy-100.png";
import medImg from "assets/images/icons8-lol-100.png";
import hardImg from "assets/images/icons8-angry-100.png";

const ViewTask = (props) => {

    const {setPageMode,selectedItem,setSelectedItem,pageMode,setDone}=props
    const task=selectedItem?.[0]
    const imgSrc = (task?.level === "low") ? lowImg : ((task?.level === "medium") ? medImg : hardImg)

    const handleCloseViewDialog = () => {
      setPageMode("list")
        setSelectedItem([])
    }
    const handleDoneTask = () => {
        setDone({...task})
        setPageMode("list")
        setSelectedItem([])

    }
    const handleDeleteTask = () => {
        setPageMode("delete")
    }
    const handleEditTask = () => {
        setPageMode("form")
    }


    return (
        <Dialog open={pageMode === "view"} handleClose={handleCloseViewDialog} >
            <Stack justifyContent={"center"} width={{md:"500px",xs:"100%"}} >
                <Typography fontSize={"2rem"} fontWeight={700} textAlign={"center"}>
                    {task?.title}
                </Typography>

                    <Stack justifyContent={"center"} width={"50px"} alignItems={"center"} sx={{position:"relative",bottom:"40px"}}>
                        <Box component={"img"} src={imgSrc} width={"48px"}/>
                        <Typography>
                            {task?.level}
                        </Typography>
                    </Stack>


                <Typography textAlign={"justify"} m={"auto"} px={4} pb={2}>
                    {task?.desc}
                </Typography>
                <Stack direction={"row"} justifyContent={"space-between"} gap={2}>
                    <Button variant={"contained"} onClick={handleEditTask} color={"secondary"}>
                        edit task
                    </Button>
                    <Button variant={"contained"} onClick={handleDoneTask}>
                        done task
                    </Button>
                    <Button variant={"contained"} onClick={handleDeleteTask} color={"error"}>
                        delete task
                    </Button>
                </Stack>
            </Stack>

        </Dialog>);
};



const mapStateToProps = (state) => {
    return {
        pageMode: state?.todo?.pageMode,
        selectedItem:state?.todo?.selectedItem,
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        setPageMode: (data) => dispatch(setPageMode(data)),
        setSelectedItem: (data) => dispatch(setSelectedItem(data)),
        setDone: (data) => dispatch(setDone(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewTask);