import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';

export const useAxios = (api: any, body?: any) => {
  const [response, setResponse] = useState<any>({});
  const [error, setError] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const [isClick, setIsClick] = useState(false);

  const isSuccess = !isEmpty(response);
  const isError = !isEmpty(error);
  const errorMessage = error?.response?.data?.message || {};

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await api(body);
      setResponse(result.data);
      setError({});
    } catch (error) {
      setError(error as any);
      setResponse({});
      console.log(error);
    } finally {
      setLoading(false);
      setIsClick(false);
    }
  };

  useEffect(() => {
    if (isClick) {
      fetchData();
    }
    return () => {
      setIsClick(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClick]);

  return [
    response,
    error,
    loading,
    setIsClick,
    isSuccess,
    isError,
    errorMessage
  ];
};
