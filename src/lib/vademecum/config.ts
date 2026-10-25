export const PDF_URL =
  "https://drive.google.com/file/d/1Q4sVe_5xGJZ3iNGZBo4oypMZZAYHrCft/view?usp=sharing";

export const MIN_QUERY_LENGTH = 2;
export const MAX_RESULTS = 60;

export const BASE_PATH = "/vademecum";
export const START_SLUG = "start";

export const pageHref = (slug: string) =>
  slug === START_SLUG ? BASE_PATH : `${BASE_PATH}/${slug}`;
