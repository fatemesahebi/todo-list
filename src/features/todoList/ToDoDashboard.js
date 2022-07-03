import * as React from 'react';
import styled from 'styled-components';
import {Box, Button, Tab, TabContext, TabList, TabPanel} from "components/base"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ToDoCardsSection from "./ToDoCardsSection";
import {setPageMode, setSelectedItem} from "redux/reducers/ToDo";
import {connect} from "react-redux";
const StyledAddCircleIcon = styled(AddCircleIcon)`
  ${() => `
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
  `}
`;

const ToDoDashboard = (props) => {

    const {todoList, setPageMode, setSelectedItem} = props

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleAddTask = () => {
        setPageMode("form")
        setSelectedItem([])
    }
    const handleViewDoneTasks = () => {
        setPageMode("viewDone")
    }

    const activeList = todoList.filter(item => item.active)


    return (
        <Box sx={{width: '80vw', typography: 'body1'}}>
            <Button variant={"contained"} onClick={handleViewDoneTasks} sx={{mb: 1}}>
                view done tasks
            </Button>
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <TabList
                        textColor={"secondary"}
                        indicatorColor={"secondary"}
                        onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="ActiveTasks" value="1"/>
                        <Tab label="All Tasks" value="2"/>
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <ToDoCardsSection list={activeList}/>
                    <StyledAddCircleIcon
                        sx={{
                        position: 'absolute',
                        bottom: 40,
                        right: 50,
                        fontSize: "48px",
                        color: theme => theme.palette.secondary[500]
                    }}
                        onClick={handleAddTask}
                    />
                </TabPanel>
                <TabPanel value="2">
                    <ToDoCardsSection list={todoList}/>
                </TabPanel>
            </TabContext>
        </Box>
    );
};


const mapStateToProps = (state) => {
    return {
        todoList: state?.todo?.todo,
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        setPageMode: (data) => dispatch(setPageMode(data)),
        setSelectedItem: (data) => dispatch(setSelectedItem(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoDashboard);
