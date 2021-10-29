import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    page: {
        backgroundColor: theme.palette.background.paper,
        overflowX: 'hidden',    
        overflowY: 'hidden'
    },
    container: {  
        padding: theme.spacing(3, 0, 0)
    },
    buttons: {
        padding: theme.spacing(2,0,0),
        marign: '10px',  
        backgroundColor: 'secondary'
    },
    icons: {
        marginRight: '10px'
    },
    cardGrid: {
        padding: '20px 0',
        margin: '50px'
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
    },
    links: {
        textDecoration: 'none',
        color: 'white',
        padding: '10px 0'    
    },
    progProj: {
        height: '25%',
        display: 'flex',
        flexDirection: 'column',
        margin: '20px'
    },
    SubTitle: {
        marginBottom: '50px',
        marginTop: '10px'
    },
    Bar1: {
        borderTop: '10px double #8c8b8b'
    },
    Bar2: {
        borderTop: "1px dotted #8c8b8b"
    }
  }));

  export default useStyles