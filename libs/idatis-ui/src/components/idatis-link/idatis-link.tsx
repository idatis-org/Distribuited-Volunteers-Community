import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'idatis-link',
  styleUrl: 'idatis-link.scss',
  shadow: true,
})
export class IdatisLink {
  @Prop() text: string = '';
  @Prop() href: string = '';

  render() {
    return <a
      href={this.href}
      >
      {this.text}
      </a>;
  }
}
