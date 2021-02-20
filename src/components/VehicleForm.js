import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function VehicleForm(props) {
  console.log(props);
  const { values, handleChange } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Vehicle details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="vMake"
            label="Vehicle make"
            onChange={handleChange("vMake")}
            defaultValue={values.vMake}
            error={values.vMake === ""}
            helperText={values.vMake === "" ? "Empty!" : " "}
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="vModel"
            label="Vehicle model"
            onChange={handleChange("vModel")}
            error={values.vModel === ""}
            helperText={values.vModel === "" ? "Empty!" : " "}
            defaultValue={values.vModel}
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="vYear"
            label="Year"
            onChange={handleChange("vYear")}
            defaultValue={values.vYear}
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="vMileage"
            label="Mileage"
            onChange={handleChange("vMileage")}
            helperText={"KM/hr"}
            defaultValue={values.vMileage}
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
