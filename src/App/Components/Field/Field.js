import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  
} from "@mui/material";

import { CalendarToday } from "@mui/icons-material";
import React, { Fragment } from "react";
import { Controller } from "react-hook-form";
import { FieldS, LabelS } from "./Field.style";
import PropTypes from "prop-types";

const Field = ({
  type = "text",
  id,
  labelText,
  isRequired,
  options,
  control,
  name,
  onChange,
  noValue,
  helperText,
  hidden,
  ...props
}) => {
  let field;
  switch (type) {
    case "select":
      field = (
        <Fragment>
          {control ? (
            <Controller
              name={name}
              control={control}
              render={({ field }) => {
                return (
                  <FormControl>
                    <Select
                      {...field}
                      {...props}
                      id={id}
                      variant="outlined"
                      required={isRequired}
                      onChange={(e) => {
                        if (onChange) {
                          onChange(e.target.value);
                        }
                        field.onChange(e);
                      }}
                    >
                      {noValue && (
                        <MenuItem key="null" value={noValue}>
                          {noValue === "" ? "Nothing to select" : noValue}
                        </MenuItem>
                      )}
                      {options}
                    </Select>
                  </FormControl>
                );
              }}
            />
          ) : (
            <FormControl>
              <Select
                {...props}
                name={name}
                id={id}
                variant="outlined"
                onChange={(e) => onChange(e.target.value)}
                required={isRequired}
              >
                {noValue && (
                  <MenuItem key="null" value="">
                    {noValue}
                  </MenuItem>
                )}
                {options}
              </Select>
            </FormControl>
          )}
        </Fragment>
      );
      break;
    case "text":
      field = (
        <Fragment>
          {control ? (
            <Controller
              name={name}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  {...props}
                  id={id}
                  helperText={helperText}
                  variant="outlined"
                  required={isRequired}
                  onChange={(e) => {
                    if (onChange) {
                      onChange(e.target.value);
                    }
                    field.onChange(e);
                  }}
                />
              )}
            />
          ) : (
            <TextField
              {...props}
              id={id}
              variant="outlined"
              required={isRequired}
              onChange={(e) => {
                if (onChange) {
                  onChange(e.target.value);
                }
              }}
            />
          )}
        </Fragment>
      );
      break;
    
    case "number":
      field = (
        <Fragment>
          {control ? (
            <Controller
              name={name}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  {...props}
                  type="number"
                  helperText={helperText}
                  id={id}
                  variant="outlined"
                  required={isRequired}
                  onChange={(e) => {
                    if (onChange) {
                      onChange(e.target.value);
                    }
                    field.onChange(e);
                  }}
                />
              )}
            />
          ) : (
            <TextField
              {...props}
              id={id}
              type="number"
              variant="outlined"
              required={isRequired}
              onChange={(e) => {
                if (onChange) {
                  onChange(e.target.value);
                }
              }}
            />
          )}
        </Fragment>
      );
      break;

      case "password":
        field = (
          <Fragment>
            {control ? (
              <Controller
                name={name}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...props}
                    type="password"
                    helperText={helperText}
                    id={id}
                    variant="outlined"
                    required={isRequired}
                    onChange={(e) => {
                      if (onChange) {
                        onChange(e.target.value);
                      }
                      field.onChange(e);
                    }}
                  />
                )}
              />
            ) : (
              <TextField
                {...props}
                id={id}
                type="password"
                variant="outlined"
                required={isRequired}
                onChange={(e) => {
                  if (onChange) {
                    onChange(e.target.value);
                  }
                }}
              />
            )}
          </Fragment>
        );
        break;



    default:
      field = (
        <Fragment>
          {control ? (
            <Controller
              name={name}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  {...props}
                  id={id}
                  helperText={helperText}
                  variant="outlined"
                  required={isRequired}
                  onChange={(e) => {
                    if (onChange) {
                      onChange(e.target.value);
                    }
                    field.onChange(e);
                  }}
                />
              )}
            />
          ) : (
            <TextField
              {...props}
              id={id}
              variant="outlined"
              required={isRequired}
              onChange={(e) => {
                if (onChange) {
                  onChange(e.target.value);
                }
              }}
            />
          )}
        </Fragment>
      );
      break;
  }

  return (
    <FieldS hidden={hidden}>
      <LabelS htmlFor={id}>
        {labelText} {isRequired && <span>(Required)</span>}
      </LabelS>

      {field}
      {helperText && type === "select" && (
        <FormHelperText error={props.error}>{helperText}</FormHelperText>
      )}
    </FieldS>
  );
};

export default Field;

Field.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  noValue: PropTypes.string,
  error: PropTypes.bool,
  hidden: PropTypes.bool,
  helperText: PropTypes.string,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  options: PropTypes.array,
  control: PropTypes.object,
  onChange: PropTypes.func,
};
