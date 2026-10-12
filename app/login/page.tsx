"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email) {
      setErrorMsg("Please enter your email.");
      return;
    }

    try {
      setLoading(true);
      // API call to verify if this email has an approved order
      const res = await fetch("/api/auth/verify-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success && data.approved) {
        login(email);
        router.push("/watch?fileId=anusthan-1");
      } else {
        setErrorMsg(
          data.message || "Payment not found or not approved yet. Please complete payment."
        );
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="flex min-h-[80vh] items-center justify-center py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-foreground">Anushthan Login</h1>
        <p className="mt-2 text-sm text-muted">
          Enter your registered email address to access your video session.
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:border-gold focus:outline-none"
              required
            />
          </div>

          {errorMsg && <p className="text-xs text-red-500">{errorMsg}</p>}

          <Button type="submit" className="w-full py-3" disabled={loading}>
            {loading ? "Checking Access..." : "Login & Watch Video"}
          </Button>
        </form>
      </div>
    </Container>
  );
}