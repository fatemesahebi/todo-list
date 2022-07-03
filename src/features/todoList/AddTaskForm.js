import React from 'react';
import {Form, Formik} from "formik"
import * as Yup from "yup"
import {
    Button,
    Grid,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Dialog
} from "components/base";
import {connect} from "react-redux";
import {addTolist, setPageMode, addCounter, setSelectedItem, editList} from "redux/reducers/ToDo"


const AddTaskForm = (props) => {
    const {addTolist, setPageMode, pageMode, counter, addCounter, selectedItem, setSelectedItem, editList} = props

    let validationSchema = Yup.object().shape({
        title: Yup.string().required("title is required"),

    })
    const initialLoginValues = {
        title: (selectedItem.length !== 0) ? selectedItem?.[0]?.title : '',
        desc: (selectedItem.length !== 0) ? selectedItem?.[0]?.desc : '',
        gift: (selectedItem.length !== 0) ? selectedItem?.[0]?.gift : '',
        level: (selectedItem.length !== 0) ? selectedItem?.[0]?.level : 'low',
        active: (selectedItem.length !== 0) ? selectedItem?.[0]?.active : true,
        id: (selectedItem.length !== 0) ? selectedItem?.[0]?.id : counter,
    }

    const onSubmit = async (values) => {
        if (selectedItem.length !== 0)  editList(values)
        else {
                addTolist(values)
                addCounter()
            }
        setPageMode("list")
        setSelectedItem([])
    }
    const handleCloseAddDialog = () => setPageMode("list")


    return (
        <Dialog open={pageMode === "form"} handleClose={handleCloseAddDialog}
                title={(selectedItem.length !== 0) ? "Edit Task" : "Add New Task"}
        >
            <Formik
                enableReinitialize={true}
                initialValues={initialLoginValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {({
                      errors,
                      touched,
                      handleSubmit,
                      dirty,
                      isValid,
                      values,
                      handleChange,
                      handleBlur
                  }) => {
                    return (
                        <Form onSubmit={handleSubmit}
                              style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  width: 'full',
                                  height: '100%',
                              }}>
                            <Grid container xs={11} spacing={2}>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField
                                        label="Task Title"
                                        onChange={handleChange}
                                        name="title"
                                        value={values.title}
                                        onBlur={handleBlur}
                                        error={!!errors.title && touched.title}
                                        helperText={!!errors.title && touched.title ? errors.title : ''}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField
                                        label="Task Description"
                                        onChange={handleChange}
                                        name="desc"
                                        value={values.desc}
                                        onBlur={handleBlur}
                                        error={!!errors.desc && touched.desc}
                                        helperText={!!errors.desc && touched.desc ? errors.desc : ''}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField
                                        label="Task Gift and KPI"
                                        onChange={handleChange}
                                        name="gift"
                                        value={values.gift}
                                        onBlur={handleBlur}
                                        error={!!errors.gift && touched.gift}
                                        helperText={!!errors.gift && touched.gift ? errors.gift : ''}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">Task level</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            value={values.level}
                                            onChange={(e => handleChange('level')(e))}
                                        >
                                            <FormControlLabel value="low" control={<Radio/>} label="low"/>
                                            <FormControlLabel value="medium" control={<Radio/>} label="medium"/>
                                            <FormControlLabel value="high" control={<Radio/>} label="high"/>

                                        </RadioGroup>
                                    </FormControl>
                                </Grid>


                                <Grid item xs={12} sm={12} md={12}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="Submit"
                                        fullWidth

                                    >
                                        {(selectedItem?.length !== 0) ? "edit task" : "add to task"}
                                    </Button>

                                </Grid>
                            </Grid>

                        </Form>

                    )
                }}
            </Formik>
        </Dialog>
    );

};

const mapStateToProps = (state) => {
    return {
        pageMode: state?.todo?.pageMode,
        counter: state?.todo?.counter,
        selectedItem: state?.todo?.selectedItem,
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        addTolist: (data) => dispatch(addTolist(data)),
        setPageMode: (data) => dispatch(setPageMode(data)),
        addCounter: (data) => dispatch(addCounter(data)),
        setSelectedItem: (data) => dispatch(setSelectedItem(data)),
        editList: (data) => dispatch(editList(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm);
