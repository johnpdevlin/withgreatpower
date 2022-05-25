export default {
  name: "td",
  title: "TD",
  type: "document",
  fields: [
    {
      name: "name",
      title: "TD Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "",
        maxLength: 96,
      },
    },
    {
      name: "party",
      title: "Party",
      type: "reference",
      to: { type: "party" },
    },
    {
      name: "constituency",
      title: "Constituency",
      type: "reference",
      to: { type: "constituency" },
    },
    {
      name: "image",
      title: "TD Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "firstElected",
      title: "First Elected",
      type: "date",
    },
    {
      name: "gender",
      title: "Gender:",
      type: "string",
      options: {
        list: ["Male", "Female"],
      },
    }
  ],
}
