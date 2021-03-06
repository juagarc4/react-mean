// import React, { Fragment } from 'react';
import React from 'react'
import PropTypes from 'prop-types'

const FirstApp = ({ greeting, subtitle }) => {
  // const greeting = 'Hola mundo';
  // const user = {
  //     name: 'Raul',
  //     age: 22
  // }
  //<> === <Fragment ><Fragment />
  return (
    <>
      <h1>{greeting}</h1>
      {/*<pre>{ JSON.stringify(user, null, 3) }</pre>*/}
      <p>{subtitle}</p>
    </>
  )
}

FirstApp.propTypes = {
  greeting: PropTypes.string.isRequired,
}
FirstApp.defaultProps = {
  subtitle: 'I am a subtitle',
}
export default FirstApp
