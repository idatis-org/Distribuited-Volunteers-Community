import { Component, Prop, getAssetPath, h } from '@stencil/core';
import { IconSize } from './models';

@Component({
  tag: 'idatis-icon',
  styleUrl: 'idatis-icon.scss',
  assetsDirs:['assets'],
  shadow: true
})
export class IdatisIcon {
  @Prop() icon: string = '';
  @Prop() size: IconSize = IconSize.medium;

  render() {
    return <span class={'idatis-icon ' + this.size}><img src={getAssetPath(`./assets/icons/${this.icon}.png`)} alt={this.icon}></img></span>;
  }
}
