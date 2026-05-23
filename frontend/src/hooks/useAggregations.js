import { useState, useEffect } from 'react';

const BASE = 'http://localhost:8999/api/v1';

const fetchJSON = (url) => fetch(url).then((r) => r.json());

export const useAggregations = () => {
  const [data, setData] = useState({
    avgAge: null,
    activeStatus: null,
    maritalStatus: null,
    engineers: null,
    users: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      fetchJSON(`${BASE}/avgage`),
      fetchJSON(`${BASE}/activestatus`),
      fetchJSON(`${BASE}/maritalstatus`),
      fetchJSON(`${BASE}/numengineers`),
      fetchJSON(`${BASE}/users`),
    ])
      .then(([avgAge, activeStatus, maritalStatus, engineers, users]) => {
        setData({ avgAge, activeStatus, maritalStatus, engineers, users });
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
