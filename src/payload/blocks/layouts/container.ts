import { Block } from 'payload/types'

import CommonBlocksField from '../../fields/common/commonBlocks'
import MarginField from '../../fields/custom/marginField'

const ContainerLayout: Block = {
  slug: 'container_layout',
  labels: { singular: 'Container', plural: 'Containers' },
  fields: [CommonBlocksField(), MarginField],
}

export default ContainerLayout
