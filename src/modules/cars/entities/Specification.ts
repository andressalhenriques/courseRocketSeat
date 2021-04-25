import { v4 as uuidV4 } from 'uuid'
import { Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm"

@Entity("specification")
class Specification {
  @PrimaryColumn()
  id?: string

  @CreateDateColumn()
  createdAt: Date
  
  @Column()
  name: string

  @Column()
  description: string

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Specification }
