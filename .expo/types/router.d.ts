/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/discover` | `/(tabs)/home` | `/(tabs)/ourtrip` | `/(tabs)/profile` | `/(tabs)/search` | `/_sitemap` | `/auth/Signin` | `/auth/Signup` | `/discover` | `/home` | `/ourtrip` | `/profile` | `/search`;
      DynamicRoutes: `/Indialist/${Router.SingleRoutePart<T>}` | `/listing/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/Indialist/[ids]` | `/listing/[id]`;
    }
  }
}
