"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import CountdownTimer from "../CountdownTimer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UPIPaymentForm from "../payment/UPIPaymentForm";

const heroImage =
  "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1800&q=90";

export function Hero() {
const router = useRouter();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in via localStorage
    const savedEmail = localStorage.getItem("user_email");
    if (savedEmail) {
      setIsLoggedIn(true);
    }
  }, []);


const handleBookClick = async () => {
  if (isLoggedIn) {
    router.push("/watch?fileId=anusthan-1");
    return;
  }

  try {
    // Load Razorpay Checkout
    const scriptLoaded = await new Promise<boolean>((resolve) => {
      const existingScript = document.querySelector(
        'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
      );

      if (existingScript) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

    if (!scriptLoaded) {
      alert("Could not load Razorpay. Please try again.");
      return;
    }

    // Create an order on your server
    const orderResponse = await fetch("/api/payments/create-order", {
      method: "POST",
    });

    const orderData = await orderResponse.json();

    if (!orderResponse.ok) {
      throw new Error(orderData.error || "Could not create order");
    }

    // Razorpay Checkout response types
    type RazorpaySuccess = {
      razorpay_order_id: string;
      razorpay_payment_id: string;
      razorpay_signature: string;
    };

    type RazorpayOptions = {
      key: string;
      amount: number;
      currency: string;
      name: string;
      description: string;
      order_id: string;
      handler: (response: RazorpaySuccess) => void;
      modal: { ondismiss: () => void };
      theme: { color: string };
    };

    type RazorpayInstance = {
      open: () => void;
    };

    const RazorpayConstructor = (
      window as Window & {
        Razorpay?: new (
          options: RazorpayOptions
        ) => RazorpayInstance;
      }
    ).Razorpay;

    if (!RazorpayConstructor) {
      throw new Error("Razorpay Checkout is unavailable");
    }

    const options: RazorpayOptions = {
      key: orderData.keyId,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Navratri Anushthan",
      description: "Guided Anushthan Video Access",
      order_id: orderData.orderId,

      handler: async (response) => {
        try {
          const verifyResponse = await fetch("/api/payments/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });

          const result = await verifyResponse.json();

          if (!verifyResponse.ok || !result.verified) {
            alert("Payment could not be confirmed. Please contact support.");
            return;
          }

          // Do NOT rely on localStorage as payment proof.
          // Your server must save access and establish an authenticated session.
          // Redirect only after that process succeeds.
          router.push("/watch?fileId=anusthan-1");
        } catch {
          alert(
            "We couldn't confirm your payment. Please check your payment status before trying again."
          );
        }
      },

      modal: {
        ondismiss: () => {
          console.log("Razorpay Checkout closed");
        },
      },

      theme: { color: "#C49A45" },
    };

    new RazorpayConstructor(options).open();
  } catch (error) {
    console.error(error);
    alert(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  }
};

  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:py-20">
        <Reveal onLoad className="relative z-10">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Ancient Wisdom. Modern Life.
          </p>
          <h1 className="max-w-xl text-5xl leading-[1.06] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-[4.2rem]">
            This Navratri,
            <br />
            bring the <span className="italic text-gold">Divine</span> home.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
            A professionally recorded guided anushthan
          </p>
       <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row cursor-pointer">
            <Button onClick={handleBookClick} className="cursor-pointer">
              {isLoggedIn ? "Watch Your Anushthan Video" : "Book Your Navratri Anushthan"}
            </Button>
          </div>

          {!isLoggedIn && (
            <p className="mt-3 text-xs text-muted">
              Already paid?{" "}
              <a href="/login" className="text-gold underline hover:text-foreground">
                Login here
              </a>
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            <span className="rounded-full border border-border bg-surface px-3 py-2">
              Authentic Vidhi
            </span>
            <span className="rounded-full border border-border bg-surface px-3 py-2">
              Step-by-Step Guidance
            </span>
            <span className="rounded-full border border-border bg-surface px-3 py-2">
              Sanskrit Mantras
            </span>
            <span className="rounded-full border border-border bg-surface px-3 py-2">
              Perform at Your Own Pace
            </span>
          </div>

          <p className="mt-6 text-sm text-muted">
            Hindi guidance • Sanskrit mantras
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-surface p-5 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
             Discount Ends In:
            </p>
            <div className="mt-3 text-xl font-medium text-foreground">
              <CountdownTimer />
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">
              Book in advance and receive your complete preparation guide and
              samagri checklist immediately.
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              The guided Anushthan becomes available one day before Navratri.
            </p>
          </div>
        </Reveal>

        <Reveal onLoad delay={0.12} className="relative">
          <div className="relative min-h-[390px] overflow-hidden rounded-[10rem_10rem_1.5rem_1.5rem] bg-foreground sm:min-h-[520px] lg:min-h-[600px]">
            <div
              role="img"
              aria-label="Pooja ritual setup with offerings and warm devotional lighting"
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${heroImage}")` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/5 to-foreground/10" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 text-surface sm:p-9">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-light-gold">
                  Guided at your pace
                </p>
                <p className="mt-2 max-w-xs font-serif text-2xl leading-tight sm:text-3xl">
                  Follow the rituals with calm, clarity, and confidence.
                </p>
              </div>
              <span
                className="mb-1 hidden h-12 w-12 shrink-0 place-items-center rounded-full border border-surface/50 sm:grid"
                aria-hidden="true"
              >
                <span className="font-serif text-xl">ॐ</span>
              </span>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-2 hidden rounded-full border border-border bg-surface px-5 py-3 text-xs tracking-wide text-muted shadow-sm sm:block lg:-left-7">
            Your pooja. Your participation.
          </div>
        </Reveal>
      </Container>

      {/* --- Password Modal Box --- */}
      {/* {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-foreground">Access Access Code</h3>
            <p className="mt-1 text-sm text-muted">
              Enter the access password to view the video.
            </p>

            <form onSubmit={handlePasswordSubmit} className="mt-4 space-y-4">
              <div>
                <input
                  type="password"
                  placeholder="Enter Password (1234)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted focus:border-gold focus:outline-none"
                  autoFocus
                />
                {errorMsg && (
                  <p className="mt-2 text-xs text-red-500">{errorMsg}</p>
                )}
              </div>

              <div className="flex justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowPasswordModal(false)}
                  disabled={loading}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? "Verifying..." : "Watch Video"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )} */}

      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl border border-border bg-background p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-foreground">Scan & Pay via UPI</h3>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="text-muted hover:text-foreground text-lg font-bold"
              >
                ✕
              </button>
            </div>

            {/* QR Code from Public Folder */}
         
{/* UPI QR Code */}
<div className="mb-6 flex flex-col items-center justify-center">
  <img
    src="/upi-qr.jpeg"
    alt="UPI Payment QR Code"
    className="h-48 w-48 rounded-lg border border-border bg-white p-2 object-contain"
  />

  <p className="mt-2 text-center text-xs text-muted">
    Scan and pay ₹199 using any UPI app.
  </p>

  <div className="mt-4 flex w-full flex-col gap-3 sm:flex-row">
    {/* Download QR */}
    <a
      href="/upi-qr.jpeg"
      download="Navratri-UPI-QR.jpeg"
      className="flex flex-1 items-center justify-center rounded-lg border border-border px-4 py-3 text-sm font-semibold transition hover:bg-surface"
    >
      Download QR Code
    </a>

    {/* Open UPI App */}
    <a
      href="upi://pay?pa=YOUR_UPI_ID&pn=Navratri%20Anushthan&am=199&cu=INR"
      className="flex flex-1 items-center justify-center rounded-lg bg-gold px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
    >
      Pay via UPI App
    </a>
  </div>
</div>


            {/* UPI Payment Form submitting Name, Contact, & UTR */}
            <UPIPaymentForm  />
          </div>
        </div>
      )}



    </section>
  );
}