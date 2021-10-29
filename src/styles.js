import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    page: {
        backgroundColor: theme.palette.background.paper,
        overflowX: 'hidden'
    },
    container: {  
        padding: theme.spacing(3, 0, 0)
    },
    buttons: {
        padding: theme.spacing(2,0,0)
    },
    icons: {
        marginRight: '10px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%' //16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px'
    }
  }));

  export default useStyles