import { BaseApi } from "./base.api";
import { apiPrefix, authUrl } from "./constants";
import { LoginRequest } from "./requests";
import { LoginResponse } from "./responses";

export class AuthAPI extends BaseApi {
    async loginApi(
        request: LoginRequest
    ): Promise<LoginResponse | null> {
        return await this.tryPost(authUrl.LOGIN(apiPrefix.V1), {
            ...request,
        });
    }

    async registerApi() {}
    async logoutApi() {}
    async handlerRefreshTokenApi() {}
    async identityWithPointerApi() {}
}