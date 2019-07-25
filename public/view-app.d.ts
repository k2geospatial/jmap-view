declare namespace JMap {

  /**
   * **JMap.ViewApp**
   * 
   * Here are JMap application related method.
   * 
   * JMap API can be started with only the map in the div of your choice, and you can start some JMap component too.
   * 
   * But from this section you will be able to manage the full JMap Web Application.
   */
  namespace ViewApp {

    /**
     * **JMap.ViewApp.getVersion**
     * 
     * Returns the application build version.
     * 
     * @example ```ts
     * 
     * // returns the build version, for example "1.0.1"
     * JMap.ViewApp.getVersion()
     * ```
     */
    function getVersion(): string
    
    /**
     * **JMap.ViewApp.openDocumentation**
     * 
     * Open JMap ViewApp online documentation, in a new tab.
     * 
     * @example ```ts
     * 
     * // open JMap ViewApp online documentation, in a new tab
     * JMap.ViewApp.openDocumentation()
     * ```
     */
    function openDocumentation(): void

    /**
     * **JMap.Application.getDomContainerId**
     * 
     * Returns the DOM div element id where application UI has been inserted.
     * 
     * @example ```ts
     * 
     * // returns the application DOM container id
     * JMap.Application.getDomContainerId()
     * ```
     */
    function getDomContainerId(): string
  }
}
