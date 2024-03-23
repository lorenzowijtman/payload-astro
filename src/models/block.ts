export interface Block {
  id: string
  blockName: null | string
  blockType: string
  blocks?: Block[]
}
