import { generateUrl } from '../../x/http';

const URLS = {
  Users: 'users',
};

export function urlUsers(baseUrl: string): string {
  return generateUrl(baseUrl, [URLS.Users]);
}
