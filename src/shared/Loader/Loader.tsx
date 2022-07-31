import React from "react";
import axios from "axios";
import AxiosClient from "../../api/AxiosClient";
import "./Loader.css";
import Spinner from "react-bootstrap/Spinner";

const { useState, useCallback, useMemo, useEffect } = React;

const useAxiosLoader = () => {
  const [counter, setCounter] = useState(0);

  const inc = useCallback(
    () => setCounter((counter) => counter + 1),
    [setCounter]
  ); // add to counter
  const dec = useCallback(
    () => setCounter((counter) => counter - 1),
    [setCounter]
  ); // remove from counter

  const interceptors: any = useMemo(
    () => ({
      request: (config: any) => {
        inc();
        return config;
      },
      response: (response: any) => {
        dec();
        return response;
      },
      error: (error: any) => {
        dec();
        return Promise.reject(error);
      },
    }),
    [inc, dec]
  ); // create the interceptors

  useEffect(() => {
    // add request interceptors
    AxiosClient.interceptors.request.use(
      interceptors.request,
      interceptors.error
    );
    // add response interceptors
    AxiosClient.interceptors.response.use(
      interceptors.response,
      interceptors.error
    );

    return () => {
      // remove all intercepts when done
      AxiosClient.interceptors.request.eject(interceptors.request);
      AxiosClient.interceptors.request.eject(interceptors.error);
      AxiosClient.interceptors.response.eject(interceptors.response);
      AxiosClient.interceptors.response.eject(interceptors.error);
    };
  }, [interceptors]);

  return counter > 0;
};

const Loader = () => {
  const loading: any = useAxiosLoader();

  return (
    <div className="">
      {loading ? (
        <div className="loader-overlay d-flex justify-content-center align-items-center">
          <div className="loader">
            <div>
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="success" />
              <Spinner animation="grow" variant="danger" />
              <Spinner animation="grow" variant="warning" />
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="light" />
              <Spinner animation="grow" variant="dark" />
            </div>
            <div className="text-center h5">Loading ...</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Loader;
