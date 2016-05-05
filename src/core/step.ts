import { Command, PictureCommand } from '../../app/models'
import {ValueType} from 'src/core/data/data_definition'

export class Step {
  constructor(private command: Command, private data: {}) {

  }

  addParameter(name: String, value: ValueType) {
    this.data[name] = value
  }
  
  isValid(): boolean {
    return this.command.validate(this.data)
  }
  
  getSummary() {
    return this.command.getSummary(this.data)
  }
}
