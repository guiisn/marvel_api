import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { makeStyles } from "@material-ui/core";
import theme from '../config/theme';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    [theme.breakpoints.down('md')]: {
        top: '50%',
        left: '50%',
        width: '90%',
        height: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
    },
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '70%',
    bgcolor: theme.palette.secondary.light,
    border: '2px solid #000',
    boxShadow: 24,

    display: 'flex',
};

const useStyles = makeStyles({
    image: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        height: '100%',
    },

    description: {
        fontSize: 16,
    },
});

export default function BasicModal({ onClose, open, name, title, img, description }) {
    const classes = useStyles();
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img src={img} alt="aa" className={classes.image} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', padding: '0 22px', textAlign: 'justify' }}>
                        <h1>{name == undefined ? title : name}</h1>
                        <h3 className={classes.description}>{description == '' || description == null ? "No description informed!" : description}</h3>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};
