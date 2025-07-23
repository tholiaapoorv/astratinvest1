import { type SchemaTypeDefinition } from "sanity";
import { testimonials } from "./schemas/testimonials";
import { blogs } from "./schemas/blog";
import { teamMembers } from "./schemas/team";
import { caseStudies } from "./schemas/caseStudies";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonials, blogs, teamMembers, caseStudies],
};
