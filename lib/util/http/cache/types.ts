import type { GotOptions, HttpResponse } from '../types';

export interface HttpCacheProvider {
  setCacheHeaders<T extends Pick<GotOptions, 'headers'>>(
    url: string,
    opts: T,
  ): Promise<void>;

  wrapResponse<T>(url: string, resp: HttpResponse<T>): Promise<HttpResponse<T>>;
}
