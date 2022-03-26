import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <CardMedia
        component="img"
        alt={`${props?.title}`}
        height="140"
        image={`${props?.image}`}
      />
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
         {props.title}
        </Typography>
        <Typography variant="h5" component="h6">
        {props.content}
        </Typography>
       
      </CardContent>
      <CardActions>
      <Button size="small"  component={Link} to={`/${props?.type}/${props.id}`}>More info</Button>
      </CardActions>
    </Card>
  );
}
