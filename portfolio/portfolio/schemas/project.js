export default{
    name: "project",
    title: "Project",
    type:"document",
    fields: [
        {
            name: "title",
            type: "string"
        },
        {
            name: "date",
            type: "datetime"
        },
        {
            name: "ProjectType",
            title: "Project Type",
            type: "string",
            options:{
                list: [
                    {value: "personal", title: "Personal"},
                    {value: "client", title: "Client"},
                    {value: "nonProfit", title: "NonProfit"}
                ]
            }
        },
        {
            name: "link",
            type: "url"
        }
    ]
}