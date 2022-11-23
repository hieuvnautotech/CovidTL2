import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LineChart from '../Charts/LineCharts'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));




export default function Summaries({report}) {
  const classes = useStyles();

  return (

    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
      <LineChart data={report}/>
      </Grid>
    </Grid>
    
  )
}
