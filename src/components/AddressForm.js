import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function AddressForm(props) {
  const { values, handleChange } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Customer details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
            error={values.firstName === ""}
            helperText={values.firstName === "" ? "Empty!" : " "}
            fullWidth
            autoComplete="first-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
            error={values.lastName === ""}
            helperText={values.lastName === "" ? "Empty!" : " "}
            fullWidth
            autoComplete="last-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            onChange={handleChange("address1")}
            defaultValue={values.address1}
            error={values.address1 === ""}
            helperText={values.address1 === "" ? "Empty!" : " "}
            fullWidth
            autoComplete="address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            onChange={handleChange("address2")}
            defaultValue={values.address2}
            fullWidth
            autoComplete="address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
            error={values.city === ""}
            helperText={values.city === "" ? "Empty!" : " "}
            fullWidth
            autoComplete="address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            onChange={handleChange("state")}
            defaultValue={values.state}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            onChange={handleChange("zip")}
            defaultValue={values.zip}
            error={values.zip === ""}
            helperText={values.zip === "" ? "Empty!" : " "}
            fullWidth
            autoComplete="postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            onChange={handleChange("country")}
            defaultValue={values.country}
            error={values.country === ""}
            helperText={values.country === "" ? "Empty!" : " "}
            fullWidth
            autoComplete="country"
          />
        </Grid>
      </Grid>
      <br />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            onChange={handleChange("cardName")}
            defaultValue={values.cardName}
            fullWidth
            error={values.cardName === ""}
            helperText={values.cardName === "" ? "Empty!" : " "}
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            onChange={handleChange("cardNumber")}
            defaultValue={values.cardNumber}
            error={values.cardNumber === ""}
            helperText={values.cardNumber === "" ? "Empty!" : " "}
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            onChange={handleChange("expDate")}
            defaultValue={values.expDate}
            error={values.expDate === ""}
            helperText={values.expDate === "" ? "Empty!" : " "}
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            onChange={handleChange("cvv")}
            defaultValue={values.cvv}
            error={values.cvv === ""}
            helperText={
              values.cvv === ""
                ? "Empty!"
                : "Last three digits on signature strip"
            }
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
