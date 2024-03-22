import CardList from '../components/cardList'
import ContainerLayout from './container'
import ContentBanner from './contentBanner'
import FlexLayout from './flex'
import HeroHeader from './heroHeader'

/* Layout blocks are the middle level of abstraction for blocks, they are made up of common blocks.
Common blocks are the lowest level of abstraction for blocks, they are the building blocks for the layouts and templates. */
const LayoutBlocks = [FlexLayout, ContainerLayout, HeroHeader, CardList, ContentBanner]

export default LayoutBlocks
