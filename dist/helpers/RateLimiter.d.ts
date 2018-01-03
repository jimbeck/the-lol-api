export declare class RateLimiter {
    private xRateLimitType;
    private retryAfter;
    private xAppRateLimit;
    private xMethodRateLimit;
    private xAppRateLimitCount;
    private xMethodRateLimitCount;
    checkLimits(headers: {
        [key: string]: string;
    }): void;
    private checkLimit(rateLimit, rateLimitCount);
    private compareRates(appLimit, appCount);
    private extractLimitArray(limit);
    private extractCallsPerArray(limit);
}
