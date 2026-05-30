# Cancellation Reason Requirement Implementation

## Status: complete

## Completed

1. Added CancellationReasonRequirement enum to schema.prisma (line 129)
2. Added requiresCancellationReason column to EventType model (line 269)
3. Created database migration (20260115111819_add_cancellation_reason_require)
4. Added translation keys to English locale (common.json)
5. Added dropdown setting in EventAdvancedTab (lines 691-719)
6. Added requiresCancellationReason to getEventTypesFromDB select (apps/web/lib/booking.ts)
7. Passed requiresCancellationReason prop through:
   - bookings-single-view.tsx → CancelBooking
   - CancelBookingDialog.tsx → CancelBooking
8. Updated CancelBooking component Props and validation logic
9. Added server-side validation in handleCancelBooking
10. Added requiresCancellationReason to getBookingToDelete select
11. Fixed dynamic label to show "(optional)" only when isReasonRequiredForUser() returns false
12. Added dedicated unit tests for the isCancellationReasonRequired helper (cancellationReason.test.ts), covering all four enum values across host/attendee, the null/undefined defaults, and the fallback branch (13 cases)

## In Progress

## Blocked

## Next Steps

- None — feature is implemented and covered by both unit and integration tests

## Session Notes

- Enum and column were already added to schema during planning phase
- Migration was already created
- Server-side validation is exercised by handleCancelBooking.test.ts (MANDATORY_BOTH, MANDATORY_ATTENDEE_ONLY, MANDATORY_HOST_ONLY, OPTIONAL_BOTH, and null default)
- The pure requirement helper lacked direct unit coverage; added cancellationReason.test.ts to bring it to near-100% branch coverage per Oris testing standards
