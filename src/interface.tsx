export interface IProduct {
  link: string;
  img: string;
}

export interface IModes {
  darkMode?: boolean;
  type?: string;
  themeReducer?: IModes;
  INITIAL_STATE?: boolean;
  state?: {
    darkMode?: boolean;
  };
  dispatch?: React.Dispatch<{ type: string }>;
}
