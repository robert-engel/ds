import {Packet} from '../../packet/packet';

export class AddWebhookRequest implements Packet {

  ordinal: number;
  template: string;
  username: string;
  url: string;

  constructor(ordinal: number, template: string, username: string, url: string) {
    this.ordinal = ordinal;
    this.template = template;
    this.username = username;
    this.url = url;
  }

  getName(): string {
    return 'io.robertengel.dsbot.discord.webhook.ws.packet.incoming.AddWebhookRequest';
  }
}
