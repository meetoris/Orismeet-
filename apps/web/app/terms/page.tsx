/*
 * ⚠️  TEMPLATE — REVIEW WITH LEGAL COUNSEL BEFORE LAUNCH.
 * Structured starting point for Oris Intelligence Private Limited (India). Replace every
 * [BRACKETED] placeholder and have a qualified lawyer review before relying on it.
 * It is NOT legal advice.
 */
import { _generateMetadataForStaticPage } from "app/_utils";
import Link from "next/link";

import { APP_NAME, COMPANY_NAME, SUPPORT_MAIL_ADDRESS } from "@calcom/lib/constants";

const LAST_UPDATED = "6 June 2026";

export const generateMetadata = async () => {
  return await _generateMetadataForStaticPage(
    `Terms of Service`,
    `The terms governing your use of ${APP_NAME}.`,
    undefined,
    undefined,
    "/terms"
  );
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-subtle min-h-screen px-4 py-12">
      <main className="mx-auto max-w-3xl">
        <div className="bg-default border-subtle rounded-2xl border p-8 shadow-sm sm:p-12">
          <header className="border-subtle mb-8 border-b pb-6">
            <Link href="/" className="text-subtle hover:text-emphasis text-sm font-medium">
              ← {APP_NAME}
            </Link>
            <h1 className="font-cal text-emphasis mt-4 text-3xl font-bold">Terms of Service</h1>
            <p className="text-subtle mt-2 text-sm">Last updated: {LAST_UPDATED}</p>
          </header>

          <article className="prose prose-sm dark:prose-invert text-default max-w-none">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of {APP_NAME}{" "}
              (the &ldquo;Service&rdquo;), operated by {COMPANY_NAME} (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing or using the Service, you agree to
              be bound by these Terms. If you do not agree, do not use the Service.
            </p>

            <h2>1. Eligibility &amp; accounts</h2>
            <p>
              You must be at least 18 years old and capable of forming a binding contract to use the
              Service. You are responsible for safeguarding your account credentials and for all
              activity that occurs under your account. Notify us immediately of any unauthorised use.
            </p>

            <h2>2. The Service</h2>
            <p>
              {APP_NAME} provides scheduling and meeting-coordination tools that allow you to manage
              availability, accept bookings, and integrate with third-party calendar and
              video-conferencing services. We may modify, suspend, or discontinue any part of the
              Service at any time.
            </p>

            <h2>3. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any unlawful, fraudulent, or harmful purpose;</li>
              <li>Send spam or unsolicited communications through the Service;</li>
              <li>Infringe the intellectual property or privacy rights of others;</li>
              <li>Interfere with, disrupt, or attempt to gain unauthorised access to the Service or its infrastructure;</li>
              <li>Reverse engineer or misuse the Service except as permitted by applicable law.</li>
            </ul>

            <h2>4. Bookings</h2>
            <p>
              You are responsible for the accuracy of the availability, event details, and information
              you publish, and for honouring confirmed bookings. We are not a party to any agreement
              between you and the individuals who book time with you.
            </p>

            <h2>5. Fees &amp; payment</h2>
            <p>
              Certain features or plans may be offered for a fee. Where applicable, fees, billing
              cycles, and payment terms will be presented to you before purchase, and payments are
              processed by third-party payment processors. Unless required by law or stated otherwise,
              fees are non-refundable. We may change fees on prospective notice. [Confirm billing terms
              and refund policy with the payment provider configuration before enabling paid plans.]
            </p>

            <h2>6. Third-party integrations</h2>
            <p>
              The Service integrates with third-party products (e.g. calendar and video providers).
              Your use of those products is governed by their own terms and privacy policies, and we
              are not responsible for them.
            </p>

            <h2>7. Intellectual property</h2>
            <p>
              The Service, including its software, design, and trademarks, is owned by {COMPANY_NAME}{" "}
              and its licensors and is protected by applicable laws. We grant you a limited,
              non-exclusive, non-transferable, revocable licence to use the Service in accordance with
              these Terms.
            </p>

            <h2>8. Your content</h2>
            <p>
              You retain ownership of the content you submit. You grant us a licence to host and
              process that content solely as necessary to provide the Service. You are responsible for
              ensuring you have the rights to the content you submit.
            </p>

            <h2>9. Termination</h2>
            <p>
              You may stop using the Service and delete your account at any time. We may suspend or
              terminate your access if you breach these Terms or use the Service in a manner that may
              cause harm. Upon termination, the rights granted to you will cease.
            </p>

            <h2>10. Disclaimers</h2>
            <p>
              The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis
              without warranties of any kind, whether express or implied, including fitness for a
              particular purpose and non-infringement, to the fullest extent permitted by law.
            </p>

            <h2>11. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by applicable law, {COMPANY_NAME} shall not be liable
              for any indirect, incidental, special, consequential, or punitive damages, or any loss
              of profits or data, arising out of or related to your use of the Service. [Specify
              aggregate liability cap with legal counsel.]
            </p>

            <h2>12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless {COMPANY_NAME} and its officers, employees, and
              agents from any claims, damages, or expenses arising out of your use of the Service or
              your breach of these Terms.
            </p>

            <h2>13. Governing law &amp; jurisdiction</h2>
            <p>
              These Terms are governed by the laws of India. Subject to applicable law, the courts at
              [City], Karnataka shall have exclusive jurisdiction over any disputes arising out of or
              relating to these Terms or the Service.
            </p>

            <h2>14. Changes to these Terms</h2>
            <p>
              We may revise these Terms from time to time. We will post the updated version on this
              page and revise the &ldquo;Last updated&rdquo; date above. Your continued use of the
              Service after changes become effective constitutes acceptance of the revised Terms.
            </p>

            <h2>15. Contact</h2>
            <p>
              Questions about these Terms? Email{" "}
              <a href={`mailto:${SUPPORT_MAIL_ADDRESS}`}>{SUPPORT_MAIL_ADDRESS}</a>.
            </p>
          </article>
        </div>

        <footer className="text-subtle mt-6 text-center text-xs">
          © {COMPANY_NAME}. ·{" "}
          <Link href="/privacy" className="hover:text-emphasis underline">
            Privacy Policy
          </Link>
        </footer>
      </main>
    </div>
  );
}
