import { useEffect, useState } from "react";
import { request } from "../lib/api";
import { RequestStatus } from "../types/data";

export const useFetchData = <T>(url: string) => {
  const [status, setStatus] = useState<RequestStatus>("idle");

  const [data, setData] = useState<T>();

  useEffect(() => {
    setStatus("loading");
    request(url)
      .then((data) => {
        setData(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, [url]);

  return { data, status };
};
