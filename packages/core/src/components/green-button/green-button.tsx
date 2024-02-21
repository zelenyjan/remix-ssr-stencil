import {Component, h, Prop, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'green-button',
  styleUrl: 'green-button.css',
  shadow: true,
})
export class GreenButton {

  @Prop() label: string;

  @Event() greenClick!: EventEmitter<void>;

  onGreenClick() {
      this.greenClick.emit();
  }

  render() {
    return <button type="button" onClick={() => this.onGreenClick()}>{this.label}</button>
  }

}
