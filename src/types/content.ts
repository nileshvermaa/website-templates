// Shared content shapes for the highnote.com clone.

export interface NavLink {
  label: string;
  href: string;
}

export interface ProductCard {
  title: string;
  description: string;
  href: string;
}

export interface SolutionCard {
  title: string;
  description: string;
  href: string;
  image: string; // path under /public
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string; // path under /public
}

export interface Quote {
  quote: string;
  logo: string; // path under /public
  alt: string;
}

export interface BlogCard {
  title: string;
  href: string;
  image: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}
