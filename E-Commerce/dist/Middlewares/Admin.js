export const adminOnly = (req, res, next) => {
    if (req.user.role === "Admin") {
        next();
    }
    else {
        return res.status(403).json({
            success: false,
            message: "Access denied, Admin Only!",
        });
    }
};
//# sourceMappingURL=Admin.js.map