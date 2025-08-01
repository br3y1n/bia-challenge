import { CommandConfig } from "scripts/scripts.type";

const SERVERS_OPTIONS: CommandConfig[] = [
  {
    name: "FRONTEND",
    prefixColor: "green",
    getCommand: (flags) =>
      `yarn sync:envs ${Object.entries(flags)
        .map(([key, val]) => `--${key}=${val}`)
        .join(" ")} && yarn dev`,
    condition: () => true,
  },
];

export { SERVERS_OPTIONS };
