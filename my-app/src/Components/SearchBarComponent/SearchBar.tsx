import React, { useState } from 'react';
// impor t { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
import { Button, Grid, TextField } from '@material-ui/core';
import { IUserInput } from '../../Common/Interfaces'
import './SearchBar.css';

interface ISearchBarProps {
    SetUserInput: (a: IUserInput) => void;
}


function SearchBar(props: ISearchBarProps) {
    // const [MinWidth, setMinWidth] = useState<number | null>(
    //     1000,
    // );
    const [MinWidth, setMinWidth] = useState<number>(1000);
    const handleMinWidthChange = (number: number) => {
        setMinWidth(number);
    };

    const [MinHeight, setMinHeight] = useState<number>(
        800,
    );

    const handleMinHeighChange= (number: number) => {
        setMinHeight(number);
    };

    const [SearchQuery, setSearchQuery] = useState<string | null>("");
    const handleSearchQueryChange = (s: string | null) => {
        setSearchQuery(s);
    }
    const [HasFocus, setHasFocus] = useState<boolean>(false);

    const handleSubmit = () => {
        console.log(SearchQuery);

        if (SearchQuery?.length !== 0 && SearchQuery !== null && SearchQuery !== "") {
            let UserInput: IUserInput = {
                SearchQuery: SearchQuery,
                MinWidth: MinWidth,
                MinHeight: MinHeight,
            }
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
        }
    }
    
    return <div className="SearchBarContainer">
        <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <TextField
                    required
                    id="outlined-required"
                    label="Search"
                    variant="outlined"
                    error={HasFocus && SearchQuery === ""}
                    onClick={() => setHasFocus(true)}
                    value={SearchQuery}
                    onChange={e => handleSearchQueryChange(e.target.value)}
                />
            </Grid>

            <Grid item xs={6} sm={3}>
                <TextField
                    required
                    id="outlined-required"
                    label="Minimum Width"
                    variant="outlined"
                    onClick={() => setHasFocus(true)}
                    value={MinWidth}
                    onChange={e => handleMinWidthChange(Number(e.target.value))}
                />
            </Grid>

            <Grid item xs={6} sm={3}>
                <TextField
                    required
                    id="outlined-required"
                    label="Minimum Height"
                    variant="outlined"
                    onClick={() => setHasFocus(true)}
                    value={MinHeight}
                    onChange={e => handleMinHeighChange(Number(e.target.value))}
                />
            </Grid>

            <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Grid>
        </Grid>
    </div>
}

export default SearchBar