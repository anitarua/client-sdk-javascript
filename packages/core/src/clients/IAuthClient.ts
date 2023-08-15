import {
  ExpiresIn,
  GenerateAuthToken,
  GenerateTemporaryAuthToken,
  RefreshAuthToken,
} from '../index';
import {TokenScope, TemporaryTokenScope} from '../auth/tokens/token-scope';

export interface IAuthClient {
  generateAuthToken(
    scope: TokenScope,
    expiresIn: ExpiresIn
  ): Promise<GenerateAuthToken.Response>;

  refreshAuthToken(refreshToken: string): Promise<RefreshAuthToken.Response>;

  generateTemporaryAuthToken(
    scope: TemporaryTokenScope,
    expiresIn: ExpiresIn
  ): Promise<GenerateTemporaryAuthToken.Response>;
}
