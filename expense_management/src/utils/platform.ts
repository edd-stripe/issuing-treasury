enum Platform {
  UK,
  EU,
}

const getPlatform = (country: string): Platform => {
  if (country == "GB") {
    return Platform.UK;
  } else {
    return Platform.EU;
  }
};

export { Platform, getPlatform };
