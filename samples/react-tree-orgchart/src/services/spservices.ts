import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from '@pnp/sp';

export default class spservices {
  constructor(private context: WebPartContext) {
    sp.setup({
      spfxContext: this.context
    });
  }

  /**
   * Get user profile properties
   * @param user 
   */
  public async getUserProperties(user: string) {

    let currentUserProperties: any = await sp.profiles.getPropertiesFor(user);
    return currentUserProperties;
  }

  /**
   * 
   * @param user 
   * @param property 
   */
  public async getUserProfileProperty(user: string, property: string) {
    let UserProperty: any = await sp.profiles.getUserProfilePropertyFor(user, property);
    return UserProperty;
  }

  public async getManager(userID: string) {
    const client = await this.context.msGraphClientFactory.getClient();
    const user = "tomas.safar@lmsalgado.onmicrosoft.com";
    // const manager = await client.api(`user/${userID}/manager`).version("v1.0").get();
    const manager = await client.api(`users/${user}/manager`).version("v1.0").get();
    //const manager = await client.api(`me/directReports`).version("v1.0").get();
    return manager;
  }
}
