export interface ArticleListConfig {
  type: string;

  filters: {
    tag?: string;
    title?: string;
    slug?: string;
    author?: string;
    favorited?: string;
    limit?: number;
    offset?: number;
  };
}
