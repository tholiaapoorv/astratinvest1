import { defineArrayMember, defineField, defineType } from "sanity";

export const blogs = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    // defineField({
    //   name: "categories",
    //   title: "Categories",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "category" } }],
    // }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({
      name: "markdownBody",
      title: "Markdown Body (LaTeX supported)",
      type: "text",
      rows: 30,
    }),
    defineField({
      name: "bodyImages",
      title: "Body Images (for Markdown)",
      description:
        "Upload images here and give each a short Reference name. Then place it anywhere in the Markdown Body with ![alt text](name) — e.g. ![Performance chart](chart1).",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          name: "bodyImage",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "name",
              title: "Reference name",
              type: "string",
              description:
                "Use this exact name in the Markdown Body: ![alt](name). Keep it short, no spaces — e.g. chart1.",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              description:
                "Used if the Markdown link omits alt text. Important for accessibility.",
            }),
          ],
          preview: {
            select: { title: "name", media: "asset" },
            prepare(selection) {
              const { title, media } = selection as {
                title?: string;
                media?: unknown;
              };
              return {
                title: title || "⚠ Set a Reference name",
                subtitle: title ? `Markdown: ![alt](${title})` : undefined,
                media: media as never,
              };
            },
          },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
