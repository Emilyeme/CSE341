import express from "express";
import passport from "../config/passport.js";

const router = express.Router();

// Start GitHub OAuth login
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));

// GitHub OAuth callback
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/auth/login-failed"
  }),
  (req, res) => {
    res.status(200).json({
      message: "GitHub login successful",
      user: req.user
    });
  }
);

// Login failed
router.get("/login-failed", (req, res) => {
  res.status(401).json({
    message: "GitHub login failed"
  });
});

// Logout
router.get("/logout", (req, res, next) => {
  req.logout((error) => {
    if (error) {
      return next(error);
    }

    req.session.destroy((sessionError) => {
      if (sessionError) {
        return next(sessionError);
      }

      res.status(200).json({
        message: "Logout successful"
      });
    });
  });
});

export default router;