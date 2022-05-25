export default {
  name: "party",
  title: "Party",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Party Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "founded",
      title: "Date Founded",
      type: "date",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "td",
      title: "TD",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "td",
              title: "TD",
              type: "reference",
              to: [{ type: "td" }],
            },
            // {
            //   name: "constituency",
            //   title: "Constituency",
            //   type: "reference",
            //   to: [{ type: "constituency" }]
            // }, 
          ],  
          preview: {
            select: {
              title: "td.name",
              name: "td.name",
              // constituency: "constituency",
              constituency: "td.constituency",
              media: "td.image",
            },
            prepare({
              title,
              subtitle,
              media,
            }) {
              return {
                title,
                subtitle: `${constituency}`,
                media: "td.image",
              };
            }
          }
        },
      ],
    },
  ],
};
