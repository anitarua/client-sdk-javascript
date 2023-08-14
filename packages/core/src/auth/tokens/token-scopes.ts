import {
  CacheRole,
  CacheSelector,
  TokenScope,
  TopicRole,
  TopicSelector,
  CacheItemSelector,
  AllItems
} from './token-scope';

export function cacheReadWrite(cacheSelector: CacheSelector, cacheItemSelector: CacheItemSelector = AllItems): TokenScope {
  return {
    permissions: [{role: CacheRole.ReadWrite, cache: cacheSelector, item: cacheItemSelector}],
  };
}

export function cacheReadOnly(cacheSelector: CacheSelector, cacheItemSelector: CacheItemSelector = AllItems): TokenScope {
  return {
    permissions: [{role: CacheRole.ReadOnly, cache: cacheSelector, item: cacheItemSelector}],
  };
}

export function topicSubscribeOnly(
  cacheSelector: CacheSelector,
  topicSelector: TopicSelector
): TokenScope {
  return {
    permissions: [
      {
        role: TopicRole.SubscribeOnly,
        cache: cacheSelector,
        topic: topicSelector,
      },
    ],
  };
}

export function topicPublishSubscribe(
  cacheSelector: CacheSelector,
  topicSelector: TopicSelector
): TokenScope {
  return {
    permissions: [
      {
        role: TopicRole.PublishSubscribe,
        cache: cacheSelector,
        topic: topicSelector,
      },
    ],
  };
}
