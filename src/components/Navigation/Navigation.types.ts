export interface Menu {
  wpMenu: {
    menuItems: {
      nodes: {
        id: string
        uri: string
        label: string
      }[]
    }
  }
}
