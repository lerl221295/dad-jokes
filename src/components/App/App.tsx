import * as React from 'react'
import { Router } from '@reach/router'
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import { grey, red } from '@material-ui/core/colors'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import RandomJoke from '../Jokes/RandomJoke'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: red[700]
    }
  }
})

theme = responsiveFontSizes(theme)

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      staleTime: 5 * 60 * 1000
    }
  }
})

const App: React.FC = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ThemeProvider theme={theme}>
        <Router basepath={process.env.PUBLIC_URL}>
          <RandomJoke path="/" />
        </Router>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryCacheProvider>
  )
}

export default App
