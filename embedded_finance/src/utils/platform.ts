enum Platform {
  US,
}

const getPlatform = (country: string): Platform => {
  if (country == "US") {
    return Platform.US;
  } else {
    throw `Unsupported country: ${country}`;
  }
};

export { Platform, getPlatform };
