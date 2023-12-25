import {React, useState} from "react";
import './adminLogIn.css'
import { Rate } from 'antd';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { FormControlLabel, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { NavLink } from "react-router-dom";
import "./adminLogIn.css"


export const AdminLogIn=()=>
{
        const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
        const [value, setValue] = useState(3);  
        return(
                <div>
                        <div id="mainContainer">
                                <Box    component="form"
                                        sx={{
                                                '& > :not(style)': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                        
                                        >
                                        <TextField id="outlined-basic"  InputProps={{style: { borderColor: 'white' },}} label="Enter the Name of Player" variant="outlined" />
                                        <br></br>
                                        <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                                <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        label="Age"
                                                        MenuProps={{
                                                                PaperProps: {
                                                                  style: {
                                                                    maxHeight: 200,
                                                                    width: 250,
                                                                  },
                                                                },}}
                                                                renderValue={(selected) => <div style={{ background: 'white' }}>{selected}</div>}
                                                                >
                                                                  <MenuItem style={{backgroundColor:'white', width:'250px'}} value="Batsmen">Batsmen</MenuItem>
                                                                  <MenuItem style={{backgroundColor:'white', width:'250px'}} value="Wicket Keeper Batsmen">Wicket Keeper Batsmen</MenuItem>
                                                                  <MenuItem style={{backgroundColor:'white', width:'250px'}} value="Spin - All Rounder">Spin - All Rounder</MenuItem>
                                                                  <MenuItem style={{backgroundColor:'white', width:'250px'}} value="Pace - All Rounder">Pace - All Rounder</MenuItem>
                                                                  <MenuItem style={{backgroundColor:'white', width:'250px'}} value="Spin - Bowler">Spin - Bowler</MenuItem>
                                                                  <MenuItem style={{backgroundColor:'white', width:'250px'}} value="Pace - Bowler">Pace - Bowler</MenuItem>
                                                        </Select>
                                                        <br></br>
                                                       
                                                                <FormLabel id="demo-row-radio-buttons-group-label">Grade</FormLabel>
                                                                <RadioGroup
                                                                        row
                                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                                        name="row-radio-buttons-group"
                                                                        >
                                                                        <div style={{width:'400px'}}>
                                                                        <FormControlLabel value="a+" control={<Radio />} label="A+" />
                                                                        <FormControlLabel value="a" control={<Radio />} label="A" />
                                                                        <FormControlLabel value="b" control={<Radio />} label="B" />
                                                                        <FormControlLabel value="c" control={<Radio />} label="C" />
                                                                        <FormControlLabel value="d" control={<Radio />} label="D" />
                                                                        </div>                
                                                                </RadioGroup>
                                                                <br></br>
                                                                <FormLabel >Upload Profile Image</FormLabel>
                                                                <input type="file" id="myFile" name="filename"></input>
                                                        
                                        </FormControl>
                                        <span>
                                                <Rate tooltips={desc} onChange={setValue} value={value} />
                                                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                                        </span>
                                </Box>
                        </div>                
                </div>
        )
}

