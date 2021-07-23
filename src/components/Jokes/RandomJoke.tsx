import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import useRandomJoke from './useRandomJoke'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  }
})

const RandomJoke: React.FC<RouteComponentProps> = () => {
  const { isLoading, isFetching, error, data, refetch } = useRandomJoke()
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Random Joke
        </Typography>
        <Typography variant="body2" component="p">
          {error
            ? 'Something went wrong'
            : isLoading || isFetching
            ? 'Looking something funny'
            : data?.joke}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => refetch()}>
          Tell me another joke
        </Button>
      </CardActions>
    </Card>
  )
}

export default RandomJoke
