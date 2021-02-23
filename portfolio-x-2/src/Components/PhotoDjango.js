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

export default function PhotoDjango() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='Photo NYC' className={classes.avatar}>
            P
          </Avatar>
        }
        action={
          <a href='https://github.com/WinstonAC/Photo-React-NYC.git'>
            <IconButton aria-label='settings'>
              <GitHubIcon />
            </IconButton>
          </a>
        }
        title='Photo NYC x React'
        subheader='December 2020'
      />
      <CardMedia
        className={classes.media}
        image='https://i.imgur.com/BBGU1p0.png'
        title='NYC Photo'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          Motivation: I created the project as a pictorial love letter to NYC.
          Take a look under the hood and check out models.py Backend: Django
          Frontend: Python
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <a href='https://photo.billycampbell.dev/Landingpage'>
          <IconButton aria-label='add to favorites'>
            <LaunchIcon />
          </IconButton>
        </a>
      </CardActions>
    </Card>
  );
}
