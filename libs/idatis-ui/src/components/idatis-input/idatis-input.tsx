import { Component, Prop, h } from '@stencil/core';
import { InputType } from './models';

@Component({
  tag: 'idatis-input',
  styleUrl: 'idatis-input.scss',
  shadow: true,
})
export class IdatisInput {
  @Prop() disabled: boolean = false;
  @Prop() type: InputType = InputType.text
  @Prop() placeholder: string = ''
  @Prop() title: string = ''

  render() {
    return <div>
      <label htmlFor={this.getIdWithoutSpaces(this.title)}>{this.title}</label>
      <input
      type={this.checkType(this.type)}
      placeholder={this.placeholder}
      disabled={this.disabled}
      id={this.getIdWithoutSpaces(this.title)}
      >
      </input>
    </div>
  }

  private checkType(type: InputType): InputType {
    return InputType[type] ? InputType[type] : InputType.text;
  }

  private getIdWithoutSpaces(id: string): string {
    return id.replace(/ /g,'');
  }
}
