type Params = {
  [key: string]: string;
};
type Query = {
  [key: string]: string;
};
type MakePath = (params?: Params, queries?: Query) => string;
type Route = {
  path: string;
  makePath: MakePath;
};
type Routes = {
  [key: string]: Route;
};

const makePath: MakePath = function (
  this: Route,
  params?: Params,
  queries?: Query
) {
  let path = this.path;
  if (params) {
    Object.keys(params).forEach((p) => {
      path = path.replace(`:${p}`, params[p]);
    });
  }
  if (queries) {
    Object.keys(queries).forEach((q, idx) => {
      let symbol = "&";
      if (idx === 0) {
        symbol = "?";
      }
      path += `${symbol}${q}=${encodeURIComponent(queries[q])}`;
    });
  }
  return path;
};

export const routes: Routes = {
  home: {
    path: "/",
    makePath: makePath,
  },
  curation: {
    path: "/curation",
    makePath: makePath,
  },
  roulette: {
    path: "/games/roulette",
    makePath: makePath,
  },
};
