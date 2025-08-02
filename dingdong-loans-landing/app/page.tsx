"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

type Theme = "monochrome" | "mixed" | "color"

export default function DingDongLanding() {
  const [email, setEmail] = useState("")
  const [theme, setTheme] = useState<Theme>("mixed")
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 0,
  })

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  const cycleTheme = () => {
    setTheme((prev) => {
      if (prev === "monochrome") return "mixed"
      if (prev === "mixed") return "color"
      return "monochrome"
    })
  }

  const getThemeClasses = () => {
    switch (theme) {
      case "monochrome":
        return {
          bg: "bg-white",
          text: "text-black",
          headerBg: "bg-white",
          heroBg: "bg-black",
          heroText: "text-white",
          footerBg: "bg-white",
          accent: "#000000",
          bellColor: "#000000",
          navHover: "hover:bg-black hover:text-white hover:border-black",
          buttonPrimary: "bg-black text-white border-black hover:bg-white hover:text-black hover:border-black",
          buttonSecondary: "bg-white text-black border-white hover:bg-black hover:text-white hover:border-white",
          sectionAlt: "bg-white",
        }
      case "mixed":
        return {
          bg: "bg-white",
          text: "text-black",
          headerBg: "bg-white",
          heroBg: "bg-black",
          heroText: "text-white",
          footerBg: "bg-white",
          accent: "#85CC17",
          bellColor: "#85CC17",
          navHover: "hover:bg-[#85CC17] hover:text-black hover:border-[#85CC17]",
          buttonPrimary: "bg-black text-white border-black hover:bg-[#85CC17] hover:text-black hover:border-[#85CC17]",
          buttonSecondary:
            "bg-white text-black border-white hover:bg-[#85CC17] hover:text-black hover:border-[#85CC17]",
          sectionAlt: "bg-white",
          //Seperate
            // bg: "bg-[#0f1511]", // Very dark green-black
            // text: "text-[#ffffff]",
            // headerBg: "bg-[#1e2922]", // Slightly lighter than bg
            // heroBg: "bg-[#85CC17]", // Keep your green
            // heroText: "text-[#0f1511]",
            // footerBg: "bg-[#0f1511]",
            // accent: "#85CC17",
            // bellColor: "#85CC17",
            // secondary: "#ffd93d", // Warm yellow accent for contrast
            // warm: "#ff6b35", // Warm orange for CTAs
            // light: "#f7fff0", // Clean white with green tint
            // navHover: "hover:bg-[#85CC17] hover:text-[#0f1511] hover:border-[#85CC17]",
            // buttonPrimary: "bg-[#85CC17] text-[#0f1511] border-[#85CC17] hover:bg-[#ffd93d] hover:text-[#0f1511] hover:border-[#ffd93d]",
            // buttonSecondary: "bg-[#ff6b35] text-white border-[#ff6b35] hover:bg-[#85CC17] hover:text-[#0f1511] hover:border-[#85CC17]",
            // sectionAlt: "bg-[#1a2520]", // Warmer alternative section
              // bg: "bg-[#111d14]", // Deep forest green
              // text: "text-[#e8f5e8]", // Very light green-white
              // headerBg: "bg-[#1a2920]", // Medium dark green
              // heroBg: "bg-[#85CC17]", // Your bright green
              // heroText: "text-[#111d14]",
              // footerBg: "bg-[#0a1209]", // Deepest green-black
              // accent: "#85CC17",
              // bellColor: "#85CC17",
              // secondary: "#4a7c59", // Muted forest green
              // tertiary: "#9dd162", // Slightly different bright green
              // light: "#f4f9f4", // Subtle green-tinted white
              // navHover: "hover:bg-[#85CC17] hover:text-[#111d14] hover:border-[#85CC17]",
              // buttonPrimary: "bg-[#85CC17] text-[#111d14] border-[#85CC17] hover:bg-[#9dd162] hover:text-[#111d14] hover:border-[#9dd162]",
              // buttonSecondary: "bg-[#4a7c59] text-[#e8f5e8] border-[#4a7c59] hover:bg-[#85CC17] hover:text-[#111d14] hover:border-[#85CC17]",
              // sectionAlt: "bg-[#1f2d24]", // Warmer alternative section

                // bg: "bg-[#1a2520]",
                // text: "text-[#ffffff]",
                // headerBg: "bg-[#2f3c33]",
                // heroBg: "bg-[#85CC17]", // Your green
                // heroText: "text-[#1a2520]",
                // footerBg: "bg-[#1a2520]",
                // accent: "#85CC17",
                // bellColor: "#85CC17",
                // complementary: "#cc4617", // Red-orange complement to green
                // secondary: "#17cc85", // Teal version of your green
                // light: "#f8fff8",
                // navHover: "hover:bg-[#85CC17] hover:text-[#1a2520] hover:border-[#85CC17]",
                // buttonPrimary: "bg-[#85CC17] text-[#1a2520] border-[#85CC17] hover:bg-[#cc4617] hover:text-white hover:border-[#cc4617]",
                // buttonSecondary: "bg-[#cc4617] text-white border-[#cc4617] hover:bg-[#85CC17] hover:text-[#1a2520] hover:border-[#85CC17]",
                // sectionAlt: "bg-[#243029]", // Warmer alternative section


        }
      case "color":
        return {
                  bg: "bg-[#85CC17]", // Your green is now the main background
                  text: "text-[#1a2520]", // Dark green text
                  headerBg: "bg-[##6bd425]", // Lighter green for header
                  heroBg: "bg-[#1a2520]", // Dark section becomes hero
                  heroText: "text-[#85CC17]", // Green text on dark background
                  footerBg: "bg-[#85CC17]", // Match main bg
                  accent: "#1a2520", // Dark becomes accent
                  bellColor: "#1a2520",
                  secondary: "#2f3c33", // Dark green for variety
                  light: "#243029", // Dark becomes "light"
                  navHover: "hover:bg-[#1a2520] hover:text-[#85CC17] hover:border-[#1a2520]",
                  buttonPrimary: "bg-[#1a2520] text-[#85CC17] border-[#1a2520] hover:bg-[#2f3c33] hover:text-[#85CC17] hover:border-[#2f3c33]",
                  buttonSecondary: "bg-[#243029] text-[#f0f8e8] border-[#243029] hover:bg-[#1a2520] hover:text-[#85CC17] hover:border-[#1a2520]",
                  sectionAlt: "bg-[#a8e063]", // Lighter green alternative section
        }
        // return {
        //   // bg: "bg-[#F3FFDE]",
        //   bg: "bg-[#2f3c33]",
        //   text: "text-white",
        //   // text: "text-[#2F3C33]",
        //   // text: "text-[#6bd425]", //Text for navbar actually
        //   headerBg: "bg-[#2f3c33]",
        //   heroBg: "bg-[#85CC17]",
        //   // heroText: "text-[#F3FFDE]",
        //   heroText: "text-white",
        //   footerBg: "bg-[#2f3c33]",
        //   accent: "#85CC17",
        //   bellColor: "#85CC17",
        //   navHover: "hover:bg-[#85CC17] hover:text-[#2F3C33] hover:border-[#85CC17]",
        //   buttonPrimary:
        //     "bg-[#85CC17] text-[#2F3C33] border-[#85CC17] hover:bg-[#2F3C33] hover:text-[#85CC17] hover:border-[#2F3C33]",
        //   buttonSecondary:
        //     "bg-[#F3FFDE] text-[#2F3C33] border-[#F3FFDE] hover:bg-[#85CC17] hover:text-[#2F3C33] hover:border-[#85CC17]",
        //   sectionAlt: "bg-[#48524A]",
        // }
    }
  }

  const themeClasses = getThemeClasses()

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
    alert("ADDED TO WAITLIST!")
  }

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} font-mono`}>
      {/* Theme Toggle */}
      <div className="fixed top-4 left-4 z-50">
        <Button
          onClick={cycleTheme}
          className={`${themeClasses.buttonPrimary} font-black text-sm px-4 py-2 transform hover:scale-105 transition-all`}
        >
          {theme.toUpperCase()}
        </Button>
      </div>

      {/* Floating Bell */}
      <div className="fixed top-16 right-4 md:top-20 md:right-8 z-50 animate-bounce">
        <div className="text-2xl md:text-4xl filter drop-shadow-lg" style={{ color: themeClasses.bellColor }}>
          🛎️
        </div>
      </div>

      {/* Header */}
      <header
        className={`border-b-4 ${theme === "color" ? "border-[#2F3C33]" : "border-black"} ${themeClasses.headerBg}`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-3">
              <Image
                src="/dingdong-logo.png"
                alt="DingDong Loans"
                width={32}
                height={32}
                className={`${theme === "color" ? "" : "invert"} md:w-10 md:h-10`}
              />
              <span className="text-lg md:text-2xl font-black tracking-tight">DINGDONG LOANS</span>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="#airdrop"
                className={`text-lg font-bold ${themeClasses.navHover} px-3 py-1 border-2 border-transparent transition-all`}
              >
                AIRDROP
              </Link>
              <Link
                href="#how-it-works"
                className={`text-lg font-bold ${themeClasses.navHover} px-3 py-1 border-2 border-transparent transition-all`}
              >
                HOW IT WORKS
              </Link>
              <Link
                href="#waitlist"
                className={`text-lg font-bold ${themeClasses.navHover} px-3 py-1 border-2 border-transparent transition-all`}
              >
                JOIN WAITLIST
              </Link>
            </nav>

            <Button
              onClick={scrollToWaitlist}
              className={`${themeClasses.buttonPrimary} font-black text-sm md:text-lg px-3 md:px-6 py-2 md:py-3 transform hover:scale-105 transition-all border-4`}
            >
              JOIN WAITLIST
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`${themeClasses.heroBg} ${themeClasses.heroText} py-20`}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 leading-none tracking-tighter">
              WHERE DEFI
              <br />
              MEETS GAME
              <br />
              REWARDS
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-8 md:mb-12 tracking-wide px-4">
              GET READY FOR SEASON AIRDROP.
              <br />
              EARN. BORROW. DING THE BELL.
            </p>

            <Button
              size="lg"
              onClick={scrollToWaitlist}
              className={`${themeClasses.buttonSecondary} font-black text-xl md:text-2xl px-8 md:px-12 py-4 md:py-6 transform hover:scale-105 transition-all border-4`}
            >
              JOIN THE AIRDROP WAITLIST
            </Button>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section
        className={`${themeClasses.bg} border-y-4 ${theme === "color" ? "border-[#2F3C33]" : "border-black"} py-16`}
      >
        <div className="container mx-auto px-4 text-center">
          <div
            className={`${themeClasses.heroBg} ${themeClasses.heroText} p-8 border-4 ${theme === "color" ? "border-[#2F3C33]" : "border-black"} transform -rotate-1 hover:rotate-0 transition-transform`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-4">
              <span style={{ color: themeClasses.accent }}>🚨</span> DINGDONG LAUNCH INCOMING
            </h2>
            <p className="text-lg md:text-2xl font-bold mb-6 md:mb-8">BE FIRST. GET REWARDED.</p>

            <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-xs md:max-w-md mx-auto">
              {[
                { value: timeLeft.days, label: "DAYS" },
                { value: timeLeft.hours, label: "HOURS" },
                { value: timeLeft.minutes, label: "MINS" },
                { value: timeLeft.seconds, label: "SECS" },
              ].map((item, index) => (
                <div key={index} className={`${themeClasses.buttonSecondary} p-2 md:p-4 border-2`}>
                  <div className="text-xl md:text-3xl font-black">{item.value}</div>
                  <div className="text-xs md:text-sm font-bold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={`${themeClasses.bg} py-20`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-center mb-12 md:mb-16 tracking-tighter px-4">
            HOW IT WORKS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { num: "01", title: "DEPOSIT CRYPTO", desc: "Lock your assets in our secure protocol" },
              { num: "02", title: "EARN PASSIVE APY", desc: "Watch your crypto grow automatically" },
              { num: "03", title: "BORROW BY LOCKING", desc: "Use assets as collateral for loans" },
              { num: "04", title: "DING THE BELL", desc: "Unlock exclusive game rewards" },
            ].map((step, index) => (
              <div
                key={index}
                className={`${index % 2 === 0 ? themeClasses.heroBg + " " + themeClasses.heroText : themeClasses.bg + " " + themeClasses.text} p-6 md:p-8 border-4 ${theme === "color" ? "border-[#2F3C33]" : "border-black"} transform hover:scale-105 transition-transform`}
              >
                <div className="text-4xl md:text-6xl font-black mb-4">{step.num}</div>
                <h3 className="text-xl md:text-2xl font-black mb-4">{step.title}</h3>
                <p className="text-base md:text-lg font-bold">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section id="waitlist" className={`${themeClasses.heroBg} ${themeClasses.heroText} py-20`}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 tracking-tighter px-4">
              JOIN THE REVOLUTION
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl font-bold mb-8 md:mb-12 px-4">
              BE AMONG THE FIRST 1000 USERS.
              <br />
              GET EXCLUSIVE AIRDROP REWARDS.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-sm sm:max-w-lg mx-auto px-4">
              <Input
                type="email"
                placeholder="YOUR.EMAIL@DOMAIN.COM"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`${themeClasses.buttonSecondary} font-bold text-base md:text-lg px-4 py-3 placeholder:text-gray-500 border-4`}
              />
              <Button
                type="submit"
                className={`${themeClasses.buttonSecondary} font-black text-base md:text-lg px-6 md:px-8 py-3 whitespace-nowrap transform hover:scale-105 transition-all border-4`}
              >
                DING THE BELL
              </Button>
            </form>

            <p className="text-sm font-bold mt-4 opacity-80">NO SPAM. ONLY ALPHA. UNSUBSCRIBE ANYTIME.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`${theme === "color" ? themeClasses.footerBg + " text-[#F3FFDE]" : themeClasses.bg + " " + themeClasses.text} border-t-4 ${theme === "color" ? "border-[#2F3C33]" : "border-black"} py-8`}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image
              src="/dingdong-logo.png"
              alt="DingDong Loans"
              width={32}
              height={32}
              className={`${theme === "color" ? "brightness-0 invert" : "invert"}`}
            />
            <span className="text-xl font-black">DINGDONG LOANS</span>
          </div>
          <p className="font-bold">© 2025 DINGDONG LOANS. ALL RIGHTS RESERVED.</p>
          <p className="font-bold mt-2">DEFI MADE SIMPLE. REWARDS MADE REAL.</p>
        </div>
      </footer>
    </div>
  )
}
