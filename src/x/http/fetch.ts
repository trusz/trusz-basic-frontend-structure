type Method = 'GET' | 'POST' | 'PUT';
type JSONResponse<T> = Omit<Response, 'body'> & { body: T };

export async function _fetch<T>(
  method: Method,
  url: string,
  payload?: unknown
): Promise<JSONResponse<T>> {
  let body: string | undefined = undefined;
  if (payload !== undefined) {
    body = JSON.stringify(payload);
  }

  const resp = await fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
    },
    body,
  });

  const jsonBody = (await resp.json()) as T;
  const typedResponse = {
    ...resp,
    body: jsonBody,
  };

  return typedResponse;
}

export async function fetchGET<T>(url: string): Promise<JSONResponse<T>> {
  const resp = _fetch<T>('GET', url);
  return resp;
}

export async function fetchPUT<T>(
  url: string,
  payload: unknown
): Promise<JSONResponse<T>> {
  const resp = await _fetch<T>('PUT', url, payload);
  return resp;
}

export async function fetchPOST<T>(
  url: string,
  payload?: unknown
): Promise<JSONResponse<T>> {
  const resp = await _fetch<T>('POST', url, payload);
  return resp;
}
