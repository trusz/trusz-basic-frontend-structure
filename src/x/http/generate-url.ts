export function generateUrl(
  baseUrl: string,
  path: string[],
  queries: Query[] = []
): string {
  const pathString = path.join('/');
  const newUrl = new URL(pathString, baseUrl);
  queries.forEach((q) => {
    newUrl.searchParams.append(q.name, q.value);
  });

  return newUrl.toString();
}

export type Query = {
  name: string;
  value: string;
};
