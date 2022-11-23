import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  wrapper: (props) => {
    console.log({ props });
    if (props.type === "confirmed") return { borderLeft: "5px solid #c42cc9" };
    if (props.type === "recovered") return { borderLeft: "5px solid #28a745" };
    else return { borderLeft: "5px solid gray" };
  },
  title: { fontSize: 18, marginBottom: 5 },
  count: { fontWeight: "bold", fontSize: 18 },
});

export default function HighlightCard({ title, count, type }) {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
                  {title}
        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
          {count}
        </Typography>
        
      </CardContent>
      
    </Card>
  );
}
