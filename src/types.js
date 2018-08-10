// @flow

export type Resource = {
  name: string,
  action?: string,
};

export type Request = {
  url: string,
  meta?: Object,
  comparison?: string,
  force?: boolean,
};

export type reduxAction = {
  type: string,
};

export type PromiseState<T> = {
  pending: boolean,
  fulfilled: boolean,
  rejected: boolean,
  value: T,
  request: {
    meta: *,
  },
};

export type FulfillAction = {
  type: string,
  key: string,
  value: *,
  request: {
    meta?: {
      removeFromList?: {
        path?: string,
        idName: string,
        id?: number | string | Array<number | string>,
      },
      addToList?: {
        path?: string,
        idName: string,
      },
    },
  },
  resource: Resource,
};

export type ReactReduxFetchResource = {
  resource: string | Resource,
  method?: 'GET' | 'PUT' | 'POST' | 'DELETE',
  request: () => Request | Request,
};

export type FetchConfig = (() => Array<ReactReduxFetchResource>) | Array<ReactReduxFetchResource>;
