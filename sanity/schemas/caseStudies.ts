import { defineField } from "sanity";

export const caseStudies = {
  name: "caseStudies",
  type: "document",
  title: "Case Studies",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of the Case Study",
    },
    {
      name: "image",
      type: "image",
      title: "Graph of the Case Study",
    },
    {
      name: "image2",
      type: "image",
      title: "Graph No.2 of the Case Study",
    },
    defineField({
      name: "body",
      title: "Body of the Case Study",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
  ],
};
