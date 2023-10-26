import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // publicRoutes: ['/', '/dashboard' /*, '/clerk'*/], 
    // ignoredRoutes: ['/clerk'],
    publicRoutes: ["/", '/clerk'],

});

export const config = {
    // matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
    matcher: ["/((?!.*\\..*|_next).*)", "/"],
};


