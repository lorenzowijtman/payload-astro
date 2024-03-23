import { Field } from 'payload/types'

import CommonBlocks from '../../blocks/components'

export const CommonBlocksField: Field = {
  name: 'blocks',
  type: 'blocks',
  blocks: [...CommonBlocks],
}

export default CommonBlocksField
