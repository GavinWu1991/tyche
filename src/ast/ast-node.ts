export interface BaseNode {
    type: string,
    kind: string,
    body?: BaseNode[],
    parent?: BaseNode
}
