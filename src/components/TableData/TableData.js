import React, { Fragment, useEffect, useState } from "react";
import { fetchJSON } from "../utils";
import "./TableData.module.css";
import { getPropertyToCompare, SelectEndpoint } from "./tableData-utils";
import { ENDPOINTS, ORDER_BY } from "../constants";
import { useTableDataVisualization } from "./useTableDataVisualization";
import _ from "lodash";

const TableData = () => {
  const [dataFromService, setDataFromService] = useState([]);
  const [endpoint, setEndpoint] = useState(ENDPOINTS[0]);
  const [tableDataVisualization] = useTableDataVisualization(
    endpoint,
    dataFromService
  );
  const [orderBy, setOrderBy] = useState(ORDER_BY.ascending);
  const [isSortable, setIsSortable] = useState(true);

  // constructor
  useEffect(() => {
    fetchJSON(endpoint, json => setDataFromService(json));
    setIsSortable(true);
  }, []);

  return (
    <Fragment>
      <SelectEndpoint
        onChangeCallback={e => {
          setIsSortable(false);
          setEndpoint(e.target.value);
        }}
      />
      <br />
      <br />
      <div>
        <button
          onClick={() => {
            fetchJSON(endpoint, json => {
              setDataFromService(json);
              setOrderBy(ORDER_BY.ascending);
              setIsSortable(true);
            });
          }}
        >
          Refresh data
        </button>

        <button
          disabled={!isSortable}
          onClick={() => {
            if (dataFromService) {
              setDataFromService(
                _.orderBy(
                  dataFromService,
                  [getPropertyToCompare(endpoint)],
                  [orderBy === ORDER_BY.ascending ? "asc" : "desc"]
                )
              );
            }
            setOrderBy(
              orderBy === ORDER_BY.ascending
                ? ORDER_BY.descending
                : ORDER_BY.ascending
            );
          }}
        >
          sort by {orderBy}
        </button>
      </div>
      <br />
      <br />
      <table>
        <tbody>{tableDataVisualization}</tbody>
      </table>
    </Fragment>
  );
};
export default TableData;
