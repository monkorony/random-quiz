import React from 'react';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import { Button } from "@material-ui/core";

const Result = ({name, score}) => {

  const history = useHistory();

  useEffect(() => {
    //if nothing is inside name
    if (!name) {
      history.push("/");
    }
  }, [name, history]);
  return (
    <div>
      Final Score: {score}
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  )
}

export default Result
