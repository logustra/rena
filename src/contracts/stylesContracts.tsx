
export interface Theme {
  colors: {[key: string]: string},
  sizes: {[key: string]: string},
  typography: Typography
}

export interface Typography {
  lato: {
    regular: string,
    bold: string
  }
}
