"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RateLimiter {
    constructor() {
        this.xRateLimitType = 'x-rate-limit-type';
        this.retryAfter = 'retry-after';
        this.xAppRateLimit = 'x-app-rate-limit';
        this.xMethodRateLimit = 'x-method-rate-limit';
        this.xAppRateLimitCount = 'x-app-rate-limit-count';
        this.xMethodRateLimitCount = 'x-method-rate-limit-count';
    }
    checkLimits(headers) {
        this.checkLimit(headers[this.xAppRateLimit], headers[this.xAppRateLimitCount]);
        this.checkLimit(headers[this.xMethodRateLimit], headers[this.xMethodRateLimitCount]);
    }
    checkLimit(rateLimit, rateLimitCount) {
        if (rateLimit && rateLimitCount) {
            const appRateLimitArray = this.extractLimitArray(rateLimit);
            const appRateLimitCountArray = this.extractLimitArray(rateLimitCount);
            for (let i = 0; i < appRateLimitArray.length; i++) {
                this.compareRates(appRateLimitArray[i], appRateLimitCountArray[i]);
            }
        }
    }
    compareRates(appLimit, appCount) {
        const rateArray = this.extractCallsPerArray(appLimit);
        const rateCountArray = this.extractCallsPerArray(appCount);
        if (Number.parseInt(rateArray[0]) > Number.parseInt(rateCountArray[0])) {
            return true;
        }
        return false;
    }
    extractLimitArray(limit) {
        return limit.split(',');
    }
    extractCallsPerArray(limit) {
        return limit.split(':');
    }
}
exports.RateLimiter = RateLimiter;
