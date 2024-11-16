"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RoleBasedRouting = ({ user }) => {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login"); // Redirect to login if no user
      return;
    }

    if (user.role === "ADMIN") {
      router.push("/dashboard");
    } else if (user.role === "TRAINER") {
      router.push("/trainer");
    } else if (user.role === "TRAINEE") {
      router.push("/");
    } else {
      router.push("/"); // Optional: handle unknown roles
    }
  }, [user, router]);

  return null; // Optionally, return a loading spinner or message while routing
};

export default RoleBasedRouting;
