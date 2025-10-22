import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <Link href="/">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            At ClearBill, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our medical bill negotiation service. Please read this privacy
            policy carefully.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <h3 className="text-xl font-semibold mb-3 mt-6">Personal Information</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Name, email address, and contact information</li>
            <li>Medical bills and related healthcare documentation</li>
            <li>Payment information for our services</li>
            <li>Communications with our support team</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">Protected Health Information (PHI)</h3>
          <p className="text-muted-foreground leading-relaxed">
            When you upload medical bills, we may collect Protected Health Information as defined by HIPAA. This
            includes information about your medical services, diagnoses, and treatment details visible on your bills.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Analyze and negotiate your medical bills</li>
            <li>Communicate with healthcare providers on your behalf</li>
            <li>Process payments and manage your account</li>
            <li>Provide customer support and respond to your inquiries</li>
            <li>Improve our services and develop new features</li>
            <li>Comply with legal obligations and enforce our terms</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We implement industry-standard security measures to protect your information:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              <strong>Encryption:</strong> All data is encrypted in transit using TLS 1.3 and at rest using AES-256
              encryption
            </li>
            <li>
              <strong>Access Controls:</strong> Strict least-privilege access policies with multi-factor authentication
            </li>
            <li>
              <strong>Audit Logs:</strong> Comprehensive logging of all data access and modifications
            </li>
            <li>
              <strong>Regular Security Audits:</strong> Third-party security assessments and penetration testing
            </li>
            <li>
              <strong>HIPAA Compliance:</strong> Our practices align with HIPAA security and privacy rules
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We do not sell your personal information. We may share your information only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              <strong>Healthcare Providers:</strong> To negotiate bills on your behalf
            </li>
            <li>
              <strong>Service Providers:</strong> With trusted third-party vendors who assist in our operations (under
              strict confidentiality agreements)
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to protect our rights
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with
              continued protection of your data)
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">HIPAA Compliance</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            ClearBill follows HIPAA best practices for handling Protected Health Information (PHI). For enterprise
            customers, we offer Business Associate Agreements (BAAs) that formalize our HIPAA compliance obligations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Your PHI is used solely for the purpose of negotiating your medical bills and is never used for marketing or
            sold to third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
          <p className="text-muted-foreground leading-relaxed">
            We retain your information for as long as necessary to provide our services and comply with legal
            obligations. You may request deletion of your data at any time by contacting us at privacy@clearbill.com.
            Some information may be retained in backup systems for a limited period after deletion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              <strong>Access:</strong> Request a copy of the personal information we hold about you
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate or incomplete information
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your personal information
            </li>
            <li>
              <strong>Portability:</strong> Request transfer of your data to another service
            </li>
            <li>
              <strong>Opt-Out:</strong> Unsubscribe from marketing communications
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            To exercise these rights, contact us at privacy@clearbill.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use cookies and similar tracking technologies to improve your experience, analyze usage patterns, and
            provide personalized content. You can control cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our service is not intended for individuals under the age of 18. We do not knowingly collect personal
            information from children.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting
            the new policy on this page and updating the "Last updated" date. Your continued use of our service after
            changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-muted/50 p-6 rounded-lg">
            <p className="text-muted-foreground leading-relaxed">
              <strong>Email:</strong> privacy@clearbill.com
              <br />
              <strong>Address:</strong> ClearBill Inc., 123 Healthcare Way, San Francisco, CA 94102
              <br />
              <strong>Phone:</strong> (555) 123-4567
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
