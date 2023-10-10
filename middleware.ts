import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // publicRoutes: ['/', '/dashboard'], 
    // ignoredRoutes: ['/api/clerk/clerkwebhook'],

});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};


