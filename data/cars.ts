/**
 * All of the cars data
 */

export interface Car {
  image: {
    dark: string;
    light: string;
  };
  name: string;
  url: string;
}

export const CARS: Car[] = [
  {
    name: "Porsche Macan 2015",
    image: {
      light: "/assets/porsche-macan-transparent.png",
      dark: "/assets/porsche-macan-dark-transparent.png",
    },
    url: "https://ddc.fleetwire.io/rental/reservations?l_id=l_5CWT8B98",
  },
  {
    name: "Tesla Model 3",
    image: {
      light: "/assets/tesla-model3-transparent.png",
      dark: "/assets/tesla-model3-dark-transparent.png",
    },
    url: "https://ddc.fleetwire.io/rental/reservations?l_id=l_6ZTBEH2G",
  },
  {
    name: "Genesis G80 2022",
    image: {
      light: "/assets/genesis-g80-transparent.png",
      dark: "/assets/genesis-g80-dark-transparent.png",
    },
    url: "https://ddc.fleetwire.io/rental/reservations?l_id=l_TJX4BCCQ",
  },
  {
    name: "Tesla Model Y",
    image: {
      light: "/assets/tesla-modely-transparent.png",
      dark: "/assets/tesla-modely-dark-transparent.png",
    },
    url: "https://ddc.fleetwire.io/rental/reservations?l_id=l_7685FC8Y",
  },
  {
    name: "Toyota Sienna",
    image: {
      light: "/assets/toyota-sienna-transparent.png",
      dark: "/assets/toyota-sienna-dark-transparent.png",
    },
    url: "https://ddc.fleetwire.io/rental/reservations?l_id=l_PM2Y6MD4",
  },
  {
    name: "Jeep Cherokee",
    image: {
      light: "/assets/jeep-cherokee-transparent.png",
      dark: "/assets/jeep-cherokee-dark-transparent.png",
    },
    url: "https://ddc.fleetwire.io/rental/reservations?l_id=l_U6CKDKGB",
  },
  {
    name: "BMW M440I",
    image: {
      light: "/assets/bmw-m440-transparent.png",
      dark: "/assets/bmw-m440-dark-transparent.png",
    },
    url: "https://ddc.fleetwire.io/rental/reservations?l_id=l_K4GSJ5CG",
  },
];
