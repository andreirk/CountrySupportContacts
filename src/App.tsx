import React, { useEffect, useState } from "react";
import { getMe, getSupportContacts } from "./mock";
import { Country } from "./types";

export const App = () => {
  const [region, setRegion] = useState<string>();
  const [contactsList, setContactsList] = useState<any[]>([]);
  useEffect(() => {
    getMe().then((result) => {
      const { region } = result;
      setRegion(region);
    });
  }, []);

  useEffect(() => {
    if (region) {
      getSupportContacts().then((regionContactsMap: any) => {
        if (regionContactsMap) {
          let contryContactsMap;
          let supportContacts: any = [];
          switch (region) {
            case Country.EUROPE:
              Object.values(regionContactsMap).forEach((contryContactsMap) => {
                Object.entries(contryContactsMap as any).reduce(
                  (acc: any[], [key, value]) => {
                    acc.push({
                      contactType: key,
                      value: value
                    });
                    return acc;
                  },
                  supportContacts
                );
              });
              break;
            case Country.AUSTRALIA:
              contryContactsMap = regionContactsMap[region];
              Object.entries(contryContactsMap).reduce(
                (acc: any[], [key, value]) => {
                  acc.push({
                    contactType: key,
                    value: value
                  });
                  return acc;
                },
                supportContacts
              );
              break;

            default:
              contryContactsMap = regionContactsMap[Country.NORTH_AMERICA];
              Object.entries(contryContactsMap).reduce(
                (acc: any[], [key, value]) => {
                  acc.push({
                    contactType: key,
                    value: value
                  });
                  return acc;
                },
                supportContacts
              );
          }
          setContactsList(supportContacts);
        }
      });
    }
  }, [region]);

  return (
    <div className="App">
      <h1>Контакты поддержки</h1>
      Для вашего региона- {region} :
      <ul>
        {contactsList.length > 0 &&
          contactsList.map((el) => {
            return (
              <li>
                <span>{el.contactType}:</span> <span>{el.value}</span>{" "}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
