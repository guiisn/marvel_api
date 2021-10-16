import { makeStyles } from '@material-ui/styles';
import theme from '../config/theme';
import { Fab } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

//importação de componentes
import Header from '../components/header';
import Landing from '../components/landing';
import Footer from '../components/footer';

const useStyles = makeStyles({
  page: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.light,
    minHeight: '100%',
    width: '100%',
  },

  float_button: {
    position: 'fixed',
    bottom: '5%',
    right: '5%',
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Header />
      <Landing />
      {/* botão para voltar para o topo */}
      <a href="#header">
        <Fab className={classes.float_button}>
          <Fab color="secondary" sx={{ color: theme.palette.secondary.light }}>
            <ArrowUpwardIcon />
          </Fab>
        </Fab>
      </a>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
