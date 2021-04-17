import { API } from '../../configs';
import { handleAsync, storeData } from '../../utils';

/**
 * a Service for login
 */
export const login = async (payload = {}) => {
  const [res, err] = await handleAsync(API.auth.login({ params: payload }));
  console.log(payload);
  if (err) throw err;
  console.log(res);
  const { data } = res;
  const token = `Bearer ${data.token}`;
  storeData('TOKEN', { value: token });
  return data;
};
