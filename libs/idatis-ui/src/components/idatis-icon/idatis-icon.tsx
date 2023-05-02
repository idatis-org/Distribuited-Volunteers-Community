import { Component, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'idatis-icon',
  styleUrl: 'idatis-icon.scss',
  assetsDirs:['assets'],
  shadow: true
})
export class IdatisIcon {
  @Prop() icon: string = '';

  render() {
    return <span class='idatis-icon'><img src={getAssetPath(`./assets/${this.icon}`)} alt={this.icon}></img></span>;
  }
}
