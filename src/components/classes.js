import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    loginForm: {
        width: 350,
        height: 500,
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingRight: '2%',
        paddingLeft: '2%',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
    },
    loginInputs: {
        display: 'table-cell',
        textAlign: 'center',
      },
    loginTitle: {
      textAlign: 'center',
        fontFamily: theme.typography.Pacifico,
        textDecoration: 'underline',
        color: "#000074",
        marginBottom: '2%'
    },
    tableContent: {
        marginTop: '5%',
      },
    form: {
        marginTop: '10%',
        display: 'flex',
        flexDirection: 'column',
      },
    inputs: {
        marginTop: '5%',
        marginBottom: '2%',
      },
    btn: {
        margin: '1%'
      },
    left:{
        float: 'left'
    },
    pageMargin: {
        marginLeft: '6%',
        marginRight: '6%',
      },
    pageMargin2: {
        marginLeft: '5%',
    },
    title: {
        textAlign: 'center',
        fontFamily: theme.typography.Pacifico,
        textDecoration: 'underline',
        color: "#FFFFFF",
        marginBottom: '2%'
      },
    title2: {
      textAlign: 'center',
      fontFamily: theme.typography.Pacifico,
      textDecoration: 'underline',
      color: theme.palette.primary.main,
      marginBottom: '10%',
      marginLeft: "5%",
    },
    welcome: {
      fontFamily: theme.typography.Pacifico,
      textDecoration: 'underline',
      color: "#FFFFFF",
      marginBottom: '10%',
      marginLeft: "5%",
    },
    image: {
        maxWidth: '280px',
        maxHeight: '280px',
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'block',
        border: '1px solid black',
        marginTop: '5%',
    
      },
    imageInfo: {
      textAlign: 'center',
      color: "#FFFFFF",

      },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      },
    paper2: {
      flexGrow: 1,
    },
    center: {
        textAlign: 'center',
        marginTop: '5%',
        marginBottom: '5%',
       
      },
      marginLeft: {
        marginLeft: "5%"
      },
    alert: {
      boxSizing: 'border-box',
      padding: '15px 10px',
      margin: '15px 0',
      border: '2px solid #e01616',
      backgroundColor: '#efefef',
      borderRadius: '3px',
      color: '#e01616',
      fontSize: '0.8rem',
    },
      submit: {
      margin: theme.spacing(1, 0, 1),
    },
    card: {
      maxWidth: 345,
      margin: theme.spacing(5),
      maxHeight: 550,
    },
}));

export {useStyles}