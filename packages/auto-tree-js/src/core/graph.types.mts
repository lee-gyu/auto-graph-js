export type DataNode = {
    content: unknown;
    children: DataNodeRelation[];
};

export type DataNodeLink = {
    content: unknown;
};

export type DataNodeRelation = {
    node: DataNode;
    link: DataNodeLink;
};

/*

{
    type: "node",
    children: [
        {
            node: {}
            link: {}
        }
    ]
}

 */