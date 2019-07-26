declare interface JAPIOptions {
  /**
   * Contains all JMap View application options.
   * 
   * Will be processed only if you import in your HTML page the JMap API
   * and the JMap View indexes.
   * 
   * @example ```ts
   * 
   * viewApp: {
   *  // will create the view application in the div id="custom-view-app"
   *  containerId: "custom-view-app"
   * }
   * ```
   */
  viewApp?: JAPIViewAppOptions
}

declare interface JAPIViewAppOptions {
  /**
   * The JMap ViewApp DOM div container id.
   * 
   * Default value is "jmap-view-app".
   */
  containerId: string
}
