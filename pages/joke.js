import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import sayjoke from "@aniketchaudhari/funjokes";

export default function joke() {
  const joke = sayjoke();
  return (
    <>
    <div className="joke-card">
      <Card>
        <CardContent>
          <Typography>{joke.setup}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {joke.punchline}
          </Typography>
        </CardContent>
      </Card>
      </div>
    </>
  );
}
