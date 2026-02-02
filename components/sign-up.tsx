"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Loader2,
  Building2,
  User,
  Upload,
  Check,
  Smartphone,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SignUpProps {
  onBack: () => void
  onSignUpComplete: () => void
}

type Step = 1 | 2 | 3
type VerificationType = "business" | "freelancer" | null

const businessCategories = [
  "Marketing",
  "Legal",
  "Home Services",
  "Creative",
  "IT Support",
  "Finance & Accounting",
  "Consulting",
  "Construction",
  "Transport & Logistics",
  "Health & Wellness",
  "Education & Training",
  "Retail",
  "Other",
]

export function SignUp({ onBack, onSignUpComplete }: SignUpProps) {
  const [step, setStep] = useState<Step>(1)
  const [isLoading, setIsLoading] = useState(false)
  const [verificationType, setVerificationType] = useState<VerificationType>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  // Step 1 fields
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isVodacomNumber, setIsVodacomNumber] = useState(false)

  // Step 2 fields
  const [businessName, setBusinessName] = useState("")
  const [businessCategory, setBusinessCategory] = useState("")
  const [businessDescription, setBusinessDescription] = useState("")
  const [location, setLocation] = useState("")

  // Step 3 fields - Business
  const [cipcDocument, setCipcDocument] = useState<File | null>(null)

  // Step 3 fields - Freelancer
  const [linkedinUrl, setLinkedinUrl] = useState("")
  const [instagramUrl, setInstagramUrl] = useState("")
  const [portfolioUrl, setPortfolioUrl] = useState("")

  const [errors, setErrors] = useState<Record<string, string>>({})

  // Vodacom number detection (starts with 060, 061, 062, 063, 064, 065, 066, 071, 072, 073, 076, 079, 082)
  const checkVodacomNumber = (phoneNumber: string) => {
    const vodacomPrefixes = ["060", "061", "062", "063", "064", "065", "066", "071", "072", "073", "076", "079", "082"]
    const cleanNumber = phoneNumber.replace(/\D/g, "")
    const prefix = cleanNumber.substring(0, 3)
    setIsVodacomNumber(vodacomPrefixes.includes(prefix))
  }

  const handlePhoneChange = (value: string) => {
    setPhone(value)
    checkVodacomNumber(value)
    if (errors.phone) setErrors({ ...errors, phone: "" })
  }

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}

    if (!fullName.trim()) newErrors.fullName = "Full name is required"
    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    } else if (!/\d/.test(password)) {
      newErrors.password = "Password must contain at least 1 number"
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Please enter a valid phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {}

    if (!businessName.trim()) newErrors.businessName = "Business name is required"
    if (!businessCategory) newErrors.businessCategory = "Please select a category"
    if (!businessDescription.trim()) {
      newErrors.businessDescription = "Description is required"
    } else if (businessDescription.length < 20) {
      newErrors.businessDescription = "Description should be at least 20 characters"
    }
    if (!location.trim()) newErrors.location = "Location is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      setStep(3)
    }
  }

  const handleSubmitVerification = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    setShowSuccess(true)
    // Auto redirect after 2.5 seconds
    setTimeout(() => {
      onSignUpComplete()
    }, 2500)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setCipcDocument(file)
    }
  }

  // Success screen
  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-background flex flex-col items-center justify-center p-6 z-50">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2 text-center">Setup Complete!</h1>
        <p className="text-muted-foreground text-center max-w-xs">
          Welcome to VodaPlug. Redirecting you to the app...
        </p>
        <div className="mt-6">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      </div>
    )
  }

  // Verification sub-screens
  if (verificationType === "business") {
    return (
      <div className="fixed inset-0 bg-background flex flex-col z-50">
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <button
            onClick={() => setVerificationType(null)}
            className="p-2 -ml-2 hover:bg-secondary rounded-full transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">Business Verification</h1>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground mb-2">Upload CIPC Documents</h2>
            <p className="text-muted-foreground text-sm">
              Please upload your company registration documents for verification.
            </p>
          </div>

          <div className="space-y-4">
            <Label className="text-foreground font-medium">CIPC Registration Document</Label>
            <label
              htmlFor="cipc-upload"
              className={cn(
                "flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer transition-colors",
                cipcDocument ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-secondary/50"
              )}
            >
              {cipcDocument ? (
                <>
                  <Check className="w-10 h-10 text-primary mb-2" />
                  <p className="text-sm font-medium text-foreground">{cipcDocument.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">Click to change file</p>
                </>
              ) : (
                <>
                  <Upload className="w-10 h-10 text-muted-foreground mb-2" />
                  <p className="text-sm font-medium text-foreground">Click to upload</p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, JPG, or PNG (max 10MB)</p>
                </>
              )}
              <input
                id="cipc-upload"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="p-6 border-t border-border">
          <Button
            onClick={handleSubmitVerification}
            disabled={!cipcDocument || isLoading}
            className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit for Review"
            )}
          </Button>
        </div>
      </div>
    )
  }

  if (verificationType === "freelancer") {
    return (
      <div className="fixed inset-0 bg-background flex flex-col z-50">
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <button
            onClick={() => setVerificationType(null)}
            className="p-2 -ml-2 hover:bg-secondary rounded-full transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">Freelancer Verification</h1>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground mb-2">Link Your Profiles</h2>
            <p className="text-muted-foreground text-sm">
              Add your social profiles to help verify your identity and showcase your work.
            </p>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="linkedin" className="text-foreground font-medium">
                LinkedIn Profile URL
              </Label>
              <Input
                id="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/yourprofile"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="instagram" className="text-foreground font-medium">
                Instagram Profile URL
              </Label>
              <Input
                id="instagram"
                type="url"
                placeholder="https://instagram.com/yourprofile"
                value={instagramUrl}
                onChange={(e) => setInstagramUrl(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="portfolio" className="text-foreground font-medium">
                Portfolio / Website URL (Optional)
              </Label>
              <Input
                id="portfolio"
                type="url"
                placeholder="https://yourportfolio.com"
                value={portfolioUrl}
                onChange={(e) => setPortfolioUrl(e.target.value)}
                className="h-12"
              />
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-border">
          <Button
            onClick={handleSubmitVerification}
            disabled={(!linkedinUrl && !instagramUrl) || isLoading}
            className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Finishing Setup...
              </>
            ) : (
              "Finish Setup"
            )}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-background flex flex-col z-50">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-border">
        <button
          onClick={step === 1 ? onBack : () => setStep((step - 1) as Step)}
          className="p-2 -ml-2 hover:bg-secondary rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-lg font-semibold text-foreground">Create Account</h1>
      </div>

      {/* Progress bar */}
      <div className="px-6 pt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Step {step} of 3</span>
          <span className="text-sm text-muted-foreground">
            {step === 1 && "Account Details"}
            {step === 2 && "Business Profile"}
            {step === 3 && "Verification"}
          </span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {/* Step 1: Account Details */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-1">Create Your Account</h2>
              <p className="text-muted-foreground text-sm">Enter your details to get started</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground font-medium">
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value)
                  if (errors.fullName) setErrors({ ...errors, fullName: "" })
                }}
                className={cn("h-12", errors.fullName && "border-destructive")}
              />
              {errors.fullName && (
                <p className="text-sm text-destructive">{errors.fullName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="signupEmail" className="text-foreground font-medium">
                Email Address
              </Label>
              <Input
                id="signupEmail"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (errors.email) setErrors({ ...errors, email: "" })
                }}
                className={cn("h-12", errors.email && "border-destructive")}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="signupPassword" className="text-foreground font-medium">
                Create Password
              </Label>
              <div className="relative">
                <Input
                  id="signupPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a secure password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) setErrors({ ...errors, password: "" })
                  }}
                  className={cn("h-12 pr-12", errors.password && "border-destructive")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs text-muted-foreground">8+ characters, at least 1 number</p>
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground font-medium">
                Phone Number
              </Label>
              <div className="relative">
                <Input
                  id="phone"
                  type="tel"
                  placeholder="082 123 4567"
                  value={phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className={cn("h-12", isVodacomNumber && "pr-12", errors.phone && "border-destructive")}
                />
                {isVodacomNumber && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <Smartphone className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-medium text-primary">Vodacom</span>
                  </div>
                )}
              </div>
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Business Profile */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-1">Tell Us About Your Business</h2>
              <p className="text-muted-foreground text-sm">Help others find and connect with you</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessName" className="text-foreground font-medium">
                Business Name
              </Label>
              <Input
                id="businessName"
                type="text"
                placeholder="Your Business Name"
                value={businessName}
                onChange={(e) => {
                  setBusinessName(e.target.value)
                  if (errors.businessName) setErrors({ ...errors, businessName: "" })
                }}
                className={cn("h-12", errors.businessName && "border-destructive")}
              />
              {errors.businessName && (
                <p className="text-sm text-destructive">{errors.businessName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessCategory" className="text-foreground font-medium">
                Business Category
              </Label>
              <Select
                value={businessCategory}
                onValueChange={(value) => {
                  setBusinessCategory(value)
                  if (errors.businessCategory) setErrors({ ...errors, businessCategory: "" })
                }}
              >
                <SelectTrigger
                  id="businessCategory"
                  className={cn("h-12", errors.businessCategory && "border-destructive")}
                >
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {businessCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.businessCategory && (
                <p className="text-sm text-destructive">{errors.businessCategory}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessDescription" className="text-foreground font-medium">
                Short Business Description
              </Label>
              <Textarea
                id="businessDescription"
                placeholder="Describe what your business does and what services you offer..."
                value={businessDescription}
                onChange={(e) => {
                  setBusinessDescription(e.target.value)
                  if (errors.businessDescription) setErrors({ ...errors, businessDescription: "" })
                }}
                className={cn(
                  "min-h-[100px] resize-none",
                  errors.businessDescription && "border-destructive"
                )}
              />
              <p className="text-xs text-muted-foreground text-right">{businessDescription.length} characters</p>
              {errors.businessDescription && (
                <p className="text-sm text-destructive">{errors.businessDescription}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-foreground font-medium">
                Location / Main Service Area
              </Label>
              <Input
                id="location"
                type="text"
                placeholder="e.g., Johannesburg, Gauteng"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value)
                  if (errors.location) setErrors({ ...errors, location: "" })
                }}
                className={cn("h-12", errors.location && "border-destructive")}
              />
              {errors.location && (
                <p className="text-sm text-destructive">{errors.location}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Verification */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-1">{"Let's Get You Verified"}</h2>
              <p className="text-muted-foreground text-sm">
                Choose the option that best describes you to complete your profile.
              </p>
            </div>

            {/* Registered Business Card */}
            <button
              onClick={() => setVerificationType("business")}
              className="w-full p-5 border-2 border-border rounded-xl text-left hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/10">
                  <Building2 className="w-6 h-6 text-foreground group-hover:text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">I am a Registered Business</h3>
                  <p className="text-sm text-muted-foreground">
                    For businesses with official CIPC registration documents.
                  </p>
                </div>
              </div>
            </button>

            {/* Freelancer Card */}
            <button
              onClick={() => setVerificationType("freelancer")}
              className="w-full p-5 border-2 border-border rounded-xl text-left hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/10">
                  <User className="w-6 h-6 text-foreground group-hover:text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">I am a Freelancer or Sole Trader</h3>
                  <p className="text-sm text-muted-foreground">
                    For individuals and informal businesses without registration papers.
                  </p>
                </div>
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Footer with action buttons - only show on steps 1 and 2 */}
      {step !== 3 && (
        <div className="p-6 border-t border-border">
          <Button
            onClick={handleNextStep}
            className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {step === 1 && "Next: Set Up Your Business"}
            {step === 2 && "Next: Complete Verification"}
          </Button>
        </div>
      )}
    </div>
  )
}
