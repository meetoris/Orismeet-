/*
 * ⚠️  TEMPLATE — REVIEW WITH LEGAL COUNSEL BEFORE LAUNCH.
 * This is a structured starting point tailored for Oris Intelligence Private Limited
 * (India / DPDP Act 2023). Replace every [BRACKETED] placeholder and have a qualified
 * lawyer review the full text before relying on it. It is NOT legal advice.
 */
import { _generateMetadataForStaticPage } from "app/_utils";
import Link from "next/link";

import { APP_NAME, COMPANY_NAME, SUPPORT_MAIL_ADDRESS } from "@calcom/lib/constants";

const LAST_UPDATED = "6 June 2026";

export const generateMetadata = async () => {
  return await _generateMetadataForStaticPage(
    `Privacy Policy`,
    `How ${APP_NAME} collects, uses, and protects your personal data.`,
    undefined,
    undefined,
    "/privacy"
  );
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-subtle min-h-screen px-4 py-12">
      <main className="mx-auto max-w-3xl">
        <div className="bg-default border-subtle rounded-2xl border p-8 shadow-sm sm:p-12">
          <header className="border-subtle mb-8 border-b pb-6">
            <Link href="/" className="text-subtle hover:text-emphasis text-sm font-medium">
              ← {APP_NAME}
            </Link>
            <h1 className="font-cal text-emphasis mt-4 text-3xl font-bold">Privacy Policy</h1>
            <p className="text-subtle mt-2 text-sm">Last updated: {LAST_UPDATED}</p>
          </header>

          <article className="prose prose-sm dark:prose-invert text-default max-w-none">
            <p>
              This Privacy Policy explains how {COMPANY_NAME} (&ldquo;{COMPANY_NAME}&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), the operator of{" "}
              {APP_NAME} (the &ldquo;Service&rdquo;), collects, uses, discloses, and safeguards your
              information when you use the Service. We are committed to protecting your personal data
              in accordance with the Digital Personal Data Protection Act, 2023 (&ldquo;DPDP
              Act&rdquo;) and other applicable laws of India.
            </p>
            <p>
              By using {APP_NAME}, you agree to the collection and use of information in accordance
              with this policy.
            </p>

            <h2>1. Who we are</h2>
            <p>
              {COMPANY_NAME} is a company incorporated in India, with its registered office at
              [Registered Office Address]. For any questions about this policy or your personal data,
              contact us at <a href={`mailto:${SUPPORT_MAIL_ADDRESS}`}>{SUPPORT_MAIL_ADDRESS}</a>.
            </p>

            <h2>2. Information we collect</h2>
            <p>We collect the following categories of information:</p>
            <ul>
              <li>
                <strong>Account data</strong> — name, email address, username, password (hashed),
                profile details, and time-zone.
              </li>
              <li>
                <strong>Scheduling &amp; booking data</strong> — event types, availability, bookings,
                attendee names and emails, meeting notes, and any information you or your invitees
                submit in booking forms.
              </li>
              <li>
                <strong>Calendar &amp; integration data</strong> — when you connect a third-party
                calendar (e.g. Google, Microsoft) or app, we access the data necessary to read your
                availability and create events, subject to the permissions you grant.
              </li>
              <li>
                <strong>Payment data</strong> — where paid bookings or subscriptions apply, payment
                is processed by third-party payment processors; we do not store full card details.
              </li>
              <li>
                <strong>Usage &amp; technical data</strong> — IP address, device and browser type,
                pages visited, and diagnostic/log data collected automatically.
              </li>
            </ul>

            <h2>3. How we use your information</h2>
            <ul>
              <li>To provide, operate, and maintain the Service;</li>
              <li>To create and manage bookings and send related notifications and reminders;</li>
              <li>To authenticate you and secure your account;</li>
              <li>To respond to your requests and provide customer support;</li>
              <li>To improve and personalise the Service;</li>
              <li>To comply with legal obligations and enforce our terms.</li>
            </ul>

            <h2>4. Legal basis for processing</h2>
            <p>
              We process your personal data on the basis of your consent and/or for legitimate uses
              permitted under the DPDP Act, including where processing is necessary to perform our
              contract with you. You may withdraw your consent at any time by contacting us, without
              affecting the lawfulness of processing carried out before withdrawal.
            </p>

            <h2>5. How we share information</h2>
            <p>We do not sell your personal data. We share information only as follows:</p>
            <ul>
              <li>
                <strong>With your invitees/hosts</strong> — booking details are shared with the
                relevant parties to a meeting.
              </li>
              <li>
                <strong>Third-party service providers (Data Processors)</strong> — calendar
                providers, video-conferencing providers, email/SMS delivery, payment processors, and
                hosting/infrastructure providers, who process data on our behalf under appropriate
                safeguards.
              </li>
              <li>
                <strong>Legal &amp; safety</strong> — where required by law, regulation, or valid
                legal process, or to protect the rights and safety of users and the public.
              </li>
            </ul>

            <h2>6. Data retention</h2>
            <p>
              We retain personal data for as long as your account is active or as needed to provide
              the Service, and thereafter only as long as necessary to comply with legal obligations,
              resolve disputes, and enforce our agreements. You may request deletion of your account
              and associated data at any time.
            </p>

            <h2>7. Security</h2>
            <p>
              We implement reasonable technical and organisational security measures designed to
              protect your personal data, including encryption of sensitive credentials and access
              controls. However, no method of transmission or storage is completely secure, and we
              cannot guarantee absolute security.
            </p>

            <h2>8. Your rights</h2>
            <p>Subject to applicable law, you have the right to:</p>
            <ul>
              <li>Access and obtain a copy of your personal data;</li>
              <li>Request correction or updating of inaccurate data;</li>
              <li>Request erasure of your personal data;</li>
              <li>Withdraw consent and nominate another individual to exercise your rights;</li>
              <li>Lodge a grievance with our Grievance Officer (see below) and the Data Protection Board of India.</li>
            </ul>

            <h2>9. Cookies</h2>
            <p>
              We use cookies and similar technologies that are necessary to operate the Service (such
              as maintaining your session) and, where applicable, to understand usage. You can
              control cookies through your browser settings.
            </p>

            <h2>10. International data transfers</h2>
            <p>
              Your data may be processed in countries other than India by our service providers. Where
              such transfers occur, we take steps to ensure your data is handled in accordance with
              applicable law.
            </p>

            <h2>11. Children</h2>
            <p>
              The Service is not directed to individuals under the age of 18, and we do not knowingly
              collect personal data from children without verifiable parental/guardian consent as
              required by the DPDP Act.
            </p>

            <h2>12. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the updated version on
              this page and revise the &ldquo;Last updated&rdquo; date above. Your continued use of the
              Service after changes become effective constitutes acceptance of the revised policy.
            </p>

            <h2>13. Grievance Officer &amp; contact</h2>
            <p>
              In accordance with the DPDP Act, our Grievance Officer can be reached at:
            </p>
            <ul>
              <li>Name: [Grievance Officer Name]</li>
              <li>
                Email: <a href={`mailto:${SUPPORT_MAIL_ADDRESS}`}>{SUPPORT_MAIL_ADDRESS}</a>
              </li>
              <li>Address: [Registered Office Address]</li>
            </ul>
            <p>
              For any privacy-related questions, email{" "}
              <a href={`mailto:${SUPPORT_MAIL_ADDRESS}`}>{SUPPORT_MAIL_ADDRESS}</a>.
            </p>
          </article>
        </div>

        <footer className="text-subtle mt-6 text-center text-xs">
          © {COMPANY_NAME}. ·{" "}
          <Link href="/terms" className="hover:text-emphasis underline">
            Terms of Service
          </Link>
        </footer>
      </main>
    </div>
  );
}
