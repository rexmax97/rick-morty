import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
export default function ImgMediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={`${props?.title}`}
        height="140"
        image={`${props?.image}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {`${props?.title}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {`${props?.content}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"  component={Link} to={`/${props?.type}/${props.id}`}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
