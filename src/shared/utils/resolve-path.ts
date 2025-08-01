import { configEnvs } from "@constants/config-envs.const";

const resolvePath = (path: string) =>
  path.startsWith("/") ? `${configEnvs.BASE_PATH}${path}` : path;

export { resolvePath };
