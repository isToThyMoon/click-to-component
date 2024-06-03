export { ClickToComponent } from './ClickToComponent'

export type Editor =
  | 'vscode'
  | 'vscode-insiders'
  | 'custom'
  | 'idea'
  | 'webstorm'
  | 'pycharm'
  | 'phpstorm'

export type PathModifier = (path: string) => string

export type ClickToComponentProps = {
  editor?: Editor
  pathModifier?: PathModifier
  pathConfig?: {
    projectName: string
  }
}

export type Coords = [MouseEvent['pageX'], MouseEvent['pageY']]

export type Target = HTMLElement

export type ContextMenuProps = {
  onClose?: () => void
  pathModifier?: PathModifier
}
