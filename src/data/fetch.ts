import { HomeAssistant } from "custom-card-helpers";

import {
  Configuration,
  Repository,
  Critical,
  Status,
  LovelaceResource,
} from "./common";
export const getConfiguration = async (hass: HomeAssistant) => {
  const response = await hass.connection.sendMessagePromise<Configuration>({
    type: "hacs/config",
  });
  return response;
};

export const getRepositories = async (hass: HomeAssistant) => {
  const response = await hass.connection.sendMessagePromise<Repository[]>({
    type: "hacs/repositories",
  });
  return response;
};

export const getCritical = async (hass: HomeAssistant) => {
  const response = await hass.connection.sendMessagePromise<Critical[]>({
    type: "hacs/get_critical",
  });
  return response;
};

export const getStatus = async (hass: HomeAssistant) => {
  const response = await hass.connection.sendMessagePromise<Status>({
    type: "hacs/status",
  });
  return response;
};

export const getLovelaceConfiguration = async (hass: HomeAssistant) => {
  try {
    const response = await hass.connection.sendMessagePromise<
      LovelaceResource[]
    >({
      type: "lovelace/resources",
    });
    return response;
  } catch (e) {
    return null;
  }
};
