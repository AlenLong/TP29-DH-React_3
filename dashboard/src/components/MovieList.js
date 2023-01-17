import React from 'react'
import PropTypes from 'prop-types'
import Movie from './Movie'

function MovieList(props) {

  return (
          <React.Fragment>
                    <tr>
                        <td>{props.id}</td>
                        <td>{props.title}</td>
                        <td>{props.rating}</td>
                        <td>{props.awards}</td>
                        <td>{props.length}</td>
                    </tr>
        </React.Fragment >
  )
}

MovieList.propTypes = {}

export default MovieList
