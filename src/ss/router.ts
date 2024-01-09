import { useLocation } from 'wouter'

class Page {
  constructor(
    public readonly path: string,
  ) {}

  useNav2() {
    const [_, set] = useLocation()
    return () =>
      set(this.path)
  }
}

export
const pages = {
  home: new Page('/'),
  login: new Page('/login'),
  signup: new Page('/signup'),
}
