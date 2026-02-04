"use client"

import { useState, useEffect } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { Onboarding } from "@/components/onboarding"
import { SignIn } from "@/components/sign-in"
import { SignUp } from "@/components/sign-up"
import { HomeScreen } from "@/components/home-screen"
import { SearchResults } from "@/components/search-results"
import { BusinessProfile } from "@/components/business-profile"
import { MicroTaskBoard } from "@/components/micro-task-board"
import { InboxScreen } from "@/components/inbox-screen"
import { ProfileScreen } from "@/components/profile-screen"
import { PremiumModal } from "@/components/premium-modal"
import { SmartContactList } from "@/components/smart-contact-list" // Import the new component

type Screen = "home" | "search-results" | "business-profile"
type AuthScreen = "onboarding" | "sign-in" | "sign-up" | "none"

export default function VodaPlugApp() {
  const [authScreen, setAuthScreen] = useState<AuthScreen>("onboarding")
  const [isBasicUser, setIsBasicUser] = useState(true)
  const [activeTab, setActiveTab] = useState("home")
  const [currentScreen, setCurrentScreen] = useState<Screen>("home")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBusinessId, setSelectedBusinessId] = useState<number | null>(null)
  const [showPremiumModal, setShowPremiumModal] = useState(false)

  useEffect(() => {
    const hasSeenOnboarding = sessionStorage.getItem("vodaplug-onboarded")
    if (hasSeenOnboarding) {
      setAuthScreen("none")
    }
  }, [])

  const handleOnboardingComplete = (isGuest: boolean) => {
    sessionStorage.setItem("vodaplug-onboarded", "true")
    setAuthScreen("none")
    setIsBasicUser(isGuest)
  }

  const handleSignInComplete = () => {
    sessionStorage.setItem("vodaplug-onboarded", "true")
    setAuthScreen("none")
    setIsBasicUser(false)
  }

  const handleSignUpComplete = () => {
    sessionStorage.setItem("vodaplug-onboarded", "true")
    setAuthScreen("none")
    setIsBasicUser(true)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentScreen("search-results")
  }

  const handleBackToHome = () => {
    setCurrentScreen("home")
    setSearchQuery("")
    setSelectedBusinessId(null)
  }

  const handleSelectBusiness = (id: number) => {
    setSelectedBusinessId(id)
    setCurrentScreen("business-profile")
  }

  const handleBackToSearch = () => {
    setCurrentScreen("search-results")
    setSelectedBusinessId(null)
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setCurrentScreen("home")
    setSearchQuery("")
    setSelectedBusinessId(null)
  }

  if (authScreen === "onboarding") {
    return (
      <Onboarding
        onComplete={handleOnboardingComplete}
        onSignIn={() => setAuthScreen("sign-in")}
        onSignUp={() => setAuthScreen("sign-up")}
      />
    )
  }

  if (authScreen === "sign-in") {
    return (
      <SignIn
        onBack={() => setAuthScreen("onboarding")}
        onSignInComplete={handleSignInComplete}
        onForgotPassword={() => {}}
      />
    )
  }

  if (authScreen === "sign-up") {
    return (
      <SignUp
        onBack={() => setAuthScreen("onboarding")}
        onSignUpComplete={handleSignUpComplete}
      />
    )
  }

  const renderScreen = () => {
    if (activeTab === "home") {
      switch (currentScreen) {
        case "search-results":
          return (
            <SearchResults
              query={searchQuery}
              onBack={handleBackToHome}
              onUpgrade={() => setShowPremiumModal(true)}
              onSelectBusiness={handleSelectBusiness}
            />
          )
        case "business-profile":
          return (
            <BusinessProfile
              businessId={selectedBusinessId!}
              onBack={handleBackToSearch}
            />
          )
        default:
          return (
            <HomeScreen
              isBasicUser={isBasicUser}
              onSearch={handleSearch}
              onUpgrade={() => setShowPremiumModal(true)}
            />
          )
      }
    }

    switch (activeTab) {
      case "search":
        // UPDATED: Now renders the Smart Contact List
        return <SmartContactList />
      case "tasks":
        return <MicroTaskBoard />
      case "inbox":
        return <InboxScreen />
      case "profile":
        return (
          <ProfileScreen
            isBasicUser={isBasicUser}
            onUpgrade={() => setShowPremiumModal(true)}
          />
        )
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen bg-background max-w-lg mx-auto relative">
      {renderScreen()}
      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      <PremiumModal
        isOpen={showPremiumModal}
        onClose={() => setShowPremiumModal(false)}
      />
    </main>
  )
}