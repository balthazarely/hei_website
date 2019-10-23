import React from 'react'
import Fruit1 from '../../../resources/imgs/fruitdale.jpg'
import Fruit2 from '../../../resources/imgs/fruitdale2.jpg'
import Fruit3 from '../../../resources/imgs/fruitedale1.jpg'
import Fruit4 from '../../../resources/imgs/fruitdale4.jpg'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { red } from '@material-ui/core/colors'


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',

        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

const tileData = [
    {
        img: Fruit1,
        title: 'Fruitdale',
        author: 'author',
        cols: 4,
    },
    {
        img: Fruit2,
        title: 'Fruitdale',
        author: 'author',
        cols: 3,
    },
    {
        img: Fruit3,
        title: 'Fruitdale',
        author: 'author',
        cols: 3,
    },
    {
        img: Fruit4,
        title: 'Fruitdale',
        author: 'author',
        cols: 4,
    },
    {
        img: Fruit1,
        title: 'Fruitdale',
        author: 'author',
        cols: 4,
    },
    {
        img: Fruit2,
        title: 'Fruitdale',
        author: 'author',
        cols: 3,
    },
    {
        img: Fruit3,
        title: 'Fruitdale',
        author: 'author',
        cols: 3,
    },
];

export default function Carrousel() {
    const classes = useStyles();

    return (
        <GridList cellHeight={400} className={classes.gridList} cols={7}>
            {tileData.map(tile => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} />
                </GridListTile>
            ))}
        </GridList>
    );
}