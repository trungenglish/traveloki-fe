import { AUTH_URL } from "./prefix";

const BASE = (apiVersion: string): string =>
  `${AUTH_URL}/${apiVersion}`;

export const LOGIN = (apiVersion: string): string =>
  `${BASE(apiVersion)}/login`;