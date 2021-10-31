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
        padding: theme.spacing(2, 0, 0),
        marign: '10px',
        backgroundColor: 'secondary'
    },
    icons: {
        marginRight: '10px'
    },
    contactIcons: {
        transform: 'scale(1.8)',
        margin: '30px 30px 0 30px'
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
        paddingTop: '56.25%' //16:9 aspect ratio for the images within cards
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px'
    },
    footer2: {
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
    },
    section: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: '400px',
        padding: '100px 20vw'
    },
    blue: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: '400px',
        padding: '100px 20vw',
        backgroundColor: '#3c31dd'
    },
    red: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: '400px',
        padding: '100px 20vw',
        backgroundColor: "#dd3f31"
    },
    pink: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: '400px',
        padding: '100px 20vw',
        backgroundColor: '#ff0066'
    },
    dark: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: '400px',
        padding: '100px 20vw',
        backgroundColor: '#0f0f10',
        color: 'white'
    },
    orange: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: '400px',
        padding: '100px 20vw',
        backgroundColor: '#FFA500'
    },
    green: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: '400px',
        padding: '100px 20vw',
        backgroundColor: '# '
    },
    purple: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: '400px',
        padding: '100px 20vw',
        backgroundColor: '#A020F0'
    },
    tilt: {
        /* Style and svg gotten from shapedivider.app */
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
        fill: '#0f0f10'   
    },
    opacityWave: {
        /* Style and svg gotten from shapedivider.app */
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
        fill: '#3C31DD',
        height: '155px'
    },
    spacer: {
        /* svg taken from https://app.haikei.app/ */
        aspectRatio: '1920/1080',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        boxSizing: '100%',
        overflowX: 'hidden',
        overflowY: 'hidden'
    }

}));

export default useStyles