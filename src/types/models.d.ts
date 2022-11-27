interface Link {
  id: number | string
  title: string
  url: string
  switch: boolean
}

interface LinkState {
  linkList: Link[]
}
