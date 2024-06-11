import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });

interface ENV {
  PORT: number | undefined;
  DB_REMOTE: string | undefined;
}

interface Config {
  PORT: number;
  DB_REMOTE: string;
}

const getConfig = (): ENV => {
  return {
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    DB_REMOTE: process.env.DB_REMOTE,
  };
};

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
