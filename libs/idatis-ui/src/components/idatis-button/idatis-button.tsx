import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'idatis-button',
  styleUrl: 'idatis-button.scss',
  shadow: true,
})
export class IdatisButton {
  @Prop() text: string = '';
  @Prop() disabled: boolean = false;

  render() {
    return <button
      disabled={this.disabled}
      >
      {this.text}
      </button>;
  }
}
