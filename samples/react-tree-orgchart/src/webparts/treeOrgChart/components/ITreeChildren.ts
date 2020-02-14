export interface ITreeChildren {
  title ? : ITreeTitle;
  expanded ? :boolean;
  children ? : any;
  filterFound?: boolean;
}

export interface ITreeTitle {
  [key: string]: any;
  props: {
    text: string;
    tertiaryText: string;
  };
}
