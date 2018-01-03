export class RateLimiter {
    private xRateLimitType = 'x-rate-limit-type';
    private retryAfter = 'retry-after';
    private xAppRateLimit = 'x-app-rate-limit';
    private xMethodRateLimit = 'x-method-rate-limit';
    private xAppRateLimitCount = 'x-app-rate-limit-count';
    private xMethodRateLimitCount = 'x-method-rate-limit-count';

    public checkLimits(headers: {[key: string]: string}) {
        this.checkLimit(headers[this.xAppRateLimit], headers[this.xAppRateLimitCount]);
        this.checkLimit(headers[this.xMethodRateLimit], headers[this.xMethodRateLimitCount]);
    }

    private checkLimit(rateLimit, rateLimitCount) {
        if (rateLimit && rateLimitCount) {
            const appRateLimitArray: string[] = this.extractLimitArray(rateLimit);
            const appRateLimitCountArray: string[] = this.extractLimitArray(rateLimitCount);

            for (let i = 0; i < appRateLimitArray.length; i++) {
                this.compareRates(appRateLimitArray[i], appRateLimitCountArray[i]);
            }
        }
    }

    private compareRates(appLimit, appCount): boolean {
        const rateArray = this.extractCallsPerArray(appLimit);
        const rateCountArray = this.extractCallsPerArray(appCount);
        if (Number.parseInt(rateArray[0]) > Number.parseInt(rateCountArray[0])) {
            return true;
        }
        return false;
    }

    private extractLimitArray(limit: string): string[] {
        return limit.split(',');
    }

    private extractCallsPerArray(limit: string): string[] {
        return limit.split(':');
    }
}
