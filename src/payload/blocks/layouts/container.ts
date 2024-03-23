import { Block } from 'payload/types'

import CommonBlocksField from '../../fields/common/commonBlocks'

const ContainerLayout: Block = {
  slug: 'container_layout',
  labels: { singular: 'Container', plural: 'Containers' },
  fields: [CommonBlocksField],
}

export default ContainerLayout
