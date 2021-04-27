import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function DogFood() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='Dog Food' className={classes.avatar}>
            BE
          </Avatar>
        }
        action={
          <a href='https://github.com/WinstonAC/groupproject8'>
            <IconButton aria-label='settings'>
              <GitHubIcon />
            </IconButton>
          </a>
        }
        title='Black Experience'
        subheader='November 2020'
      />
      <CardMedia
        className={classes.media}
        image='/public/bke.png'
        title='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          Motivation: This group project highlights black business within the apparel
          industry - Backend: Express Frontend: React
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <a href='https://blk-experience.vercel.app/'>
          <IconButton aria-label='add to favorites'>
            <LaunchIcon />
          </IconButton>
        </a>
      </CardActions>
    </Card>
  );
}
