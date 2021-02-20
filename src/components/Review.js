import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();
  console.log(props);
  const { values } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            {values.firstName} {values.lastName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Address
          </Typography>
          <Typography variant="body2" gutterBottom>
            {values.address1}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {values.address2}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {values.city}, {values.state}, {values.country}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {values.zip}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={4}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Credit Card
          </Typography>
          <Typography variant="body2" gutterBottom>
            Name on Card: {values.cardName}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Card Number: {values.cardNumber}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Expiry Date: {values.expDate}
          </Typography>
          <Typography variant="body2" gutterBottom>
            CVV: {values.cvv}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={4}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Vehicle
          </Typography>
          <Typography variant="body2" gutterBottom>
            Make: {values.vMake}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Model: {values.vModel}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Year: {values.vYear}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Mileage: {values.vMileage}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
