import React, { Fragment } from "react";
import { ENDPOINTS } from "../constants";

export const SelectEndpoint = ({ onChangeCallback }) => (
  <Fragment>
    <div>
      <b> Choose your endpoint: </b>
    </div>
    <select
      onChange={e => {
        onChangeCallback(e);
      }}
    >
      {ENDPOINTS.map((endpoint, index) => (
        <option key={index} value={endpoint}>
          {endpoint}
        </option>
      ))}
    </select>
  </Fragment>
);

export function getPropertyToCompare(endpoint) {
  if (endpoint === ENDPOINTS[0]) {
    return "amount";
  } else if (endpoint === ENDPOINTS[1]) {
    return "USDValue";
  }
}
