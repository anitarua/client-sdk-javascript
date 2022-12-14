// older versions of node don't have the global util variables https://github.com/nodejs/node/issues/20365
import {TextDecoder} from 'util';
import {CacheSetResponse} from './cache-set-response';

const TEXT_DECODER = new TextDecoder();

export class Success extends CacheSetResponse {
  public readonly value: Uint8Array;
  constructor(value: Uint8Array) {
    super();
    this.value = value;
  }

  public valueString(): string {
    return TEXT_DECODER.decode(this.value);
  }

  public valueBytes(): Uint8Array {
    return this.value;
  }
}

export class Error extends CacheSetResponse {
  private readonly errorMessage: string;

  // TODO MOAR FIELDS
  constructor(message: string) {
    super();
    this.errorMessage = message;
  }

  public message(): string {
    return this.errorMessage;
  }
}
