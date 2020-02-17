import React, { Fragment, useEffect, useState } from "react";
import { ENDPOINTS } from "../constants";

export function useTableDataVisualization(endpoint, dataFromService) {
  const [tableDataVisualization, setTableDataVisualization] = useState(null);
  useEffect(() => {
    switch (endpoint) {
      case ENDPOINTS[0]: {
        setTableDataVisualization(
          <Fragment>
            <tr>
              <th> Address</th>
              <th> Amount</th>
            </tr>
            {dataFromService.map(data => (
              <tr key={data.address}>
                <td> {data.address} </td>
                <td> {data.amount} </td>
              </tr>
            ))}
          </Fragment>
        );
        break;
      }
      case ENDPOINTS[1]: {
        setTableDataVisualization(
          <Fragment>
            <tr>
              <th> Address</th>
              <th> USD Value</th>
            </tr>
            {dataFromService.map(data => (
              <tr key={data.address}>
                <td> {data.address} </td>
                <td> {data.USDValue} </td>
              </tr>
            ))}
          </Fragment>
        );
        break;
      }
      default: {
        setTableDataVisualization(null);
      }
    }
  }, [dataFromService]);
  return [tableDataVisualization];
}
