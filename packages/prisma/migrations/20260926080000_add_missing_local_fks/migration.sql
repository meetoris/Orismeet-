-- Add missing foreign-key constraints for genuine local relations that were
-- declared as plain scalar columns in schema.prisma with no @relation.
--
-- This is a Cal.com-based scheduling platform: most nullable *Id-suffixed
-- scalar columns in this schema are genuinely external (Stripe, Google
-- Calendar channel/resource ids, third-party video/calendar provider ids,
-- OAuth provider account ids, ORIS billing ids) and are correctly excluded
-- below, along with two schema-specific conventions found during triage:
--
-- (1) Sentinel-value fields where 0 is used to mean "no team"/"no org"
--     instead of NULL (a hard FK would break every existing 0-valued row):
--       Avatar.teamId, Avatar.userId, TempOrgRedirect.fromOrgId.
--
-- (2) BookingDenormalized -- a denormalized reporting mirror table (see the
--     sibling Prisma `view BookingTimeStatusDenormalized`), deliberately
--     unconstrained since it flattens/duplicates data from Booking/User/
--     Team/EventType for fast querying: eventTypeId, userId, teamId,
--     eventParentId.
--
-- Also excluded (documented soft-FK / audit-immutability pattern, in the
-- schema's own comments): AuditActor.attendeeId/credentialId ("references
-- X.id without FK constraint"), BookingAudit.bookingUid ("stored as a plain
-- string ... to preserve the audit trail even after the booking is
-- deleted").
--
-- Also excluded (polymorphic id, paired with a type/kind discriminator):
--   ReminderMail.referenceId (reminderType).
--
-- Also excluded (grouping/idempotency key, not a row reference):
--   BookingAudit.operationId, SeatChangeLog.operationId,
--   Booking.recurringEventId.
--
-- Also excluded (business/system key, not a foreign key):
--   UserFilterSegmentPreference.systemSegmentId (a code-defined preset key,
--   not a FilterSegment row -- note it's a String while the real
--   segmentId/FilterSegment relation is Int), User.referralLinkId (no
--   ReferralLink model exists), OAuthClient.clientId (the model's own
--   primary key, not a reference to something else).
--
-- Also excluded (external provider/billing ids): Credential.subscriptionId,
-- DestinationCalendar.externalId, User.identityProviderId,
-- BookingReference.meetingId/thirdPartyRecurringEventId/externalCalendarId,
-- SelectedCalendar.externalId/googleChannelId/googleChannelResourceId/
-- channelId/channelResourceId, Payment.externalId, Account.providerAccountId,
-- HolidayCache.calendarId/eventId, DSyncData.directoryId,
-- PlatformBilling/OrganizationOnboarding/CalAiPhoneNumber/TeamBilling/
-- OrganizationBilling/MonthlyProration's stripe*/customerId/subscription*Id
-- fields, Agent.providerAgentId, CalAiPhoneNumber.providerPhoneNumberId,
-- OrisSubscription.tenantId/orisSubscriptionId/lastEventId,
-- OrisWebhookEvent.eventId (its own @id)/tenantId,
-- CalendarCacheEvent.externalId/recurringEventId.
--
-- Two fields matching this schema's actor-reference convention
-- (UserFeatures.assignedBy, TeamFeatures.assignedBy) were investigated but
-- excluded: both are typed String while User.id is Int, and User.email has
-- no unique constraint, so they cannot be modeled as a live relation -- they
-- read as a free-text/audit-trail actor identifier, not an enforceable FK.
--
-- Confirmed against a disposable Postgres replay of the full 598-migration
-- history, with zero pre-existing drift (a diff of the original, unedited
-- schema against the same database produces an empty migration).

-- AddForeignKey
ALTER TABLE "public"."users" ADD CONSTRAINT "users_defaultScheduleId_fkey" FOREIGN KEY ("defaultScheduleId") REFERENCES "public"."Schedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WebhookScheduledTriggers" ADD CONSTRAINT "WebhookScheduledTriggers_appId_fkey" FOREIGN KEY ("appId") REFERENCES "public"."App"("slug") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SelectedSlots" ADD CONSTRAINT "SelectedSlots_eventTypeId_fkey" FOREIGN KEY ("eventTypeId") REFERENCES "public"."EventType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SelectedSlots" ADD CONSTRAINT "SelectedSlots_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CalendarCache" ADD CONSTRAINT "CalendarCache_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DSyncTeamGroupMapping" ADD CONSTRAINT "DSyncTeamGroupMapping_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "public"."Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Watchlist" ADD CONSTRAINT "Watchlist_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "public"."Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WatchlistAudit" ADD CONSTRAINT "WatchlistAudit_changedByUserId_fkey" FOREIGN KEY ("changedByUserId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WatchlistEventAudit" ADD CONSTRAINT "WatchlistEventAudit_watchlistId_fkey" FOREIGN KEY ("watchlistId") REFERENCES "public"."Watchlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WatchlistEventAudit" ADD CONSTRAINT "WatchlistEventAudit_eventTypeId_fkey" FOREIGN KEY ("eventTypeId") REFERENCES "public"."EventType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Agent" ADD CONSTRAINT "Agent_inboundEventTypeId_fkey" FOREIGN KEY ("inboundEventTypeId") REFERENCES "public"."EventType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Agent" ADD CONSTRAINT "Agent_outboundEventTypeId_fkey" FOREIGN KEY ("outboundEventTypeId") REFERENCES "public"."EventType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SeatChangeLog" ADD CONSTRAINT "SeatChangeLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SeatChangeLog" ADD CONSTRAINT "SeatChangeLog_triggeredBy_fkey" FOREIGN KEY ("triggeredBy") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
