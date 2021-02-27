export type IGenerate<T> = {
  (data: T, index: number): T
}
