import { PATHS } from "./paths";

export type TRootParamList = {
  [PATHS.SHIFTS]: undefined;
  [PATHS.SHIFT]: { shift: Shifts.Shift };
};

export  type TRootScreenProps<T extends keyof TRootParamList> = import("@react-navigation/native-stack").NativeStackScreenProps<TRootParamList, T>
