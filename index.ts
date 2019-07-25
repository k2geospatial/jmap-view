export interface JViewAppService {
  getVersion(): string
  openDocumentation(): void
  getDomContainerId(): string
}

export interface JViewAppState {
  ready: boolean
}
