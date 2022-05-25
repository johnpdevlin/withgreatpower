export default {
  name: "constituency",
  title: "Constituency",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Constituency Name",
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
      name: "seats",
      title: "Seats",
      type: "number",
    },
    {
      name: "image",
      title: "Constituency Image",
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
            //   name: "party",
            //   title: "Party",
            //   type: "reference",
            //   to: [{ type: "party" }]
            // }, 
          ],  
          preview: {
            select: {
              title: "td.name",
              name: "td.name",
              // party: "party",
              party: "td.party",
              media: "td.image",
            },
            prepare({
              title,
              subtitle,
              media,
            }) {
              return {
                title,
                subtitle: `${party}`,
                media: "td.image",
              };
            }
          }
        },
      ],
    },
  ],
};
