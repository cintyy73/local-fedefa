export interface Access {
  token_type: string;
  expires_in: number;
  access_token: string;
}

export interface Product {
  id: number;
  entity_id: number;
  entity_type_id: number;
  title: string;
  description: string;
  short_description: string;
  photo_path: string;
  product_type: string;
  entity: Entity;
}

export interface Entity {
  id: number;
  bussiness_name: string;
  fantasy_name: string;
  web_profile: string;
  facebook_profile: string;
  twitter_profile: string;
  instagram_profile: string;
  linkedin_profile: string;
  address: string;
  type_id: number;
  about_us: string;
  status: string;
  is_premium: number;
  is_donor: number;
  shares_contact_information: number;
  updated_at: Date;
  location_lat: number;
  location_lng: number;
  type: Organization;
}

export interface Organization {
  id: number;
  name: string;
  appliable_to: string;
}

export interface Link {
  first: string;
  last: string;
  prev: null;
  next: string;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Response<T> {
  data: T;
  links: Link;
  meta: Meta;
}

export interface ResponseProduct {
  data: Product;
}
export interface MetaValues {
  page: number;
  title: string;
  description: string;
  productTypes: string;
  entityType: string;
}

export interface Option {
  value: string;
  label: string;
}
