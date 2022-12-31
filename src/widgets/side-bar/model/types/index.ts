
export interface SideBarItemType {
  path      : string
  label     : string
  icon      : React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly? : boolean
}
