import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
// 保护应用的路由并确保只有认证的用户可以访问特定路径
export default authMiddleware({
    publicRoutes: ["/api/uploadthing"]
});
//间件应用的路由模式。 所有其他匹配的路由都将被 authMiddleware 拦截，并要求用户认证。
export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};