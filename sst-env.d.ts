/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    MyBlog: {
      type: "sst.aws.Astro"
      url: string
    }
  }
}
export {}