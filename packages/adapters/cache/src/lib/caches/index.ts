import { CacheParams, StoreChannel, SubscriptionCallback, Subscriptions } from "../entities";

export * from "./transactions";

/**
 * @classdesc Manages storage, updates, and retrieval of a set of data determined by use-case.
 */
export abstract class Cache {
  public readonly subscriptions: Subscriptions;
  constructor({ subscriptions }: CacheParams) {
    this.subscriptions = subscriptions;
  }

  /**
   * Publishes a message to the specified channel
   * @param channel The channel name that publishes messages to
   * @param message The message to publish
   */
  protected async publish(channel: StoreChannel, message: string): Promise<void> {
    const callback = this.subscriptions.get(channel);
    if (callback) callback(message);
  }

  /**
   * Subscribes to the specified channel, callback fn is called whenever a new message arrives
   * @param channel The channel name that publishes messages to
   * @param callback The callback function that is called whenever a new message arrives
   */
  public async subscribe(channel: StoreChannel, callback: SubscriptionCallback): Promise<void> {
    this.subscriptions.set(channel, callback);
  }
}