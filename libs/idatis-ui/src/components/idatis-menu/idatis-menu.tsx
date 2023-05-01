import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'idatis-menu',
  styleUrl: 'idatis-menu.scss',
  shadow: true,
})
export class IdatisMenu {
  @Prop() items: string[] = [];

  render() {
    return <div class="menu-container"></div>;
  }
}
