import React, {useState} from 'react'
import useSWR from "swr";

const withSwr = (Component) => {
  // console.log(Component)
  function WithSwr(props) {
    // const { data, error } = useSWR('http://localhost:5000/')
     return <Component {...props} />
  }

  return WithSwr;
};

export default withSwr