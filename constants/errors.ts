export const invalidKey = new Error(
  "[FortniteSkinsIL]: Invalid Key Inputted - Key Does Not Match Any Service"
);

export const makeInvalidKeyError = (serviceName: string): Error => {
  return new Error(
    `[FortniteSkinsIL]: Requested ${serviceName} Key Data Fetch, But Key Does Not Match ${serviceName} Key Pattern`
  );
};

export const makeFailedFetchError = (serviceName: string): Error => {
  return new Error(
    `[FortniteSkinsIL]: Failed To Fetch SkinCode Data From ${serviceName}`
  );
};
