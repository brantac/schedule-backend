import { Replace } from 'src/helpers/Replace';
import { randomUUID } from 'node:crypto';

export interface ClientProps {
  name: string;
  email: string;
  createdAt: Date;
  deletedAt?: Date | null;
}

type CreateClientProps = Replace<ClientProps, { createdAt?: Date }>;

export class Client {
  private _id: string;
  private props: ClientProps;

  constructor(props: CreateClientProps, id?: string) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
    this._id = id ?? randomUUID();
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get email() {
    return this.props.email;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get deletedAt(): Date | undefined | null {
    return this.props.deletedAt;
  }

  public delete(): void {
    this.props.deletedAt = new Date();
  }

  public undelete(): void {
    this.props.deletedAt = null;
  }
}
