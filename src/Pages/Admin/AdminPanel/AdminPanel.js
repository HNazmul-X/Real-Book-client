import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import AddItem from '../AddItem/AddItem';
import EditItem from '../EditItem/EditItem';
import GreetingUser from '../GreetingUser/GreetingUser';
import ManageItem from '../ManageItem/ManageItem';
import EditIcon from "@material-ui/icons/Edit";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import AppsIcon from "@material-ui/icons/Apps";
import "./AdminPanel.css"

const AdminPanel = () => {
    const [adminView , setAdminView] = useState("")
    return (
        <Grid container>
            <Grid className="admin-panel-list" item md={3}>
               <ul className="">
                   <li className="admin-panel-listItem">
                       <h5 onClick={()=> setAdminView("manage-product")} ><AppsIcon className="icon"/>Manage Products</h5>
                   </li>
                   <li className="admin-panel-listItem">
                       <h5 onClick={()=> setAdminView("add-product")} ><AddCircleTwoToneIcon className="icon"/>Add Products</h5>
                   </li>
                   <li className="admin-panel-listItem">
                       <h5 onClick={()=> setAdminView("edit-product")} > <EditIcon className="icon"/>Edit Products</h5>
                   </li>
               </ul>
            </Grid>
            <Grid item className="admin-panel-item" md={9}>
               {
                   adminView === "manage-product"? <ManageItem/> : 
                   adminView === "add-product" ? <AddItem></AddItem> : 
                   adminView === "edit-product"? <EditItem></EditItem>:
                   <GreetingUser></GreetingUser>
               }
            </Grid>
            
        </Grid>
    );
};

export default AdminPanel;


const manage = () => {
    return(
        <> 
        <h1>hello this is manage panel</h1>
        </>
    )
}