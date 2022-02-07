import GridWrapper from './component/GridWrapper'
import GridItem from './component/GridItem'

const Grid = GridWrapper
Grid.displayName = 'Grid'

Grid.Item = GridItem
Grid.Item.displayName = 'Grid.Item'

export default Grid
