import {ITreeChildren, ITreeTitle } from './ITreeChildren';
export interface ITreeData {
   title: ITreeTitle;
   expanded ?: boolean;
   children ? : ITreeChildren[];
   filterFound?: boolean;
}
