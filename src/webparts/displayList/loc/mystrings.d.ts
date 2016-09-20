declare interface IDisplayListStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  DataGroupName: string;
  Loading: string;
}

declare module 'displayListStrings' {
  const strings: IDisplayListStrings;
  export = strings;
}
