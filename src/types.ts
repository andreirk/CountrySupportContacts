export enum DeployRegion {
  "AUSTRALIA" = "AUSTRALIA",
  "WORLD" = "WORLD"
}
export enum Country {
  "NORTH_AMERICA" = "NORTH_AMERICA",
  "CHINA" = "CHINA",
  "AUSTRALIA" = "AUSTRALIA",
  "EUROPE" = "EUROPE"
}

export type CountryKey = keyof typeof Country;

// тип для метода getMe
export type Me = {
  region: CountryKey;
};

export type ContactInfo = {
  phone: string;
  address: string;
};

// тип для метода getSupportContacts
export type SupportContact = Partial<Record<CountryKey, ContactInfo>>;
