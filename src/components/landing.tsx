import React, { useEffect, useState } from "react";

//material ui
import { ButtonGroup, Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core";
import theme from "../config/theme";

import { api } from "../services/api";
import Modal from './Modal';


const [timestamps, publicKey, hash] = [1634221780, "f18f86dfc22f086e6430e129be4a42d9", "2cc05143ac40ebe70f9607897086ea8b"];

const useStyles = makeStyles({
    landing: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 25,
    },

    cards: {
        padding: '0 60px 0 60px',
        width: '100vw',
        textAlign: 'center',
        marginTop: 25,
        display: 'grid',

        hover: '',
        // gridTemplateColumns: 'repeat(4, 1fr)',
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(4, 1fr)',
        },
        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
        },
        gap: 22,

    },
});

export default function Landing() {
    const [option, setOption] = useState('characters');
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const handleClose = () => setOpen(false); //função que fecha o modal.

    useEffect(() => {
        getData();
    }, [option]);
    //ps.: "[option] quer dizer que a cada alteração de estado que houbver no option, o useEffect é chamado."

    //funcao que faz a consuta à api
    async function getData() {
        const endpoint = `${option}?ts=${timestamps}&apikey=${publicKey}&hash=${hash}&limit=99`;

        await api.get(endpoint).then((response: any) => {
            console.log(response.data.data.results)
            let arr = [];
            for (let i = 0; i < response.data.data.results.length; i++) {
                if (response.data.data.results[i].thumbnail.path.split('/')[10] != 'image_not_available') {
                    arr.push(response.data.data.results[i]);
                };
            };
            setData(arr);
        });
    };

    //funcao que pega o valor do botao e muda o estado do "option".
    async function setButton(event: any) {
        const value = event.target.value;
        setOption(value);
    };

    const classes = useStyles();
    return (
        <div className={classes.landing}>
            {open == true ? <Modal onClose={handleClose} open={open} name={name} title={title} img={image} description={description} /> : null}
            <div>
                <ButtonGroup size='small' variant="contained" aria-label={`outlined button group`} color='secondary' sx={{ position: 'revert' }
                } >
                    <Button
                        onClick={setButton}
                        value='characters'
                        sx={{ position: 'revert' }}
                    >
                        Characters
                    </Button>
                    <Button
                        onClick={setButton}
                        value='series'
                        sx={{ position: 'revert' }}
                    >
                        Series
                    </Button>
                    <Button
                        sx={{ position: 'revert' }}
                        onClick={setButton}
                        value='comics'
                    >
                        Comics
                    </Button>
                </ButtonGroup>
            </div>
            <p>{`Showing results for: ${option}`}</p>
            <div className={classes.cards}>
                <>
                    {data.map((response: any, index: any) =>
                        <Card sx={{ maxWidth: 345, backgroundColor: theme.palette.secondary.light, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }} key={index}>
                            <CardMedia
                                component="img"
                                alt={option == 'characters' ? response?.name : response?.title}
                                height="230"
                                image={`${response.thumbnail.path}.${response.thumbnail.extension}`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" color="primary.main">
                                    {option == 'characters' ? response?.name : response?.title}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    sx={{ color: theme.palette.secondary.light, position: 'revert' }
                                    }
                                    onClick={() => {
                                        setOpen(true),
                                            setName(response?.name),
                                            setTitle(response?.title),
                                            setImage(`${response.thumbnail.path}.${response.thumbnail.extension}`),
                                            setDescription(response?.description)
                                    }}
                                >Learn More</Button>
                            </CardActions>
                        </Card>
                    )}
                </>
            </div>
        </div>
    );
};
