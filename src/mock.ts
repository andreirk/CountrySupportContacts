import { Country, DeployRegion, Me, SupportContact } from "./types";

export const getMe = async () => {
  return new Promise<Me>((resolve) => {
    const region = Country.CHINA; // это можно менять
    setTimeout(() => resolve({ region }), 500);
  });
};

export const getSupportContacts = async () => {
  const DEPLOY_REGION = DeployRegion.WORLD; // это можно менять
  const supportContactsMap = {
    [DeployRegion.AUSTRALIA]: {
      [Country.AUSTRALIA]: { phone: "Axxxx", address: "Axxxx" }
    },
    [DeployRegion.WORLD]: {
      [Country.NORTH_AMERICA]: { phone: "Nxxxx", address: "Nxxxx" },
      [Country.EUROPE]: { phone: "Exxxx", address: "Exxxx" }
    }
  };

  return new Promise<SupportContact>((resolve) => {
    setTimeout(() => resolve(supportContactsMap[DEPLOY_REGION]), 500);
  });
};
