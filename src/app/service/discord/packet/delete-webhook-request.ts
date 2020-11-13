import {Packet} from '../../packet/packet';

export class DeleteWebhookRequest implements Packet {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

  getName(): string {
    return 'io.robertengel.dsbot.discord.webhook.ws.packet.incoming.DeleteWebhookRequest';
  }
}
