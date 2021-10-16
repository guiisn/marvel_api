import React from "react";

import { makeStyles } from '@material-ui/styles';
import theme from "../config/theme";
import FavoriteIcon from '@mui/icons-material/Favorite';

const useStyles = makeStyles({
    footer_container: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.light,
        width: '100%',
        height: 100,
        marginTop: 50,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    text_1: {
        padding: '0 60px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.footer_container}>
            <div className={classes.text_1}>
                <span>developed by Guilherme Nunes, 2021</span>
                <FavoriteIcon />
            </div>
        </div>
    );
};
