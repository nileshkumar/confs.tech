declare module 'react-instantsearch/connectors' {
  import * as React from 'react';

  interface Connector<T> {
    (component: T): T;
  }

  export const connectConfigure: Connector<typeof React.Component>;
  export const connectCurrentRefinements: Connector<typeof React.Component>;
  export const connectHierarchicalMenu: Connector<typeof React.Component>;
  export const connectHighlight: Connector<typeof React.Component>;
  export const connectHits: Connector<typeof React.Component>;
  export const connectAutoComplete: Connector<typeof React.Component>;
  export const connectHitsPerPage: Connector<typeof React.Component>;
  export const connectInfiniteHits: Connector<typeof React.Component>;
  export const connectMenu: Connector<typeof React.Component>;
  export const connectNumericMenu: Connector<typeof React.Component>;
  export const connectPagination: Connector<typeof React.Component>;
  export const connectPoweredBy: Connector<typeof React.Component>;
  export const connectRange: Connector<typeof React.Component>;
  export const connectRefinementList: Connector<typeof React.Component>;
  export const connectScrollTo: Connector<typeof React.Component>;
  export const connectBreadcrumb: Connector<typeof React.Component>;
  export const connectSearchBox: Connector<typeof React.Component>;
  export const connectSortBy: Connector<typeof React.Component>;
  export const connectStats: Connector<typeof React.Component>;
  export const connectToggleRefinement: Connector<typeof React.Component>;
  export const connectStateResults: Connector<typeof React.Component>;
}

declare module 'react-instantsearch/dom' {
  import * as React from 'react';

  export class InstantSearch extends React.Component<any, any> { constructor(); }
  export class Index extends React.Component<any, any> { constructor(); }
  export class Configure extends React.Component<any, any> { constructor(); }
  export class CurrentRefinements extends React.Component<any, any> { constructor(); }
  export class HierarchicalMenu extends React.Component<any, any> { constructor(); }
  export class Highlight extends React.Component<any, any> { constructor(); }
  export class Snippet extends React.Component<any, any> { constructor(); }
  export class Hits extends React.Component<any, any> { constructor(); }
  export class HitsPerPage extends React.Component<any, any> { constructor(); }
  export class InfiniteHits extends React.Component<any, any> { constructor(); }
  export class Menu extends React.Component<any, any> { constructor(); }
  export class MenuSelect extends React.Component<any, any> { constructor(); }
  export class NumericMenu extends React.Component<any, any> { constructor(); }
  export class Pagination extends React.Component<any, any> { constructor(); }
  export class PoweredBy extends React.Component<any, any> { constructor(); }
  export class RangeInput extends React.Component<any, any> { constructor(); }
  export class RangeSlider extends React.Component<any, any> { constructor(); }
  export class RatingMenu extends React.Component<any, any> { constructor(); }
  export class RefinementList extends React.Component<any, any> { constructor(); }
  export class ClearRefinements extends React.Component<any, any> { constructor(); }
  export class ScrollTo extends React.Component<any, any> { constructor(); }
  export class SearchBox extends React.Component<any, any> { constructor(); }
  export class SortBy extends React.Component<any, any> { constructor(); }
  export class Stats extends React.Component<any, any> { constructor(); }
  export class ToggleRefinement extends React.Component<any, any> { constructor(); }
  export class Panel extends React.Component<any, any> { constructor(); }
  export class Breadcrumb extends React.Component<any, any> { constructor(); }
}

declare module 'react-instantsearch/native' {
  import * as React from 'react';

  export const InstantSearch: React.Component;
  export const Index: React.Component;
  export const Configure: React.Component;
}

declare module 'react-instantsearch/server' {
  import * as React from 'react';

  export type resultsState = Object | any[];

  export interface root {
    Root: string | ((...args: any[]) => any);
    props?: Object;
  }

  export interface props {
    algoliaClient?: Object;
    appId?: string;
    apiKey?: string;
    children?: React.ReactNode[] | React.ReactNode;
    indexName: string;
    createURL?: (...args: any[]) => any;
    searchState?: Object;
    refresh: boolean;
    onSearchStateChange?: (...args: any[]) => any;
    onSearchParameters?: (...args: any[]) => any;
    resultsState?: resultsState;
    root?: root;
  }

  type CreateInstantSearch = React.SFC<props>;
}
