import * as React from 'react';
import { IHhhhSolutionProps } from './IHhhhSolutionProps';
import { escape } from '@microsoft/sp-lodash-subset';
import ComponentsItems from './ServiceComponent'

export default class HhhhSolution extends React.Component<IHhhhSolutionProps, {}> {
  public render(): React.ReactElement<IHhhhSolutionProps> {
    
    return (
      <div><ComponentsItems></ComponentsItems></div>
    );
  }
}
