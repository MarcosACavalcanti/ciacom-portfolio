import { Brazil } from "./flags.domain/Brazil";
import { UnitedStates } from "./flags.domain/UnitedStates";

export class FlagFactory {
  constructor() {}

  static flag(country: string): Flag {
    switch (country) {
      case "US":
        return new UnitedStates();
        break;
      case "BR":
        return new Brazil();
      default:
        return new UnitedStates();
    }
  }
}

export interface Flag {
    getSvg(size: FlagSize): string;
}

export interface FlagSize {
    width: number;
    height: number;
}



