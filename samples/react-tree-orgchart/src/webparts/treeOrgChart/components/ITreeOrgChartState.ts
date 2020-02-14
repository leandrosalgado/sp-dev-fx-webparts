import { ITreeData } from "./ITreeData";

export interface ITreeOrgChartState {
  treeData: ITreeData[];
  isLoading: boolean;
  search: string;
}
