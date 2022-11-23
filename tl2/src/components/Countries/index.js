import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    
  },
}));

export default function Countries({ countries, value, handleOnChange }) {
    const classes = useStyles();
    console.log("macdinh", value);
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="country-select">Quốc Gia</InputLabel>
        <NativeSelect
          onChange={handleOnChange}
          value={value}
          inputProps={{
            name: "country",
            id: "country-select",
          }}
        >
          {countries.map(({ Country, ISO2 }) => (
            <option key={ISO2}
              value={ISO2.toLowerCase()}
            >{Country}</option>
          ))}
        </NativeSelect>
        <FormHelperText>Chọn quốc gia</FormHelperText>
      </FormControl>
    </div>
  );
}
