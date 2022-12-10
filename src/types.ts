export type Query = {
  id: number,
  prompt: string,
  negativePrompt: string,
  steps: number,
  method: string,
  width: number,
  height: number,
  restoreFaces: boolean,
  cfg: number,
  status?: string,
}