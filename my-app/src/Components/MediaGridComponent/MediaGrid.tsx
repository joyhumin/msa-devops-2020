import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';

interface IState {
    webformatURL: string;
    downloads: number;
    // hits: any[];
    // data: any[];
}
interface IMediaGridProps {
    SearchQuery: (string | null);
    MinWidth: number;
    MinHeight: number;
}
function MediaGrid(props: IMediaGridProps) {
    const [ItemArray, setItemArray] = useState<IState[]>([{webformatURL: "", downloads: 0}]);
    const API_KEY =process.env.REACT_APP_API_KEY;

    useEffect(() => {
        fetch('https://pixabay.com/api/?key=' + API_KEY + '&q='+ props.SearchQuery + '&min_width=' + props.MinWidth.toString() + '&min_height='+ props.MinHeight.toString()
        )
            .then(response => response.json())
            .then(response => {
                setItemArray(response.hits)
            })
            .catch(() => console.log("it didn't work")
            );

    }, [API_KEY, props.SearchQuery, props.MinWidth, props.MinHeight]);

    console.log(ItemArray);
    var Cards: JSX.Element[] = [];
    ItemArray.forEach((el: IState, i: Number) => {
        if (!el || !el['webformatURL']) {
            return;
        }
        Cards.push(
            <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="MediaGridCard">
                <MediaCard ImageUrl={el['webformatURL']} Downloads={el['downloads']} />
            </Grid>)
    })

    return (
        <div>
            <Grid container spacing={3} className="MediaGridContainer">
                {Cards}
            </Grid>
        </div>
    )
}

export default MediaGrid