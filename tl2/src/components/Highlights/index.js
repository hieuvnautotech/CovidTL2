import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HighlightCard from './HighlightCard';




export default function Highlight({ report }) {
  
    console.log('reportshow', report)
    const data = report && report.length ? report[report.length - 1] : []
    console.log("datashow", data);

    const summary = [
      {
        title: "Số ca nhiễm",
        count: data.Confirmed,
      },
      {
        title: "Số ca khỏi",
        count: data.Recovered,
      },
      {
        title: "Số ca tử vong",
        count: data.Deaths,
      },
    ];

  return (
    

    <Grid container spacing={3}>
      {summary.map((item) => (
        <Grid item sm={4} xs={12} key={item.type}>
          <HighlightCard
            title={item.title}
            count={item.count}
            type={item.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}
