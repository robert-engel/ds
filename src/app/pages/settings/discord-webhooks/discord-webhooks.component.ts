import {Component, OnDestroy, OnInit} from '@angular/core';
import {DiscordWebhook} from '../../../service/discord/structures/discord-webhook';
import {DiscordWebhookEntity} from '../../../service/discord/structures/discord-webhook-entity';
import {FormBuilder, Validators} from '@angular/forms';
import {DiscordService} from '../../../service/discord/discord.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-discord-webhooks',
  templateUrl: './discord-webhooks.component.html',
  styleUrls: ['./discord-webhooks.component.css']
})
export class DiscordWebhooksComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  possible: DiscordWebhook[] = [];
  setup: DiscordWebhookEntity[] = [];

  selected: DiscordWebhook;

  editEntity: DiscordWebhookEntity;

  form = this.fb.group({
    ordinal: ['', Validators.required],
    template: ['', Validators.required],
    username: ['', Validators.required],
    url: ['', Validators.required],
  });

  constructor(
    private discord: DiscordService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.form.get('ordinal').valueChanges.subscribe((value: DiscordWebhook) => {
      this.selected = value;
      this.form.patchValue({
        username: value.username,
        template: value.template,
      }, {emitEvent: false});
    });
    this.discord.getPossible().pipe(takeUntil(this.unsub$)).subscribe(data => {
      this.possible = data;
    });
    this.discord.getSetup().pipe(takeUntil(this.unsub$)).subscribe(data => {
      this.setup = data;
    });
    this.discord.addEvents().pipe(takeUntil(this.unsub$)).subscribe(data => {
      this.setup = [
        ...this.setup,
        data
      ];
    });
    this.discord.deleteEvents().pipe(takeUntil(this.unsub$)).subscribe(id => {
      this.setup = this.setup.filter(val => val.id !== id);
    });
  }

  delete(id: number): void {
    this.discord.delete(id);
  }

  submit(data): void {
    this.discord.add(data.ordinal.ordinal, data.template, data.username, data.url);
  }

  edit(entity: DiscordWebhookEntity): void {
    this.editEntity = entity;
    let webhook;
    this.possible.forEach(item => {
      if (item.name === entity.webhook) {
        webhook = item;
      }
    });
    this.form.setValue({
      ordinal: webhook,
      template: entity.template,
      username: entity.username,
      url: entity.url,
    }, {emitEvent: false});
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

}
